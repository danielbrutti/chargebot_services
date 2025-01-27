"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortingPortInListInstance = exports.PortingPortInInstance = exports.PortingPortInContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
class PortingPortInContextImpl {
    constructor(_version, portInRequestSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(portInRequestSid)) {
            throw new Error("Parameter 'portInRequestSid' is not valid.");
        }
        this._solution = { portInRequestSid };
        this._uri = `/Porting/PortIn/${portInRequestSid}`;
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
        operationPromise = operationPromise.then((payload) => new PortingPortInInstance(operationVersion, payload, instance._solution.portInRequestSid));
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
exports.PortingPortInContextImpl = PortingPortInContextImpl;
class PortingPortInInstance {
    constructor(_version, payload, portInRequestSid) {
        this._version = _version;
        this.portInRequestSid = payload.port_in_request_sid;
        this.url = payload.url;
        this.accountSid = payload.account_sid;
        this.notificationEmails = payload.notification_emails;
        this.targetPortInDate = deserialize.iso8601Date(payload.target_port_in_date);
        this.targetPortInTimeRangeStart = payload.target_port_in_time_range_start;
        this.targetPortInTimeRangeEnd = payload.target_port_in_time_range_end;
        this.portInRequestStatus = payload.port_in_request_status;
        this.losingCarrierInformation = payload.losing_carrier_information;
        this.phoneNumbers = payload.phone_numbers;
        this.documents = payload.documents;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this._solution = {
            portInRequestSid: portInRequestSid || this.portInRequestSid,
        };
    }
    get _proxy() {
        this._context =
            this._context ||
                new PortingPortInContextImpl(this._version, this._solution.portInRequestSid);
        return this._context;
    }
    /**
     * Remove a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInInstance
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
            portInRequestSid: this.portInRequestSid,
            url: this.url,
            accountSid: this.accountSid,
            notificationEmails: this.notificationEmails,
            targetPortInDate: this.targetPortInDate,
            targetPortInTimeRangeStart: this.targetPortInTimeRangeStart,
            targetPortInTimeRangeEnd: this.targetPortInTimeRangeEnd,
            portInRequestStatus: this.portInRequestStatus,
            losingCarrierInformation: this.losingCarrierInformation,
            phoneNumbers: this.phoneNumbers,
            documents: this.documents,
            dateCreated: this.dateCreated,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.PortingPortInInstance = PortingPortInInstance;
function PortingPortInListInstance(version) {
    const instance = ((portInRequestSid) => instance.get(portInRequestSid));
    instance.get = function get(portInRequestSid) {
        return new PortingPortInContextImpl(version, portInRequestSid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Porting/PortIn`;
    instance.create = function create(params, headers, callback) {
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
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new PortingPortInInstance(operationVersion, payload));
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
exports.PortingPortInListInstance = PortingPortInListInstance;
