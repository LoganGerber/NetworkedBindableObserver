import { Event } from "bindable-observer";

export class SocketCloseEvent extends Event {
    public code: number;
    public reason: string;

    constructor(code: number, reason: string) {
        super();

        this.code = code;
        this.reason = reason;
    }

    get name(): string { return "Socket Client Closed"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketCloseEvent"; }
}
