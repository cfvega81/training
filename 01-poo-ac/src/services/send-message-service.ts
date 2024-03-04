import { SendMessage } from "services-interface/send-message";
import { BehaviorSubject } from "rxjs";
import { Service } from "typedi";
import { Message } from "services-interface/message";
import { DestinyMessage } from "destiny-message";

@Service()
export class SendMessageService implements SendMessage {
    sendedMessageSubject: BehaviorSubject<Message> = new BehaviorSubject<Message>({ destiny: DestinyMessage.ACTIONS, message: '' });

    sendMessage(message: Message) {
        this.sendedMessageSubject.next(message);
    }
}