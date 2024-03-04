import { BladeStatus } from "blade-status";
import { BLADES_SERVICE, COMPRESSOR_SERVICE, FAN_SERVICE, SEND_MESSAGE_SERVICE, THERMOSTAT_SERVICE } from "data";
import { Blades } from "interfaces/blades";
import { Compressor } from "interfaces/compressor";
import { Cpu } from "interfaces/cpu";
import { Fan } from "interfaces/fan";
import { SendMessage } from "services-interface/send-message";
import { Thermostat } from "interfaces/thermostat";
import { Subscription } from "rxjs";
import { Inject, Service } from "typedi";
import { DestinyMessage } from "destiny-message";

@Service()
export class CpuSamsung implements Cpu {
    mode: BladeStatus = BladeStatus.UP;
    isOn: boolean = false;
    compressor: Compressor;
    temperature: number = 20;
    tempereturaMax: number = 30;
    temperatureMin: number = 16;
    bladeStatus: BladeStatus;
    blades: Blades;
    fan: Fan;
    thermostat: Thermostat;
    changedTemperatureSubscription: Subscription;

    constructor(
        @Inject(COMPRESSOR_SERVICE) compressor: Compressor, 
        @Inject(BLADES_SERVICE) blades: Blades,
        @Inject(FAN_SERVICE) fan: Fan, 
        @Inject(SEND_MESSAGE_SERVICE) private sendMessageService: SendMessage,
        @Inject(THERMOSTAT_SERVICE) thermostat: Thermostat) {        
        this.compressor = compressor;
        this.blades = blades;
        this.fan = fan;
        this.thermostat = thermostat;
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung initialized' });
    }

    turnOn(): void {
        this.isOn = true;
        this.changedTemperatureSubscription = this.thermostat.changedTemperature.subscribe(this.temperatureChanged);
        this.fan.turnOn();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: 'Cpu Samsung is turned on' });
    }
    turnOff(): void {
        if (!this.isOn) {
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung is off' });
            return
        }
        this.isOn = false;
        this.changedTemperatureSubscription.unsubscribe();
        this.fan.turnOff();
        this.compressor.turnOff();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: 'Cpu Samsung is turned off' });
    }
    incrementTemperature(): void {
        if (!this.isOn) {
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung is off' });
            return
        }
        if (this.temperature < this.tempereturaMax)
        {
            this.temperature++;
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: 'Temperature incremented to ' + this.temperature + ' degrees' });
        }
    }
    decrementTemperature(): void {
        if (!this.isOn) {
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung is off' });
            return
        }
        if (this.temperature > this.temperatureMin) {  
            this.temperature--;
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: 'Temperature decremented to ' + this.temperature + ' degrees' });
        }
    }
    toggleBlades(): void {
        if (!this.isOn) {
            this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung is off' });
            return
        }        
        this.mode = this.blades.toggle();
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.DISPLAY, message: 'Blades set to ' + this.mode });
    }

    temperatureChanged = (temperature: number): void => {   
        if (temperature > this.temperature) {
            this.compressor.turnOn();
        } else if (temperature < (this.temperature - 1)) {
            this.compressor.turnOff();
        }
        this.sendMessageService.sendMessage({ destiny: DestinyMessage.ACTIONS, message: 'Cpu Samsung temperature received from thermostat of ' + temperature + ' degrees' });
    }
}