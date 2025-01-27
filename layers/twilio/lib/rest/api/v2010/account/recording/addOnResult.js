"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
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
exports.AddOnResultPage = exports.AddOnResultListInstance = exports.AddOnResultInstance = exports.AddOnResultContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
const payload_1 = require("./addOnResult/payload");
class AddOnResultContextImpl {
    constructor(_version, accountSid, referenceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(referenceSid)) {
            throw new Error("Parameter 'referenceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, referenceSid, sid };
        this._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${sid}.json`;
    }
    get payloads() {
        this._payloads =
            this._payloads ||
                (0, payload_1.PayloadListInstance)(this._version, this._solution.accountSid, this._solution.referenceSid, this._solution.sid);
        return this._payloads;
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
        operationPromise = operationPromise.then((payload) => new AddOnResultInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.referenceSid, instance._solution.sid));
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
exports.AddOnResultContextImpl = AddOnResultContextImpl;
class AddOnResultInstance {
    constructor(_version, payload, accountSid, referenceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.status = payload.status;
        this.addOnSid = payload.add_on_sid;
        this.addOnConfigurationSid = payload.add_on_configuration_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.dateCompleted = deserialize.rfc2822DateTime(payload.date_completed);
        this.referenceSid = payload.reference_sid;
        this.subresourceUris = payload.subresource_uris;
        this._solution = { accountSid, referenceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new AddOnResultContextImpl(this._version, this._solution.accountSid, this._solution.referenceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a AddOnResultInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a AddOnResultInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AddOnResultInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Access the payloads.
     */
    payloads() {
        return this._proxy.payloads;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            accountSid: this.accountSid,
            status: this.status,
            addOnSid: this.addOnSid,
            addOnConfigurationSid: this.addOnConfigurationSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            dateCompleted: this.dateCompleted,
            referenceSid: this.referenceSid,
            subresourceUris: this.subresourceUris,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AddOnResultInstance = AddOnResultInstance;
function AddOnResultListInstance(version, accountSid, referenceSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(referenceSid)) {
        throw new Error("Parameter 'referenceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new AddOnResultContextImpl(version, accountSid, referenceSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, referenceSid };
    instance._uri = `/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults.json`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
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
        operationPromise = operationPromise.then((payload) => new AddOnResultPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new AddOnResultPage(instance._version, payload, instance._solution));
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
exports.AddOnResultListInstance = AddOnResultListInstance;
class AddOnResultPage extends Page_1.default {
    /**
     * Initialize the AddOnResultPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of AddOnResultInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new AddOnResultInstance(this._version, payload, this._solution.accountSid, this._solution.referenceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AddOnResultPage = AddOnResultPage;
