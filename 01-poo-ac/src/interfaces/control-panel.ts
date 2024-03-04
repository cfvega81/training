import { AlterTemperatureInterface } from "./alter-temperature-interface";
import { Cpu } from "./cpu";
import { TurnInterface } from "./turn-interface";

//pascal case for class name
export interface ControlPanel extends TurnInterface, AlterTemperatureInterface {
    cpu: Cpu;    

    toggleBlades(): void;
}
