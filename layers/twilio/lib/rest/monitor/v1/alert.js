"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Monitor
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
exports.AlertPage = exports.AlertListInstance = exports.AlertInstance = exports.AlertContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class AlertContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Alerts/${sid}`;
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
        operationPromise = operationPromise.then((payload) => new AlertInstance(operationVersion, payload, instance._solution.sid));
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
exports.AlertContextImpl = AlertContextImpl;
class AlertInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.alertText = payload.alert_text;
        this.apiVersion = payload.api_version;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateGenerated = deserialize.iso8601DateTime(payload.date_generated);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.errorCode = payload.error_code;
        this.logLevel = payload.log_level;
        this.moreInfo = payload.more_info;
        this.requestMethod = payload.request_method;
        this.requestUrl = payload.request_url;
        this.requestVariables = payload.request_variables;
        this.resourceSid = payload.resource_sid;
        this.responseBody = payload.response_body;
        this.responseHeaders = payload.response_headers;
        this.sid = payload.sid;
        this.url = payload.url;
        this.requestHeaders = payload.request_headers;
        this.serviceSid = payload.service_sid;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context || new AlertContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Fetch a AlertInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AlertInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            alertText: this.alertText,
            apiVersion: this.apiVersion,
            dateCreated: this.dateCreated,
            dateGenerated: this.dateGenerated,
            dateUpdated: this.dateUpdated,
            errorCode: this.errorCode,
            logLevel: this.logLevel,
            moreInfo: this.moreInfo,
            requestMethod: this.requestMethod,
            requestUrl: this.requestUrl,
            requestVariables: this.requestVariables,
            resourceSid: this.resourceSid,
            responseBody: this.responseBody,
            responseHeaders: this.responseHeaders,
            sid: this.sid,
            url: this.url,
            requestHeaders: this.requestHeaders,
            serviceSid: this.serviceSid,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AlertInstance = AlertInstance;
function AlertListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new AlertContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Alerts`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["logLevel"] !== undefined)
            data["LogLevel"] = params["logLevel"];
        if (params["startDate"] !== undefined)
            data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
        if (params["endDate"] !== undefined)
            data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
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
        operationPromise = operationPromise.then((payload) => new AlertPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new AlertPage(instance._version, payload, instance._solution));
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
exports.AlertListInstance = AlertListInstance;
class AlertPage extends Page_1.default {
    /**
     * Initialize the AlertPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of AlertInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new AlertInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.AlertPage = AlertPage;
