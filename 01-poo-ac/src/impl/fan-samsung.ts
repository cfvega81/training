import { SEND_MESSAGE_SERVICE } from "data";
import { DestinyMessage } from "destiny-message";
import { Fan } from "interfaces/fan";
import { SendMessage } from "services-interface/send-message";
import { Inject, Service } from "typedi";

@Service()
export class FanSamsung implements Fan {
    constructor(
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Fan Samsung initialized" });
    }
    
    turnOn(): void {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Fan Samsung turned on" });
    }
    
    turnOff(): void {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Fan Samsung turned off" });
    }
}