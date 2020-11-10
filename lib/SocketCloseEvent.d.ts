import { Event } from "bindable-observer";
export declare class SocketCloseEvent extends Event {
    code: number;
    reason: string;
    constructor(code: number, reason: string);
    get name(): string;
    get uniqueName(): string;
}
