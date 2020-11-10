/// <reference types="node" />
import { Event } from "bindable-observer";
import { ClientRequest, IncomingMessage } from "http";
export declare class SocketUnexpectedResponseEvent extends Event {
    request: ClientRequest;
    response: IncomingMessage;
    constructor(request: ClientRequest, response: IncomingMessage);
    get name(): string;
    get uniqueName(): string;
}
