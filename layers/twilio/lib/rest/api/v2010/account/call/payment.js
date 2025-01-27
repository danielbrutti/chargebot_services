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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentListInstance = exports.PaymentInstance = exports.PaymentContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class PaymentContextImpl {
    constructor(_version, accountSid, callSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(accountSid)) {
            throw new Error("Parameter 'accountSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(callSid)) {
            throw new Error("Parameter 'callSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { accountSid, callSid, sid };
        this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Payments/${sid}.json`;
    }
    update(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["idempotencyKey"] === null ||
            params["idempotencyKey"] === undefined) {
            throw new Error("Required parameter \"params['idempotencyKey']\" missing.");
        }
        if (params["statusCallback"] === null ||
            params["statusCallback"] === undefined) {
            throw new Error("Required parameter \"params['statusCallback']\" missing.");
        }
        let data = {};
        data["IdempotencyKey"] = params["idempotencyKey"];
        data["StatusCallback"] = params["statusCallback"];
        if (params["capture"] !== undefined)
            data["Capture"] = params["capture"];
        if (params["status"] !== undefined)
            data["Status"] = params["status"];
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
        operationPromise = operationPromise.then((payload) => new PaymentInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.callSid, instance._solution.sid));
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
exports.PaymentContextImpl = PaymentContextImpl;
class PaymentInstance {
    constructor(_version, payload, accountSid, callSid, sid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.callSid = payload.call_sid;
        this.sid = payload.sid;
        this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
        this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
        this.uri = payload.uri;
        this._solution = { accountSid, callSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new PaymentContextImpl(this._version, this._solution.accountSid, this._solution.callSid, this._solution.sid);
        return this._context;
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
            accountSid: this.accountSid,
            callSid: this.callSid,
            sid: this.sid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            uri: this.uri,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.PaymentInstance = PaymentInstance;
function PaymentListInstance(version, accountSid, callSid) {
    if (!(0, utility_1.isValidPathParam)(accountSid)) {
        throw new Error("Parameter 'accountSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(callSid)) {
        throw new Error("Parameter 'callSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new PaymentContextImpl(version, accountSid, callSid, sid);
    };
    instance._version = version;
    instance._solution = { accountSid, callSid };
    instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/Payments.json`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["idempotencyKey"] === null ||
            params["idempotencyKey"] === undefined) {
            throw new Error("Required parameter \"params['idempotencyKey']\" missing.");
        }
        if (params["statusCallback"] === null ||
            params["statusCallback"] === undefined) {
            throw new Error("Required parameter \"params['statusCallback']\" missing.");
        }
        let data = {};
        data["IdempotencyKey"] = params["idempotencyKey"];
        data["StatusCallback"] = params["statusCallback"];
        if (params["bankAccountType"] !== undefined)
            data["BankAccountType"] = params["bankAccountType"];
        if (params["chargeAmount"] !== undefined)
            data["ChargeAmount"] = params["chargeAmount"];
        if (params["currency"] !== undefined)
            data["Currency"] = params["currency"];
        if (params["description"] !== undefined)
            data["Description"] = params["description"];
        if (params["input"] !== undefined)
            data["Input"] = params["input"];
        if (params["minPostalCodeLength"] !== undefined)
            data["MinPostalCodeLength"] = params["minPostalCodeLength"];
        if (params["parameter"] !== undefined)
            data["Parameter"] = serialize.object(params["parameter"]);
        if (params["paymentConnector"] !== undefined)
            data["PaymentConnector"] = params["paymentConnector"];
        if (params["paymentMethod"] !== undefined)
            data["PaymentMethod"] = params["paymentMethod"];
        if (params["postalCode"] !== undefined)
            data["PostalCode"] = serialize.bool(params["postalCode"]);
        if (params["securityCode"] !== undefined)
            data["SecurityCode"] = serialize.bool(params["securityCode"]);
        if (params["timeout"] !== undefined)
            data["Timeout"] = params["timeout"];
        if (params["tokenType"] !== undefined)
            data["TokenType"] = params["tokenType"];
        if (params["validCardTypes"] !== undefined)
            data["ValidCardTypes"] = params["validCardTypes"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        headers["Accept"] = "application/json";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: instance._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new PaymentInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.callSid));
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
exports.PaymentListInstance = PaymentListInstance;
