import { Event } from "bindable-observer";

export class SocketMessageEvent extends Event {
    public data: string | Buffer | ArrayBuffer | Buffer[];

    constructor(data: string | Buffer | ArrayBuffer | Buffer[]) {
        super();

        this.data = data;
    }

    get name(): string { return "Socket Message"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketMessageEvent"; }
}
