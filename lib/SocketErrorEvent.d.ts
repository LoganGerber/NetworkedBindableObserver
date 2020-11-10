import { Event } from "bindable-observer";
export declare class SocketErrorEvent extends Event {
    error: Error;
    constructor(error: Error);
    get name(): string;
    get uniqueName(): string;
}
