import { ChangeTemperature } from "services-interface/change-temperature";
import { BehaviorSubject } from "rxjs";
import { Service } from "typedi";

@Service()
export class ChangeTemperatureService implements ChangeTemperature {
    changedTemperature: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    changeTemperature(temperature: number): void {
        this.changedTemperature.next(temperature);
    }
}