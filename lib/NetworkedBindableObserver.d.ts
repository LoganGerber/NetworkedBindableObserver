/// <reference types="node" />
import * as url from "url";
import { BindableObserver } from "bindable-observer";
import * as WebSocket from "ws";
export declare class NetworkedBindableObserverClient extends BindableObserver {
    constructor(address?: string | url.URL, protocols?: string | string[], options?: WebSocket.ClientOptions);
}
