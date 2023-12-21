import Joi from 'joi';
import { AuditedEntityCreateSchemaDef, AuditedEntityUpdateSchemaDef, AuditedEntitySchemaDef, JsonResponseSchemaDef } from "../shared/schemas";
// uncoment to enable eager loading
//import { EntitySchema as UserSchema } from "./user.schema";

const UserPhoneSchemaDef = {
    phone_number: Joi.string(),
    send_text: Joi.boolean().allow(null),
    primary: Joi.boolean().allow(null),
};

export const EntitySchema = Joi.object({
    ...AuditedEntitySchemaDef,
    ...UserPhoneSchemaDef,
    user_id: Joi.number(),
    // uncoment to enable eager loading
    //user: UserSchema,
});

export const CreateSchema = Joi.object({
    ...AuditedEntityCreateSchemaDef,
    ...UserPhoneSchemaDef
}).keys({
    // overwrite keys for required attributes
    phone_number: Joi.string().required(),
    user_id: Joi.number().required(),
});

export const UpdateSchema = Joi.object({
    ...AuditedEntityUpdateSchemaDef,
    ...UserPhoneSchemaDef
});

export const SearchSchema = Joi.object({
    id: Joi.number(),
    user_id: Joi.number(),
    ...UserPhoneSchemaDef
});

export const ResponseSchema = Joi.object({
    ...JsonResponseSchemaDef,
    body: EntitySchema
});

export const ArrayResponseSchema = Joi.object({
    ...JsonResponseSchemaDef,
    body: Joi.array().items(EntitySchema)
});