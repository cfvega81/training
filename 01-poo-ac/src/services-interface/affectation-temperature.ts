import { BehaviorSubject } from "rxjs";

export interface AffectationTemperature {
    affecttationTemperatureSubject: BehaviorSubject<number>;
    affectTemperarute(temperature: number): void;   
}