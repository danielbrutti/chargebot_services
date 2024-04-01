import middy from "@middy/core";
import warmup from "@middy/warmup";
import { createError } from '@middy/util';
import Log from '@dazn/lambda-powertools-logger';
import httpErrorHandler from "@middy/http-error-handler";
import { ResponseSchema } from "../schemas/bot_status.schema";
import validator from "../shared/middlewares/joi-validator";
import jsonBodySerializer from "../shared/middlewares/json-serializer";
import httpSecurityHeaders from '@middy/http-security-headers';
import httpEventNormalizer from '@middy/http-event-normalizer';
import executionTimeLogger from '../shared/middlewares/time-log';
// import logTimeout from '@dazn/lambda-powertools-middleware-log-timeout';
import { createSuccessResponse, isWarmingUp } from "../shared/rest_utils";
import { ChargebotBattery } from "@chargebot-services/core/services/analytics/chargebot_battery";
import { ChargebotInverter } from "@chargebot-services/core/services/analytics/chargebot_inverter";
import { ChargebotPDU, translatePDUState } from "@chargebot-services/core/services/analytics/chargebot_pdu";
import { ChargebotError } from "@chargebot-services/core/services/analytics/chargebot_error";
import { IoTData } from "@chargebot-services/core/services/aws/iot_data";
import { InverterVariable } from "@chargebot-services/core/timescale/chargebot_inverter";
import { BotUUIDPathParamSchema } from "src/shared/schemas";
import { getNumber } from "../shared/rest_utils";
import { DateTime } from "luxon";
import { PDUVariable } from "@chargebot-services/core/timescale/chargebot_pdu";

// @ts-expect-error ignore any type for event
export const handler = async (event) => {
  const bot_uuid = event.pathParameters!.bot_uuid!;

  try {
    const [
        batteryState, inverterStatus, pduStatus, connStatus, systemStatus, iotStatus, todayUsage
    ] = await Promise.all([
      ChargebotBattery.getBatteryStatus(bot_uuid),
      ChargebotInverter.getInverterStatus(bot_uuid),
      ChargebotPDU.getPDUStatus(bot_uuid),
      ChargebotError.getConnectionStatus(bot_uuid),
      ChargebotError.getSystemStatus(bot_uuid),
      IoTData.getSystemStatus(bot_uuid, 'system'),
      ChargebotInverter.getTodayTotals(bot_uuid, [
        InverterVariable.BATTERY_CHARGE_DIFF,
        InverterVariable.BATTERY_DISCHARGE_DIFF,
        InverterVariable.SOLAR_CHARGE_DIFF,
        InverterVariable.GRID_CHARGE_DIFF,
        InverterVariable.ENERGY_USAGE
      ]),
    ]);

    const inverterVariables: { [key: string]: unknown } = inverterStatus.reduce((acc: { [key: string]: unknown }, obj) => {
      acc[obj.variable] = obj.value;
      return acc;
    }, {});

    const pduVariables: { [key: string]: unknown } = pduStatus.reduce((acc: { [key: string]: unknown }, obj) => {
      acc[obj.variable] = obj.value;
      return acc;
    }, {});

    const todayUsageVariables: { [key: string]: unknown } = todayUsage.reduce((acc: { [key: string]: unknown }, obj) => {
      acc[obj.variable] = obj.value;
      return acc;
    }, {});

    const batteryCharging = getNumber(todayUsageVariables[InverterVariable.BATTERY_CHARGE_DIFF]);
    const batteryDischarging = getNumber(todayUsageVariables[InverterVariable.BATTERY_DISCHARGE_DIFF]);
    const solarCharging = getNumber(todayUsageVariables[InverterVariable.SOLAR_CHARGE_DIFF]);
    const gridCharging = getNumber(todayUsageVariables[InverterVariable.GRID_CHARGE_DIFF]);
    const energyUsage = getNumber(todayUsageVariables[InverterVariable.ENERGY_USAGE]);

    const iotConnected = iotStatus?.state?.reported?.connected === 'true' ?? false;

    const iotConnectedTime = iotStatus?.metadata?.reported?.connected?.timestamp;
    const inverterLastReport = inverterStatus?.length > 0 ? DateTime.fromJSDate(inverterStatus[0].timestamp) : null;
    const lastSeen = inverterLastReport
      ? inverterLastReport.setZone('UTC').toISO()
      : (iotConnectedTime ? DateTime.fromSeconds(iotConnectedTime).setZone('UTC').toISO() : null);

    const response = {
      bot_uuid,
      battery_level: getNumber(batteryState?.battery_level),
      battery_status: batteryState?.battery_status ?? 'UNKNOWN',
      output_current: getNumber(pduVariables[PDUVariable.CURRENT]),
      grid_current: getNumber(inverterVariables[InverterVariable.GRID_CURRENT]),
      solar_power: getNumber(inverterVariables[InverterVariable.SOLAR_POWER]),
      today_energy_usage: getNumber(energyUsage),
      today_total_charging: getNumber(gridCharging) + getNumber(solarCharging),
      today_grid_charging: getNumber(gridCharging) ,
      today_solar_charging: getNumber(solarCharging),
      today_battery_charging: getNumber(batteryCharging),
      today_battery_discharging: getNumber(batteryDischarging),
      pdu_status: translatePDUState(pduVariables[PDUVariable.STATE] as number),
      connection_status: (iotConnected || (connStatus && connStatus.value === 0)) ? 'OK' : 'ERROR',
      system_status: systemStatus && systemStatus.value === 0 ? 'OK' : 'ERROR',
      last_seen: lastSeen
    };

    return createSuccessResponse(response);
  } catch (error) {
    Log.error("ERROR", { error });
    // create and throw database errors
    const httpError = createError(406, "cannot query bot status", { expose: true });
    httpError.details = (<Error>error).message;
    throw httpError;
  }
};

export const main = middy(handler)
  // before
  .use(warmup({ isWarmingUp }))
  .use(executionTimeLogger())
  .use(httpEventNormalizer())
  // .use(logTimeout())
  .use(validator({ pathParametersSchema: BotUUIDPathParamSchema }))
  // after: inverse order execution
  .use(jsonBodySerializer(false))
  .use(httpSecurityHeaders())
  .use(validator({ responseSchema: ResponseSchema }))
  // httpErrorHandler must be the last error handler attached, first to execute.
  // When non-http errors (those without statusCode) occur they will be returned with a 500 status code.
  .use(httpErrorHandler());
