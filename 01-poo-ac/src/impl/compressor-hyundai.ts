import { SEND_MESSAGE_SERVICE } from "data";
import { DestinyMessage } from "destiny-message";
import { Compressor } from "interfaces/compressor";
import { SendMessage } from "services-interface/send-message";
import { Inject, Service } from "typedi";

@Service()
export class CompressorHyundai implements Compressor {
    constructor(
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Compressor Hyundai initialized" });
    }
    turnOn(): void {
        throw new Error("Method not implemented.");
    }
    turnOff(): void {
        throw new Error("Method not implemented.");
    }
}