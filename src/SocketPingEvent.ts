import { Event } from "bindable-observer";

export class SocketPingEvent extends Event {
    public data: Buffer;

    constructor(data: Buffer) {
        super();

        this.data = data;
    }

    get name(): string { return "Ping!"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketPingEvent"; }
}
