"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueueCumulativeStatisticsListInstance = exports.TaskQueueCumulativeStatisticsInstance = exports.TaskQueueCumulativeStatisticsContextImpl = void 0;
const util_1 = require("util");
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class TaskQueueCumulativeStatisticsContextImpl {
    constructor(_version, workspaceSid, taskQueueSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
            throw new Error("Parameter 'workspaceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(taskQueueSid)) {
            throw new Error("Parameter 'taskQueueSid' is not valid.");
        }
        this._solution = { workspaceSid, taskQueueSid };
        this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/CumulativeStatistics`;
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
        if (params["endDate"] !== undefined)
            data["EndDate"] = serialize.iso8601DateTime(params["endDate"]);
        if (params["minutes"] !== undefined)
            data["Minutes"] = params["minutes"];
        if (params["startDate"] !== undefined)
            data["StartDate"] = serialize.iso8601DateTime(params["startDate"]);
        if (params["taskChannel"] !== undefined)
            data["TaskChannel"] = params["taskChannel"];
        if (params["splitByWaitTime"] !== undefined)
            data["SplitByWaitTime"] = params["splitByWaitTime"];
        const headers = {};
        headers["Accept"] = "application/json";
        const instance = this;
        let operationVersion = instance._version, operationPromise = operationVersion.fetch({
            uri: instance._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new TaskQueueCumulativeStatisticsInstance(operationVersion, payload, instance._solution.workspaceSid, instance._solution.taskQueueSid));
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
exports.TaskQueueCumulativeStatisticsContextImpl = TaskQueueCumulativeStatisticsContextImpl;
class TaskQueueCumulativeStatisticsInstance {
    constructor(_version, payload, workspaceSid, taskQueueSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.avgTaskAcceptanceTime = deserialize.integer(payload.avg_task_acceptance_time);
        this.startTime = deserialize.iso8601DateTime(payload.start_time);
        this.endTime = deserialize.iso8601DateTime(payload.end_time);
        this.reservationsCreated = deserialize.integer(payload.reservations_created);
        this.reservationsAccepted = deserialize.integer(payload.reservations_accepted);
        this.reservationsRejected = deserialize.integer(payload.reservations_rejected);
        this.reservationsTimedOut = deserialize.integer(payload.reservations_timed_out);
        this.reservationsCanceled = deserialize.integer(payload.reservations_canceled);
        this.reservationsRescinded = deserialize.integer(payload.reservations_rescinded);
        this.splitByWaitTime = payload.split_by_wait_time;
        this.taskQueueSid = payload.task_queue_sid;
        this.waitDurationUntilAccepted = payload.wait_duration_until_accepted;
        this.waitDurationUntilCanceled = payload.wait_duration_until_canceled;
        this.waitDurationInQueueUntilAccepted =
            payload.wait_duration_in_queue_until_accepted;
        this.tasksCanceled = deserialize.integer(payload.tasks_canceled);
        this.tasksCompleted = deserialize.integer(payload.tasks_completed);
        this.tasksDeleted = deserialize.integer(payload.tasks_deleted);
        this.tasksEntered = deserialize.integer(payload.tasks_entered);
        this.tasksMoved = deserialize.integer(payload.tasks_moved);
        this.workspaceSid = payload.workspace_sid;
        this.url = payload.url;
        this._solution = { workspaceSid, taskQueueSid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new TaskQueueCumulativeStatisticsContextImpl(this._version, this._solution.workspaceSid, this._solution.taskQueueSid);
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
            avgTaskAcceptanceTime: this.avgTaskAcceptanceTime,
            startTime: this.startTime,
            endTime: this.endTime,
            reservationsCreated: this.reservationsCreated,
            reservationsAccepted: this.reservationsAccepted,
            reservationsRejected: this.reservationsRejected,
            reservationsTimedOut: this.reservationsTimedOut,
            reservationsCanceled: this.reservationsCanceled,
            reservationsRescinded: this.reservationsRescinded,
            splitByWaitTime: this.splitByWaitTime,
            taskQueueSid: this.taskQueueSid,
            waitDurationUntilAccepted: this.waitDurationUntilAccepted,
            waitDurationUntilCanceled: this.waitDurationUntilCanceled,
            waitDurationInQueueUntilAccepted: this.waitDurationInQueueUntilAccepted,
            tasksCanceled: this.tasksCanceled,
            tasksCompleted: this.tasksCompleted,
            tasksDeleted: this.tasksDeleted,
            tasksEntered: this.tasksEntered,
            tasksMoved: this.tasksMoved,
            workspaceSid: this.workspaceSid,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.TaskQueueCumulativeStatisticsInstance = TaskQueueCumulativeStatisticsInstance;
function TaskQueueCumulativeStatisticsListInstance(version, workspaceSid, taskQueueSid) {
    if (!(0, utility_1.isValidPathParam)(workspaceSid)) {
        throw new Error("Parameter 'workspaceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(taskQueueSid)) {
        throw new Error("Parameter 'taskQueueSid' is not valid.");
    }
    const instance = (() => instance.get());
    instance.get = function get() {
        return new TaskQueueCumulativeStatisticsContextImpl(version, workspaceSid, taskQueueSid);
    };
    instance._version = version;
    instance._solution = { workspaceSid, taskQueueSid };
    instance._uri = ``;
    instance.toJSON = function toJSON() {
        return instance._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(instance.toJSON(), options);
    };
    return instance;
}
exports.TaskQueueCumulativeStatisticsListInstance = TaskQueueCumulativeStatisticsListInstance;
