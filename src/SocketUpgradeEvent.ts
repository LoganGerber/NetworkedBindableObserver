import { Event } from "bindable-observer";
import { IncomingMessage } from "http";

export class SocketUpgradeEvent extends Event {
    public response: IncomingMessage;

    constructor(response: IncomingMessage) {
        super();

        this.response = response;
    }

    get name(): string { return "Socket Upgrade"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketUpgradeEvent"; }
}
