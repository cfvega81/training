import { BladeStatus } from "blade-status";
import { SEND_MESSAGE_SERVICE } from "data";
import { DestinyMessage } from "destiny-message";
import { Blades } from "interfaces/blades";
import { SendMessage } from "services-interface/send-message";
import { Inject, Service } from "typedi";

@Service()
export class BladesSamsung implements Blades {
    mode: BladeStatus = BladeStatus.UP;

    constructor(
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Blades Samsung initialized" });
    } 

    toggle(): BladeStatus {
        switch (this.mode) {
            case BladeStatus.UP:
                this.mode = BladeStatus.MIDDLE;
                this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: "Blades Samsung set to middle" });
                break;
            case BladeStatus.MIDDLE:
                this.mode = BladeStatus.DOWN;
                this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: "Blades Samsung set to down" });
                break;
            case BladeStatus.DOWN:
                this.mode = BladeStatus.SPIN;
                this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: "Blades Samsung set to random" });
                break;
            default:
                this.mode = BladeStatus.UP;
                this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: "Blades Samsung set to up" });
                break;
            }    
        return this.mode;
    }
}