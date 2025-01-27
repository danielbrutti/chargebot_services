"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgePage = exports.KnowledgeListInstance = exports.KnowledgeInstance = exports.KnowledgeContextImpl = exports.AssistantsV1ServiceUpdateKnowledgeRequest = exports.AssistantsV1ServiceCreatePolicyRequest = exports.AssistantsV1ServiceCreateKnowledgeRequest = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const chunk_1 = require("./knowledge/chunk");
const knowledgeStatus_1 = require("./knowledge/knowledgeStatus");
class AssistantsV1ServiceCreateKnowledgeRequest {
}
exports.AssistantsV1ServiceCreateKnowledgeRequest = AssistantsV1ServiceCreateKnowledgeRequest;
class AssistantsV1ServiceCreatePolicyRequest {
}
exports.AssistantsV1ServiceCreatePolicyRequest = AssistantsV1ServiceCreatePolicyRequest;
class AssistantsV1ServiceUpdateKnowledgeRequest {
}
exports.AssistantsV1ServiceUpdateKnowledgeRequest = AssistantsV1ServiceUpdateKnowledgeRequest;
class KnowledgeContextImpl {
    constructor(_version, id) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(id)) {
            throw new Error("Parameter 'id' is not valid.");
        }
        this._solution = { id };
        this._uri = `/Knowledge/${id}`;
    }
    get chunks() {
        this._chunks =
            this._chunks || (0, chunk_1.ChunkListInstance)(this._version, this._solution.id);
        return this._chunks;
    }
    get knowledgeStatus() {
        this._knowledgeStatus =
            this._knowledgeStatus ||
                (0, knowledgeStatus_1.KnowledgeStatusListInstance)(this._version, this._solution.id);
        return this._knowledgeStatus;
    }
    remove(callback) {
        const headers = {};
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.remove({
            uri: instance._uri,
            method: "delete",
            headers,
        });
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        const headers = {};
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
            headers,
        });
        operationPromise = operationPromise.then((payload) => new KnowledgeInstance(operationVersion, payload, instance._solution.id));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, headers, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        data = params;
        if (headers === null || headers === undefined) {
            headers = {};
        }
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "put",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new KnowledgeInstance(operationVersion, payload, instance._solution.id));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.KnowledgeContextImpl = KnowledgeContextImpl;
class KnowledgeInstance {
    constructor(_version, payload, id) {
        this._version = _version;
        this.description = payload.description;
        this.id = payload.id;
        this.accountSid = payload.account_sid;
        this.knowledgeSourceDetails = payload.knowledge_source_details;
        this.name = payload.name;
        this.status = payload.status;
        this.type = payload.type;
        this.url = payload.url;
        this.embeddingModel = payload.embedding_model;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this._solution = { id: id || this.id };
    }
    get _proxy() {
        this._context =
            this._context ||
                new KnowledgeContextImpl(this._version, this._solution.id);
        return this._context;
    }
    /**
     * Remove a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the chunks.
     */
    chunks() {
        return this._proxy.chunks;
    }
    /**
     * Access the knowledgeStatus.
     */
    knowledgeStatus() {
        return this._proxy.knowledgeStatus;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            description: this.description,
            id: this.id,
            accountSid: this.accountSid,
            knowledgeSourceDetails: this.knowledgeSourceDetails,
            name: this.name,
            status: this.status,
            type: this.type,
            url: this.url,
            embeddingModel: this.embeddingModel,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.KnowledgeInstance = KnowledgeInstance;
function KnowledgeListInstance(version) {
    const instance = ((id) => instance.get(id));
    instance.get = function get(id) {
        return new KnowledgeContextImpl(version, id);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Knowledge`;
    instance.create = function create(params, headers, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        let data = {};
        data = params;
        if (headers === null || headers === undefined) {
            headers = {};
        }
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new KnowledgeInstance(operationVersion, payload));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["assistantId"] !== undefined)
            data["AssistantId"] = params["assistantId"];
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.pageNumber !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        headers["Accept"] = "application/json";
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new KnowledgePage(operationVersion, payload, instance._solution));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        const operationPromise = instance._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        let pagePromise = operationPromise.then((payload) => new KnowledgePage(instance._version, payload, instance._solution));
        pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
        return pagePromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.KnowledgeListInstance = KnowledgeListInstance;
class KnowledgePage extends Page_1.default {
    /**
     * Initialize the KnowledgePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of KnowledgeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new KnowledgeInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.KnowledgePage = KnowledgePage;
