import { Event } from "bindable-observer";

export class SocketErrorEvent extends Event {
    public error: Error;

    constructor(error: Error) {
        super();

        this.error = error;
    }

    get name(): string { return "Socket Client Error"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketErrorEvent"; }
}
