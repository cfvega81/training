import { BladeStatus } from "blade-status";
import { Compressor } from "./compressor";
import { Blades } from "./blades";
import { Fan } from "./fan";
import { Thermostat } from "./thermostat";
import { TurnInterface } from "./turn-interface";
import { AlterTemperatureInterface } from "./alter-temperature-interface";

export interface Cpu extends TurnInterface, AlterTemperatureInterface {
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

    toggleBlades(): void;
}







