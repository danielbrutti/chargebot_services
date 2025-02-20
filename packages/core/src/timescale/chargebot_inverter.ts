import { ColumnType, Selectable } from 'kysely'

export interface ChargebotInverterTable {
  id: ColumnType<number, never, never>,
  device_id: ColumnType<string, never, never>,
  device_version: ColumnType<string, never, never>,
  timestamp: ColumnType<Date, never, never>,
  timezone: ColumnType<string, never, never>,
  variable: ColumnType<string, never, never>,
  address: ColumnType<string, never, never>,
  value: ColumnType<unknown, never, never>,
  value_boolean: ColumnType<boolean, never, never>,
  value_int: ColumnType<number, never, never>,
  value_long: ColumnType<number, never, never>,
  value_float: ColumnType<number, never, never>,
  value_double: ColumnType<number, never, never>,
  value_string: ColumnType<string, never, never>,
  unit: ColumnType<string, never, never>,
  data_type: ColumnType<string, never, never>,
}

// You should not use the table schema interfaces directly. Instead, you should
// use the `Selectable`, `Insertable` and `Updateable` wrappers. These wrappers
// make sure that the correct types are used in each operation.
export type ChargebotInverter = Selectable<ChargebotInverterTable>

export enum InverterVariable {
  BATTERY_LEVEL_SOC = 'batt_level_soc',
  BATTERY_CURRENT = 'batt_current',
  BATTERY_VOLTAGE = 'batt_voltage',
  BATTERY_POWER = 'batt_power',
  GRID_CURRENT = 'grid_current',
  GRID_VOLTAGE = 'grid_voltage',
  SOLAR_POWER = 'pv_panel_power',
  SOLAR_CURRENT = 'pv_panel_current',
  BATTERY_CHARGE_DIFF = 'batt_charge_diff',
  BATTERY_DISCHARGE_DIFF = 'batt_discharge_diff',
  SOLAR_CHARGE_DIFF = 'pv_charge_diff',
  GRID_CHARGE_DIFF = 'mains_charge_diff',
  GRID_CHARGE_CURRENT = 'mains_charge_current',
  ENERGY_USAGE = 'load_energy_usage',
  LOAD_VOLTAGE = 'load_dc_voltage',
  LOAD_CURRENT = 'load_dc_current',
  LOAD_POWER = 'load_dc_power',
}

