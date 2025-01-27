"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationInstance = exports.NotificationListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
function NotificationListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/Notifications`;
    instance.create = function create(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["body"] !== undefined)
            data["Body"] = params["body"];
        if (params["priority"] !== undefined)
            data["Priority"] = params["priority"];
        if (params["ttl"] !== undefined)
            data["Ttl"] = params["ttl"];
        if (params["title"] !== undefined)
            data["Title"] = params["title"];
        if (params["sound"] !== undefined)
            data["Sound"] = params["sound"];
        if (params["action"] !== undefined)
            data["Action"] = params["action"];
        if (params["data"] !== undefined)
            data["Data"] = serialize.object(params["data"]);
        if (params["apn"] !== undefined)
            data["Apn"] = serialize.object(params["apn"]);
        if (params["gcm"] !== undefined)
            data["Gcm"] = serialize.object(params["gcm"]);
        if (params["sms"] !== undefined)
            data["Sms"] = serialize.object(params["sms"]);
        if (params["facebookMessenger"] !== undefined)
            data["FacebookMessenger"] = serialize.object(params["facebookMessenger"]);
        if (params["fcm"] !== undefined)
            data["Fcm"] = serialize.object(params["fcm"]);
        if (params["segment"] !== undefined)
            data["Segment"] = serialize.map(params["segment"], (e) => e);
        if (params["alexa"] !== undefined)
            data["Alexa"] = serialize.object(params["alexa"]);
        if (params["toBinding"] !== undefined)
            data["ToBinding"] = serialize.map(params["toBinding"], (e) => e);
        if (params["deliveryCallbackUrl"] !== undefined)
            data["DeliveryCallbackUrl"] = params["deliveryCallbackUrl"];
        if (params["identity"] !== undefined)
            data["Identity"] = serialize.map(params["identity"], (e) => e);
        if (params["tag"] !== undefined)
            data["Tag"] = serialize.map(params["tag"], (e) => e);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        headers["Accept"] = "application/json";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new NotificationInstance(operationVersion, payload, instance._solution.serviceSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.NotificationListInstance = NotificationListInstance;
class NotificationInstance {
    constructor(_version, payload, serviceSid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.identities = payload.identities;
        this.tags = payload.tags;
        this.segments = payload.segments;
        this.priority = payload.priority;
        this.ttl = deserialize.integer(payload.ttl);
        this.title = payload.title;
        this.body = payload.body;
        this.sound = payload.sound;
        this.action = payload.action;
        this.data = payload.data;
        this.apn = payload.apn;
        this.gcm = payload.gcm;
        this.fcm = payload.fcm;
        this.sms = payload.sms;
        this.facebookMessenger = payload.facebook_messenger;
        this.alexa = payload.alexa;
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
            serviceSid: this.serviceSid,
            dateCreated: this.dateCreated,
            identities: this.identities,
            tags: this.tags,
            segments: this.segments,
            priority: this.priority,
            ttl: this.ttl,
            title: this.title,
            body: this.body,
            sound: this.sound,
            action: this.action,
            data: this.data,
            apn: this.apn,
            gcm: this.gcm,
            fcm: this.fcm,
            sms: this.sms,
            facebookMessenger: this.facebookMessenger,
            alexa: this.alexa,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.NotificationInstance = NotificationInstance;
