"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Organization Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Version_1 = __importDefault(require("../../base/Version"));
const authorize_1 = require("./v1/authorize");
const token_1 = require("./v1/token");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of PreviewIam
     *
     * @param domain - The Twilio (Twilio.PreviewIam) domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    /** Getter for authorize resource */
    get authorize() {
        this._authorize = this._authorize || (0, authorize_1.AuthorizeListInstance)(this);
        return this._authorize;
    }
    /** Getter for token resource */
    get token() {
        this._token = this._token || (0, token_1.TokenListInstance)(this);
        return this._token;
    }
}
exports.default = V1;
