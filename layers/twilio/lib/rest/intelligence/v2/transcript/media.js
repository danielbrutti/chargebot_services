"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Intelligence
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaListInstance = exports.MediaInstance = exports.MediaContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class MediaContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Transcripts/${sid}/Media`;
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
        if (params["redacted"] !== undefined)
            data["Redacted"] = serialize.bool(params["redacted"]);
        const headers = {};
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new MediaInstance(operationVersion, payload, instance._solution.sid));
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
exports.MediaContextImpl = MediaContextImpl;
class MediaInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.mediaUrl = payload.media_url;
        this.serviceSid = payload.service_sid;
        this.sid = payload.sid;
        this.url = payload.url;
        this._solution = { sid };
    }
    get _proxy() {
        this._context =
            this._context || new MediaContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    fetch(params, callback) {
        return this._proxy.fetch(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            mediaUrl: this.mediaUrl,
            serviceSid: this.serviceSid,
            sid: this.sid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.MediaInstance = MediaInstance;
function MediaListInstance(version, sid) {
    if (!(0, utility_1.isValidPathParam)(sid)) {
        throw new Error("Parameter 'sid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new MediaContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = { sid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.MediaListInstance = MediaListInstance;
