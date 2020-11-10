import { Event } from "bindable-observer";
import { ClientRequest, IncomingMessage } from "http";

export class SocketUnexpectedResponseEvent extends Event {
    public request: ClientRequest;
    public response: IncomingMessage;

    constructor(request: ClientRequest, response: IncomingMessage) {
        super();

        this.request = request;
        this.response = response;
    }

    get name(): string { return "Socket Unexpected Response"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketUnexpectedResponseEvent"; }
}
