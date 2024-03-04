import { AFFECTATION_TEMPERATURE_SERVICE, CHANGE_TEMPERATURE_SERVICE, SEND_MESSAGE_SERVICE } from "data";
import { ChangeTemperature } from "services-interface/change-temperature";
import { Room } from "interfaces/room";
import { SendMessage } from "services-interface/send-message";
import { Subscription, interval } from "rxjs";
import { Inject, Service } from "typedi";
import { DestinyMessage } from "destiny-message";
import { AffectationTemperature } from "services-interface/affectation-temperature";

@Service()
export class RoomSmall implements Room {
    temperatureMax: number = 50;
    temperature: number = 25;
    roomCreatedSubscription: Subscription;
    temperatureAffectedOn: number = 0;

    constructor(
        @Inject(AFFECTATION_TEMPERATURE_SERVICE) private affectationTemperatureService: AffectationTemperature, 
        @Inject(CHANGE_TEMPERATURE_SERVICE) private changeTemperatureService: ChangeTemperature,
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.initialize();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Room Small observed' } );
    }

    initialize() {
        this.roomCreatedSubscription = interval(2000).subscribe(this.elapsed);
        this.affectationTemperatureService.affecttationTemperatureSubject.subscribe(this.affectationTemperatureChanged);
    }

    affectationTemperatureChanged = (temperature: number) => {
        this.temperatureAffectedOn = temperature;
    }

    elapsed = () => {
        if (this.temperature < this.temperatureMax) {
            this.temperature += (0.5 - this.temperatureAffectedOn);
            this.changeTemperatureService.changeTemperature(this.temperature);  
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ROOM , message: `${this.temperature}` });
        }
    }

    finalize() {
        this.roomCreatedSubscription.unsubscribe();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Room Small closed' } );
    }
}