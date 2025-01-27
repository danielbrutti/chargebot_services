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
exports.MemberPage = exports.MemberListInstance = exports.MemberInstance = exports.MemberContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class MemberContextImpl {
    constructor(_version, accountSid, queueSid, callSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(queueSid)) {
            throw new Error("Parameter 'queueSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(callSid)) {
            throw new Error("Parameter 'callSid' is not valid.");
        }
        this._solution = { accountSid, queueSid, callSid };
        this._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members/${callSid}.json`;
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
        operationPromise = operationPromise.then((payload) => new MemberInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.queueSid, instance._solution.callSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["url"] === null || params["url"] === undefined) {
            throw new Error("Required parameter \"params['url']\" missing.");
        }
        let data = {};
        data["Url"] = params["url"];
        if (params["method"] !== undefined)
            data["Method"] = params["method"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.update({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MemberInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.queueSid, instance._solution.callSid));
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
exports.MemberContextImpl = MemberContextImpl;
class MemberInstance {
    constructor(_version, payload, accountSid, queueSid, callSid) {
        this._version = _version;
        this.callSid = payload.call_sid;
        this.dateEnqueued = deserialize.rfc2822DateTime(payload.date_enqueued);
        this.position = deserialize.integer(payload.position);
        this.uri = payload.uri;
        this.waitTime = deserialize.integer(payload.wait_time);
        this.queueSid = payload.queue_sid;
        this._solution = { accountSid, queueSid, callSid: callSid || this.callSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new MemberContextImpl(this._version, this._solution.accountSid, this._solution.queueSid, this._solution.callSid);
        return this._context;
    }
    /**
     * Fetch a MemberInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MemberInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            callSid: this.callSid,
            dateEnqueued: this.dateEnqueued,
            position: this.position,
            uri: this.uri,
            waitTime: this.waitTime,
            queueSid: this.queueSid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MemberInstance = MemberInstance;
function MemberListInstance(version, accountSid, queueSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(queueSid)) {
        throw new Error("Parameter 'queueSid' is not valid.");
    }
    const instance = ((callSid) => instance.get(callSid));
    instance.get = function get(callSid) {
        return new MemberContextImpl(version, accountSid, queueSid, callSid);
    };
    instance._version = version;
    instance._solution = { accountSid, queueSid };
    instance._uri = `/Accounts/${accountSid}/Queues/${queueSid}/Members.json`;
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
        operationPromise = operationPromise.then((payload) => new MemberPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new MemberPage(instance._version, payload, instance._solution));
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
exports.MemberListInstance = MemberListInstance;
class MemberPage extends Page_1.default {
    /**
     * Initialize the MemberPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of MemberInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new MemberInstance(this._version, payload, this._solution.accountSid, this._solution.queueSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MemberPage = MemberPage;
