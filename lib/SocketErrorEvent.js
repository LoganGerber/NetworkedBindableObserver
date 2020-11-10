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
exports.SocketErrorEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketErrorEvent = /** @class */ (function (_super) {
    __extends(SocketErrorEvent, _super);
    function SocketErrorEvent(error) {
        var _this = _super.call(this) || this;
        _this.error = error;
        return _this;
    }
    Object.defineProperty(SocketErrorEvent.prototype, "name", {
        get: function () { return "Socket Client Error"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketErrorEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketErrorEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketErrorEvent;
}(bindable_observer_1.Event));
exports.SocketErrorEvent = SocketErrorEvent;
