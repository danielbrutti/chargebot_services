import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("bot_firmware_version")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("version_number", "varchar(255)", (col) => col.notNull())
    .addColumn("version_name", "varchar(255)", (col) => col.notNull())
    .addColumn("notes", "text")
    .addColumn("active_date", "timestamptz")
    .addColumn("created_date", "timestamp")
    .addColumn("created_by", "varchar(255)")
    .addColumn("modified_date", "timestamp")
    .addColumn("modified_by", "varchar(255)")
    .addColumn("deleted_date", "timestamp")
    .addColumn("deleted_by", "varchar(255)")
    .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropTable("bot_firmware_version").execute();
}