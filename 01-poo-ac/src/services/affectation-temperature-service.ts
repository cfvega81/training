import { BehaviorSubject } from "rxjs";
import { AffectationTemperature } from "services-interface/affectation-temperature";
import { Service } from "typedi";

@Service()
export class AffectationTemperatureService implements AffectationTemperature {
    affecttationTemperatureSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);   

    affectTemperarute(temperature: number): void {
        this.affecttationTemperatureSubject.next(temperature);
    }

}