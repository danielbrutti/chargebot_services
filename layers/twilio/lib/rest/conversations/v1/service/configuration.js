"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationListInstance = exports.ConfigurationInstance = exports.ConfigurationContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const notification_1 = require("./configuration/notification");
const webhook_1 = require("./configuration/webhook");
class ConfigurationContextImpl {
    constructor(_version, chatServiceSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
            throw new Error("Parameter 'chatServiceSid' is not valid.");
        }
        this._solution = { chatServiceSid };
        this._uri = `/Services/${chatServiceSid}/Configuration`;
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
        operationPromise = operationPromise.then((payload) => new ConfigurationInstance(operationVersion, payload, instance._solution.chatServiceSid));
        operationPromise = instance._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (params instanceof Function) {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["defaultConversationCreatorRoleSid"] !== undefined)
            data["DefaultConversationCreatorRoleSid"] =
                params["defaultConversationCreatorRoleSid"];
        if (params["defaultConversationRoleSid"] !== undefined)
            data["DefaultConversationRoleSid"] = params["defaultConversationRoleSid"];
        if (params["defaultChatServiceRoleSid"] !== undefined)
            data["DefaultChatServiceRoleSid"] = params["defaultChatServiceRoleSid"];
        if (params["reachabilityEnabled"] !== undefined)
            data["ReachabilityEnabled"] = serialize.bool(params["reachabilityEnabled"]);
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
        operationPromise = operationPromise.then((payload) => new ConfigurationInstance(operationVersion, payload, instance._solution.chatServiceSid));
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
exports.ConfigurationContextImpl = ConfigurationContextImpl;
class ConfigurationInstance {
    constructor(_version, payload, chatServiceSid) {
        this._version = _version;
        this.chatServiceSid = payload.chat_service_sid;
        this.defaultConversationCreatorRoleSid =
            payload.default_conversation_creator_role_sid;
        this.defaultConversationRoleSid = payload.default_conversation_role_sid;
        this.defaultChatServiceRoleSid = payload.default_chat_service_role_sid;
        this.url = payload.url;
        this.links = payload.links;
        this.reachabilityEnabled = payload.reachability_enabled;
        this._solution = { chatServiceSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ConfigurationContextImpl(this._version, this._solution.chatServiceSid);
        return this._context;
    }
    /**
     * Fetch a ConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConfigurationInstance
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
            chatServiceSid: this.chatServiceSid,
            defaultConversationCreatorRoleSid: this.defaultConversationCreatorRoleSid,
            defaultConversationRoleSid: this.defaultConversationRoleSid,
            defaultChatServiceRoleSid: this.defaultChatServiceRoleSid,
            url: this.url,
            links: this.links,
            reachabilityEnabled: this.reachabilityEnabled,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ConfigurationInstance = ConfigurationInstance;
function ConfigurationListInstance(version, chatServiceSid) {
    if (!(0, utility_1.isValidPathParam)(chatServiceSid)) {
        throw new Error("Parameter 'chatServiceSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new ConfigurationContextImpl(version, chatServiceSid);
    };
    instance._version = version;
    instance._solution = { chatServiceSid };
    instance._uri = ``;
    Object.defineProperty(instance, "notifications", {
        get: function notifications() {
            if (!instance._notifications) {
                instance._notifications = (0, notification_1.NotificationListInstance)(instance._version, instance._solution.chatServiceSid);
            }
            return instance._notifications;
        },
    });
    Object.defineProperty(instance, "webhooks", {
        get: function webhooks() {
            if (!instance._webhooks) {
                instance._webhooks = (0, webhook_1.WebhookListInstance)(instance._version, instance._solution.chatServiceSid);
            }
            return instance._webhooks;
        },
    });
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.ConfigurationListInstance = ConfigurationListInstance;
