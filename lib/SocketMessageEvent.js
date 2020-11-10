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
exports.SocketMessageEvent = void 0;
var bindable_observer_1 = require("bindable-observer");
var SocketMessageEvent = /** @class */ (function (_super) {
    __extends(SocketMessageEvent, _super);
    function SocketMessageEvent(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(SocketMessageEvent.prototype, "name", {
        get: function () { return "Socket Message"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SocketMessageEvent.prototype, "uniqueName", {
        get: function () { return "LoganGerber-NetworkedBindableObserver-SocketMessageEvent"; },
        enumerable: false,
        configurable: true
    });
    return SocketMessageEvent;
}(bindable_observer_1.Event));
exports.SocketMessageEvent = SocketMessageEvent;
