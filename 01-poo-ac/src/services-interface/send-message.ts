import { BehaviorSubject } from "rxjs";
import { Message } from "./message";

export interface SendMessage {
    sendedMessageSubject: BehaviorSubject<Message>;

    sendMessage(message: Message): void;
}