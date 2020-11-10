/// <reference types="node" />
import { Event } from "bindable-observer";
export declare class SocketMessageEvent extends Event {
    data: string | Buffer | ArrayBuffer | Buffer[];
    constructor(data: string | Buffer | ArrayBuffer | Buffer[]);
    get name(): string;
    get uniqueName(): string;
}
