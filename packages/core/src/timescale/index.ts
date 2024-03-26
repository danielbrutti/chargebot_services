import { Kysely, PostgresDialect, ParseJSONResultsPlugin } from "kysely";
import { Pool } from 'pg';
import { ChargebotGpsTable } from "./chargebot_gps";
import { ChargebotBatteryTable } from "./chargebot_battery";
import { ChargebotInverterTable } from "./chargebot_inverter";
import { ChargebotPDUTable } from "./chargebot_pdu";
import { ChargebotErrorTable } from "./chargebot_error";
import { Config } from "sst/node/config";
import { ChargebotBatteryLevelAggregate } from "./chargebot_battery_level_aggregate";

export interface AnalyticsDatabase {
    chargebot_gps: ChargebotGpsTable,
    chargebot_battery: ChargebotBatteryTable,
    chargebot_inverter: ChargebotInverterTable,
    chargebot_pdu: ChargebotPDUTable,
    chargebot_error: ChargebotErrorTable,
    chargebot_battery_level_aggregate: ChargebotBatteryLevelAggregate,
}

// Configs secrets are set with the following command
// npx sst secrets --stage stage-name set TIMESCALE_HOST hostname
const psqlDialect = new PostgresDialect({
    pool: new Pool({
        database: Config.TIMESCALE_DATABASE,
        host: Config.TIMESCALE_HOST,
        ssl: true,
        user: Config.TIMESCALE_USER,
        password: Config.TIMESCALE_PASSWORD,
        port: +Config.TIMESCALE_PORT,
        // maximum number of clients the pool should contain
        // by default this is set to 10.
        max: 50,
        // number of milliseconds a client must sit idle in the pool and not be checked out
        // before it is disconnected from the backend and discarded
        // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
        idleTimeoutMillis: 30000
    })
})

export default new Kysely<AnalyticsDatabase>({
    dialect: psqlDialect,
    plugins: [new ParseJSONResultsPlugin()],
    log(event): void {
      if (event.level === 'query') {
        console.log(`TimescaleDB > Time: ${event.queryDurationMillis} < SQL: ${event.query.sql} < Params: ${event.query.parameters}`);
      }
    },
});
