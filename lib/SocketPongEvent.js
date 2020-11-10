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
exports.SocketPongEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketPongEvent = /** @class */ (function (_super) {
    __extends(SocketPongEvent, _super);
    function SocketPongEvent(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(SocketPongEvent.prototype, "name", {
        get: function () { return "Pong!"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketPongEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketPongEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketPongEvent;
}(bindable_observer_1.Event));
exports.SocketPongEvent = SocketPongEvent;
