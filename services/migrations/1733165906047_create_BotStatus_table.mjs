import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("bot_status")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("display_on_dashboard", "boolean")
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
  await db.schema.dropTable("bot_status").execute();
}