"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketUnexpectedResponseEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketUnexpectedResponseEvent = /** @class */ (function (_super) {
    __extends(SocketUnexpectedResponseEvent, _super);
    function SocketUnexpectedResponseEvent(request, response) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    Object.defineProperty(SocketUnexpectedResponseEvent.prototype, "name", {
        get: function () { return "Socket Unexpected Response"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketUnexpectedResponseEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketUnexpectedResponseEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketUnexpectedResponseEvent;
}(bindable_observer_1.Event));
exports.SocketUnexpectedResponseEvent = SocketUnexpectedResponseEvent;
