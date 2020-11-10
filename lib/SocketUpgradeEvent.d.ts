/// <reference types="node" />
import { Event } from "bindable-observer";
import { IncomingMessage } from "http";
export declare class SocketUpgradeEvent extends Event {
    response: IncomingMessage;
    constructor(response: IncomingMessage);
    get name(): string;
    get uniqueName(): string;
}
