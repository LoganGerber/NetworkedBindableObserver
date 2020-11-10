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
exports.NetworkedBindableObserverClient = void 0;
var bindable_observer_1 = require("bindable-observer");
var WebSocket = require("ws");
var SocketCloseEvent_1 = require("./SocketCloseEvent");
var SocketErrorEvent_1 = require("./SocketErrorEvent");
var SocketMessageEvent_1 = require("./SocketMessageEvent");
var SocketOpenEvent_1 = require("./SocketOpenEvent");
var SocketPingEvent_1 = require("./SocketPingEvent");
var SocketPongEvent_1 = require("./SocketPongEvent");
var SocketUnexpectedResponseEvent_1 = require("./SocketUnexpectedResponseEvent");
var SocketUpgradeEvent_1 = require("./SocketUpgradeEvent");
var NetworkedBindableObserverClient = /** @class */ (function (_super) {
    __extends(NetworkedBindableObserverClient, _super);
    function NetworkedBindableObserverClient(address, protocols, options) {
        var _this = this;
        if (!address) {
            _this = _super.call(this) || this;
        }
        else {
            _this = _super.call(this, WebSocket, address, protocols, options) || this;
        }
        if (_this.emitter) {
            _this.emitter.on("close", function (code, reason) {
                _this.emit(new SocketCloseEvent_1.SocketCloseEvent(code, reason));
            });
            _this.emitter.on("error", function (error) {
                _this.emit(new SocketErrorEvent_1.SocketErrorEvent(error));
            });
            _this.emitter.on("message", function (data) {
                _this.emit(new SocketMessageEvent_1.SocketMessageEvent(data));
            });
            _this.emitter.on("open", function () {
                _this.emit(new SocketOpenEvent_1.SocketOpenEvent());
            });
            _this.emitter.on("ping", function (data) {
                _this.emit(new SocketPingEvent_1.SocketPingEvent(data));
            });
            _this.emitter.on("pong", function (data) {
                _this.emit(new SocketPongEvent_1.SocketPongEvent(data));
            });
            _this.emitter.on("unexpected-response", function (request, response) {
                _this.emit(new SocketUnexpectedResponseEvent_1.SocketUnexpectedResponseEvent(request, response));
            });
            _this.emitter.on("upgrade", function (response) {
                _this.emit(new SocketUpgradeEvent_1.SocketUpgradeEvent(response));
            });
        }
        return _this;
    }
    return NetworkedBindableObserverClient;
}(bindable_observer_1.BindableObserver));
exports.NetworkedBindableObserverClient = NetworkedBindableObserverClient;
