"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepContextListInstance = exports.StepContextInstance = exports.StepContextContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
const utility_1 = require("../../../../../../base/utility");
class StepContextContextImpl {
    constructor(_version, flowSid, engagementSid, stepSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(flowSid)) {
            throw new Error("Parameter 'flowSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(engagementSid)) {
            throw new Error("Parameter 'engagementSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(stepSid)) {
            throw new Error("Parameter 'stepSid' is not valid.");
        }
        this._solution = { flowSid, engagementSid, stepSid };
        this._uri = `/Flows/${flowSid}/Engagements/${engagementSid}/Steps/${stepSid}/Context`;
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
        operationPromise = operationPromise.then((payload) => new StepContextInstance(operationVersion, payload, instance._solution.flowSid, instance._solution.engagementSid, instance._solution.stepSid));
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
exports.StepContextContextImpl = StepContextContextImpl;
class StepContextInstance {
    constructor(_version, payload, flowSid, engagementSid, stepSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.context = payload.context;
        this.engagementSid = payload.engagement_sid;
        this.flowSid = payload.flow_sid;
        this.stepSid = payload.step_sid;
        this.url = payload.url;
        this._solution = { flowSid, engagementSid, stepSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new StepContextContextImpl(this._version, this._solution.flowSid, this._solution.engagementSid, this._solution.stepSid);
        return this._context;
    }
    /**
     * Fetch a StepContextInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StepContextInstance
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
            context: this.context,
            engagementSid: this.engagementSid,
            flowSid: this.flowSid,
            stepSid: this.stepSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.StepContextInstance = StepContextInstance;
function StepContextListInstance(version, flowSid, engagementSid, stepSid) {
    if (!(0, utility_1.isValidPathParam)(flowSid)) {
        throw new Error("Parameter 'flowSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(engagementSid)) {
        throw new Error("Parameter 'engagementSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(stepSid)) {
        throw new Error("Parameter 'stepSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new StepContextContextImpl(version, flowSid, engagementSid, stepSid);
    };
    instance._version = version;
    instance._solution = { flowSid, engagementSid, stepSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.StepContextListInstance = StepContextListInstance;
