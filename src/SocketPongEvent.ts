import { Event } from "bindable-observer";

export class SocketPongEvent extends Event {
    public data: Buffer;

    constructor(data: Buffer) {
        super();

        this.data = data;
    }

    get name(): string { return "Pong!"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketPongEvent"; }
}
