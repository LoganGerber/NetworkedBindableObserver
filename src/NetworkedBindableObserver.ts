import * as url from "url";

import { BindableObserver } from "bindable-observer";
import * as WebSocket from "ws";
import { SocketCloseEvent } from "./SocketCloseEvent";
import { SocketErrorEvent } from "./SocketErrorEvent";
import { SocketMessageEvent } from "./SocketMessageEvent";
import { SocketOpenEvent } from "./SocketOpenEvent";
import { SocketPingEvent } from "./SocketPingEvent";
import { SocketPongEvent } from "./SocketPongEvent";
import { ClientRequest, IncomingMessage } from "http";
import { SocketUnexpectedResponseEvent } from "./SocketUnexpectedResponseEvent";
import { SocketUpgradeEvent } from "./SocketUpgradeEvent";

export class NetworkedBindableObserverClient extends BindableObserver {
    constructor(address?: string | url.URL, protocols?: string | string[], options?: WebSocket.ClientOptions) {
        if (!address) {
            super();
        }
        else {
            super(WebSocket, address, protocols, options);
        }

        if (this.emitter) {
            this.emitter.on("close", (code: number, reason: string) => {
                this.emit(new SocketCloseEvent(code, reason));
            });

            this.emitter.on("error", (error: Error) => {
                this.emit(new SocketErrorEvent(error));
            });

            this.emitter.on("message", (data: string | Buffer | ArrayBuffer | Buffer[]) => {
                this.emit(new SocketMessageEvent(data));
            });

            this.emitter.on("open", () => {
                this.emit(new SocketOpenEvent());
            });

            this.emitter.on("ping", (data: Buffer) => {
                this.emit(new SocketPingEvent(data));
            });

            this.emitter.on("pong", (data: Buffer) => {
                this.emit(new SocketPongEvent(data));
            });

            this.emitter.on("unexpected-response", (request: ClientRequest, response: IncomingMessage) => {
                this.emit(new SocketUnexpectedResponseEvent(request, response));
            });

            this.emitter.on("upgrade", (response: IncomingMessage) => {
                this.emit(new SocketUpgradeEvent(response));
            });
        }
    }
}
