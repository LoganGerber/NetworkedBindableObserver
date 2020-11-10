/// <reference types="node" />
import { Event } from "bindable-observer";
export declare class SocketPingEvent extends Event {
    data: Buffer;
    constructor(data: Buffer);
    get name(): string;
    get uniqueName(): string;
}
