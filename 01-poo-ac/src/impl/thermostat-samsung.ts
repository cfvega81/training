import { CHANGE_TEMPERATURE_SERVICE, SEND_MESSAGE_SERVICE } from "data";
import { ChangeTemperature } from "services-interface/change-temperature";
import { SendMessage } from "services-interface/send-message";
import { Thermostat } from "interfaces/thermostat";
import { BehaviorSubject, Subscription } from "rxjs";
import { Inject, Service } from "typedi";
import { DestinyMessage } from "destiny-message";

@Service()
export class ThermostatSamsung implements Thermostat {
    changedTemperature: BehaviorSubject<number> = new BehaviorSubject<number>(20);
    changedTemperatureSubscription: Subscription;
    state: string = "off";

    constructor(
        @Inject(CHANGE_TEMPERATURE_SERVICE) private changeTemperatureService: ChangeTemperature,
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage
    ) {
        this.initService();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Thermostat Samsung intialized' } );
    }

    changeTemperature(temperature: number): void {
        throw new Error("Method not implemented.");
    }

    initService() {
        this.changedTemperatureSubscription =
            this.changeTemperatureService.changedTemperature.subscribe(this.whenTemperatureChanged); 
    }

    whenTemperatureChanged = (temperature: number): void => {
        this.state = 'on';
        this.changedTemperature.next(temperature);
    }

    finalize() {
        this.changedTemperatureSubscription.unsubscribe();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Thermostat Samsung finalized' } );
    }
}