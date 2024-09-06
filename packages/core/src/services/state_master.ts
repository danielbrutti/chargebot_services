export * as StateMaster from "./state_master";
import db from '../database';
import { UpdateResult } from "kysely";
import { StateMaster, StateMasterUpdate, NewStateMaster } from "../database/state_master";


export async function create(state_master: NewStateMaster): Promise<{
  entity: StateMaster | undefined,
  event: unknown
} | undefined> {
    const exists = await db
        .selectFrom('state_master')
        .select(['id'])
        .where((eb) => eb.or([
            eb('name', '=', state_master.name),
        ]))
        .where('deleted_by', 'is', null)
        .executeTakeFirst();
    if (exists) {
        throw Error('Entity already exists with unique values');
    }
    const created = await db
        .insertInto('state_master')
        .values({
            ...state_master,
        })
        .returningAll()
        .executeTakeFirst();
    
    if (!created) {
      return undefined;
    }

    return {
      entity: created,
      // event to dispatch on EventBus on creation
      // undefined as default to not dispatch any event
      event: undefined
    };
}

export async function update(id: number, state_master: StateMasterUpdate): Promise<{
  entity: StateMaster | undefined,
  event: unknown
} | undefined> {
    const updated = await db
        .updateTable('state_master')
        .set({
            ...state_master,
        })
        .where('id', '=', id)
        .where('deleted_by', 'is', null)
        .returningAll()
        .executeTakeFirst();

    if (!updated) {
      return undefined;
    }

    return {
      entity: updated,
      // event to dispatch on EventBus on creation
      // undefined as default to not dispatch any event
      event: undefined
    };
}

export async function remove(id: number, user_id: string): Promise<{
  entity: StateMaster | undefined,
  event: unknown
} | undefined> {
    const deleted = await db
        .updateTable('state_master')
        .set({ deleted_date: new Date(), deleted_by: user_id })
        .where('id', '=', id)
        .where('deleted_by', 'is', null)
        .returningAll()
        .executeTakeFirst();

  if (!deleted) {
    return undefined;
  }

  return {
    entity: deleted,
    // event to dispatch on EventBus on creation
    // undefined as default to not dispatch any event
    event: undefined
  };
}

export async function removeByCriteria(criteria: Partial<StateMaster>, user_id: string): Promise<UpdateResult[]> {
    return buildUpdateQuery(criteria)
        .set({ deleted_date: new Date(), deleted_by: user_id })
        .execute();
}

export async function hard_remove(id: number): Promise<void> {
    db
        .deleteFrom('state_master')
        .where('id', '=', id)
        .executeTakeFirst();
}

export async function list(): Promise<StateMaster[]> {
    return db
        .selectFrom("state_master")
        .selectAll()
        .where('deleted_by', 'is', null)
        .orderBy('name', 'asc')
        .execute();
}

export async function paginate(page: number, pageSize: number): Promise<StateMaster[]> {
    return db
        .selectFrom("state_master")
        .selectAll()
        .where('deleted_by', 'is', null)
        .limit(pageSize)
        .offset((page - 1) * pageSize)
        .orderBy('name', 'asc')
        .execute();
}

export async function lazyGet(id: number): Promise<StateMaster | undefined> {
    return db
        .selectFrom("state_master")
        .selectAll()
        .where('id', '=', id)
        .where('deleted_by', 'is', null)
        .executeTakeFirst();
}

export async function get(id: number): Promise<StateMaster | undefined> {
    return db
        .selectFrom("state_master")
        .selectAll()
        .where('id', '=', id)
        .where('deleted_by', 'is', null)
        .executeTakeFirst();
}

export async function findByCriteria(criteria: Partial<StateMaster>): Promise<StateMaster[]> {
  const query = buildSelectQuery(criteria);

  return query
    .selectAll()
    .orderBy('name', 'asc')
    .execute();
}

export async function lazyFindByCriteria(criteria: Partial<StateMaster>): Promise<StateMaster[]> {
  const query = buildSelectQuery(criteria);

  return query
    .selectAll()
    .orderBy('name', 'asc')
    .execute();
}

export async function findOneByCriteria(criteria: Partial<StateMaster>): Promise<StateMaster | undefined> {
  const query = buildSelectQuery(criteria);

  return query
    .selectAll()
    .limit(1)
    .executeTakeFirst();
}

export async function lazyFindOneByCriteria(criteria: Partial<StateMaster>): Promise<StateMaster | undefined> {
  const query = buildSelectQuery(criteria);

  return query
    .selectAll()
    .limit(1)
    .executeTakeFirst();
}

function buildSelectQuery(criteria: Partial<StateMaster>) {
  let query = db.selectFrom('state_master');
  query = getCriteriaQuery(query, criteria);
  return query;
}

function buildUpdateQuery(criteria: Partial<StateMaster>) {
  let query = db.updateTable('state_master');
  query = getCriteriaQuery(query, criteria);
  return query;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCriteriaQuery(query: any, criteria: Partial<StateMaster>): any {
  query = query.where('deleted_by', 'is', null);

  if (criteria.id) {
    query = query.where('id', '=', criteria.id);
  }

  if (criteria.name !== undefined) {
    query = query.where(
      'name', 
      criteria.name === null ? 'is' : '=', 
      criteria.name
    );
  }
  if (criteria.abbreviation !== undefined) {
    query = query.where(
      'abbreviation', 
      criteria.abbreviation === null ? 'is' : '=', 
      criteria.abbreviation
    );
  }
  if (criteria.country !== undefined) {
    query = query.where(
      'country', 
      criteria.country === null ? 'is' : '=', 
      criteria.country
    );
  }


  if (criteria.created_by) {
    query = query.where('created_by', '=', criteria.created_by);
  }

  if (criteria.modified_by !== undefined) {
    query = query.where(
      'modified_by', 
      criteria.modified_by === null ? 'is' : '=', 
      criteria.modified_by
    );
  }

  return query;
}
