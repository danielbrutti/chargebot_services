"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Domain_1 = __importDefault(require("../base/Domain"));
const HostedNumbers_1 = __importDefault(require("./preview/HostedNumbers"));
const Sync_1 = __importDefault(require("./preview/Sync"));
const Marketplace_1 = __importDefault(require("./preview/Marketplace"));
const Wireless_1 = __importDefault(require("./preview/Wireless"));
class PreviewBase extends Domain_1.default {
    /**
     * Initialize preview domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio) {
        super(twilio, "https://preview.twilio.com");
    }
    get hosted_numbers() {
        this._hosted_numbers = this._hosted_numbers || new HostedNumbers_1.default(this);
        return this._hosted_numbers;
    }
    get sync() {
        this._sync = this._sync || new Sync_1.default(this);
        return this._sync;
    }
    get marketplace() {
        this._marketplace = this._marketplace || new Marketplace_1.default(this);
        return this._marketplace;
    }
    get wireless() {
        this._wireless = this._wireless || new Wireless_1.default(this);
        return this._wireless;
    }
}
module.exports = PreviewBase;
