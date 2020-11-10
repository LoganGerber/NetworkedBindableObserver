import { Event } from "bindable-observer";

export class SocketOpenEvent extends Event {
    get name(): string { return "Socket Open"; }

    get uniqueName(): string { return "LoganGerber-NetworkedBindableObserver-SocketOpenEvent"; }
}
