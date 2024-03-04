import { BehaviorSubject } from "rxjs";

export interface ChangeTemperature {
    //Para emitir el cambio de temperatura
    changedTemperature: BehaviorSubject<number>;

    //Para cambiar la temperatura
    changeTemperature(temperature: number): void;
}