import { AFFECTATION_TEMPERATURE_SERVICE, SEND_MESSAGE_SERVICE } from "data";
import { DestinyMessage } from "destiny-message";
import { Compressor } from "interfaces/compressor";
import { AffectationTemperature } from "services-interface/affectation-temperature";
import { SendMessage } from "services-interface/send-message";
import { Inject, Service } from "typedi";

@Service()
export class CompressorPanasonic implements Compressor {
    isOn = false;

    constructor(
        @Inject(AFFECTATION_TEMPERATURE_SERVICE) private affectationTemperatureService: AffectationTemperature,
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Compressor Panasonic initialized" });
    }

    turnOn(): void {
        if (!this.isOn) {
            this.isOn = true;
            this.affectationTemperatureService.affectTemperarute(1);
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Compressor Panasonic turned on" });
        }
    }

    turnOff(): void {
        if (this.isOn) {
            this.isOn = false;
            this.affectationTemperatureService.affectTemperarute(0);
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: "Compressor Panasonic turned off" });
        }
    }
}