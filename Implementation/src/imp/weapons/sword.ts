import { Weapon } from "./weapon";

export class Sword extends Weapon{
    protected getImprovementDamage(): number {
        throw new Error("Method not implemented.");
    }
    protected afterAttack(): void {
        throw new Error("Method not implemented.");
    }
    protected canAttack(): boolean {
        throw new Error("Method not implemented.");
    }
    constructor(){
        super(10,"Slash")
    }
}

