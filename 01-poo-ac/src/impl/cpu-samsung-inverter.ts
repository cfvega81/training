import { BladeStatus } from "blade-status";
import { BLADES_SERVICE, COMPRESSOR_SERVICE, FAN_SERVICE, THERMOSTAT_SERVICE } from "data";
import { Blades } from "interfaces/blades";
import { Compressor } from "interfaces/compressor";
import { Cpu } from "interfaces/cpu";
import { Fan } from "interfaces/fan";
import { Thermostat } from "interfaces/thermostat";
import { Inject, Service } from "typedi";

@Service()
export class CpuSamsungInverter implements Cpu {
    isOn: boolean;
    mode: BladeStatus;
    temperature: number;
    tempereturaMax: number;
    temperatureMin: number;
    bladeStatus: BladeStatus;
    compressor: Compressor;
    blades: Blades;
    fan: Fan;
    thermostat: Thermostat;

    constructor(
        @Inject(COMPRESSOR_SERVICE) compressor: Compressor, 
        @Inject(BLADES_SERVICE) blades: Blades, 
        @Inject(FAN_SERVICE) fan: Fan, 
        @Inject(THERMOSTAT_SERVICE) thermostat: Thermostat) {     
        this.compressor = compressor;
        this.blades = blades;
        this.fan = fan;
        this.thermostat = thermostat;
        
        console.log('CpuSamsungInverter created');
    }
    toggleBlades(): void {
        throw new Error("Method not implemented.");
    }
    turnOn(): void {
        throw new Error("Method not implemented.");
    }
    turnOff(): void {
        throw new Error("Method not implemented.");
    }
    incrementTemperature(): void {
        throw new Error("Method not implemented.");
    }
    decrementTemperature(): void {
        throw new Error("Method not implemented.");
    }

}