import { Event } from "bindable-observer";
export declare class SocketOpenEvent extends Event {
    get name(): string;
    get uniqueName(): string;
}
