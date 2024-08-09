import middy from "@middy/core";
import warmup from "@middy/warmup";
import { createError } from '@middy/util';
import Log from '@dazn/lambda-powertools-logger';
import httpErrorHandler from "@middy/http-error-handler";
import validator from "../shared/middlewares/joi-validator";
import jsonBodySerializer from "../shared/middlewares/json-serializer";
import httpSecurityHeaders from '@middy/http-security-headers';
import httpEventNormalizer from '@middy/http-event-normalizer';
// import executionTimeLogger from '../shared/middlewares/time-log';
// import logTimeout from '@dazn/lambda-powertools-middleware-log-timeout';
import { createSuccessResponse, isWarmingUp } from "../shared/rest_utils";
import { IoTData } from "@chargebot-services/core/services/aws/iot_data";
import { BotUUIDPathParamSchema, JsonResponseSchemaDef } from "src/shared/schemas";
import Joi from "joi";

// @ts-expect-error ignore any type for event
export const handler = async (event) => {
  const bot_uuid = event.pathParameters!.bot_uuid!;

  try {
    const [
        systemStatus, configStatus, inverterStatus
    ] = await Promise.all([
      IoTData.getShadowStatus(bot_uuid, 'system'),
      IoTData.getShadowStatus(bot_uuid, 'config'),
      IoTData.getShadowStatus(bot_uuid, 'inverter'),
    ]);

    const response = {
      system: systemStatus?.state?.desired ?? systemStatus?.state?.reported,
      config: configStatus?.state?.desired ?? configStatus?.state?.reported,
      inverter: inverterStatus?.state?.desired ?? inverterStatus?.state?.reported,
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
  // .use(executionTimeLogger())
  .use(httpEventNormalizer())
  // .use(logTimeout())
  .use(validator({ pathParametersSchema: BotUUIDPathParamSchema }))
  // after: inverse order execution
  .use(jsonBodySerializer(false))
  .use(httpSecurityHeaders())
  .use(validator({ responseSchema: Joi.object({
      ...JsonResponseSchemaDef,
      body: Joi.object({
        system: Joi.object().allow(null),
        config: Joi.object().allow(null),
        inverter: Joi.object().allow(null)
      })
    })    
  }))
  // httpErrorHandler must be the last error handler attached, first to execute.
  // When non-http errors (those without statusCode) occur they will be returned with a 500 status code.
  .use(httpErrorHandler());
