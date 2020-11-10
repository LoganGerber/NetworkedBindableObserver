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
exports.SocketOpenEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketOpenEvent = /** @class */ (function (_super) {
    __extends(SocketOpenEvent, _super);
    function SocketOpenEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SocketOpenEvent.prototype, "name", {
        get: function () { return "Socket Open"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketOpenEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketOpenEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketOpenEvent;
}(bindable_observer_1.Event));
exports.SocketOpenEvent = SocketOpenEvent;
