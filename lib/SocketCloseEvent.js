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
exports.SocketCloseEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketCloseEvent = /** @class */ (function (_super) {
    __extends(SocketCloseEvent, _super);
    function SocketCloseEvent(code, reason) {
        var _this = _super.call(this) || this;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    Object.defineProperty(SocketCloseEvent.prototype, "name", {
        get: function () { return "Socket Client Closed"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketCloseEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketCloseEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketCloseEvent;
}(bindable_observer_1.Event));
exports.SocketCloseEvent = SocketCloseEvent;
