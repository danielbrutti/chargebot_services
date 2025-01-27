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
exports.RecordingPage = exports.RecordingListInstance = exports.RecordingInstance = exports.RecordingContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const addOnResult_1 = require("./recording/addOnResult");
const transcription_1 = require("./recording/transcription");
class RecordingContextImpl {
    constructor(_version, accountSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, sid };
        this._uri = `/Accounts/${accountSid}/Recordings/${sid}.json`;
    }
    get addOnResults() {
        this._addOnResults =
            this._addOnResults ||
                (0, addOnResult_1.AddOnResultListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._addOnResults;
    }
    get transcriptions() {
        this._transcriptions =
            this._transcriptions ||
                (0, transcription_1.TranscriptionListInstance)(this._version, this._solution.accountSid, this._solution.sid);
        return this._transcriptions;
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
    fetch(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["includeSoftDeleted"] !== undefined)
            data["IncludeSoftDeleted"] = serialize.bool(params["includeSoftDeleted"]);
        const headers = {};
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new RecordingInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
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
exports.RecordingContextImpl = RecordingContextImpl;
class RecordingInstance {
    constructor(_version, payload, accountSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.apiVersion = payload.api_version;
        this.callSid = payload.call_sid;
        this.conferenceSid = payload.conference_sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.startTime = deserialize.rfc2822DateTime(payload.start_time);
        this.duration = payload.duration;
        this.sid = payload.sid;
        this.price = payload.price;
        this.priceUnit = payload.price_unit;
        this.status = payload.status;
        this.channels = deserialize.integer(payload.channels);
        this.source = payload.source;
        this.errorCode = deserialize.integer(payload.error_code);
        this.uri = payload.uri;
        this.encryptionDetails = payload.encryption_details;
        this.subresourceUris = payload.subresource_uris;
        this.mediaUrl = payload.media_url;
        this._solution = { accountSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new RecordingContextImpl(this._version, this._solution.accountSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a RecordingInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    fetch(params, callback) {
        return this._proxy.fetch(params, callback);
    }
    /**
     * Access the addOnResults.
     */
    addOnResults() {
        return this._proxy.addOnResults;
    }
    /**
     * Access the transcriptions.
     */
    transcriptions() {
        return this._proxy.transcriptions;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            apiVersion: this.apiVersion,
            callSid: this.callSid,
            conferenceSid: this.conferenceSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            startTime: this.startTime,
            duration: this.duration,
            sid: this.sid,
            price: this.price,
            priceUnit: this.priceUnit,
            status: this.status,
            channels: this.channels,
            source: this.source,
            errorCode: this.errorCode,
            uri: this.uri,
            encryptionDetails: this.encryptionDetails,
            subresourceUris: this.subresourceUris,
            mediaUrl: this.mediaUrl,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.RecordingInstance = RecordingInstance;
function RecordingListInstance(version, accountSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new RecordingContextImpl(version, accountSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid };
    instance._uri = `/Accounts/${accountSid}/Recordings.json`;
    instance.page = function page(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["dateCreated"] !== undefined)
            data["DateCreated"] = serialize.iso8601DateTime(params["dateCreated"]);
        if (params["dateCreatedBefore"] !== undefined)
            data["DateCreated<"] = serialize.iso8601DateTime(params["dateCreatedBefore"]);
        if (params["dateCreatedAfter"] !== undefined)
            data["DateCreated>"] = serialize.iso8601DateTime(params["dateCreatedAfter"]);
        if (params["callSid"] !== undefined)
            data["CallSid"] = params["callSid"];
        if (params["conferenceSid"] !== undefined)
            data["ConferenceSid"] = params["conferenceSid"];
        if (params["includeSoftDeleted"] !== undefined)
            data["IncludeSoftDeleted"] = serialize.bool(params["includeSoftDeleted"]);
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
        operationPromise = operationPromise.then((payload) => new RecordingPage(operationVersion, payload, instance._solution));
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
        let pagePromise = operationPromise.then((payload) => new RecordingPage(instance._version, payload, instance._solution));
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
exports.RecordingListInstance = RecordingListInstance;
class RecordingPage extends Page_1.default {
    /**
     * Initialize the RecordingPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of RecordingInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new RecordingInstance(this._version, payload, this._solution.accountSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.RecordingPage = RecordingPage;
