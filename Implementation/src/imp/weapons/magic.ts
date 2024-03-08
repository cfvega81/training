import { Weapon } from "./weapon";


export class Magic extends Weapon{
    protected getImprovementDamage(): number {
        throw new Error("Method not implemented.");
    }
    protected afterAttack(): void {
        throw new Error("Method not implemented.");
    }
    protected canAttack(): boolean {
        throw new Error("Method not implemented.");
    }
    public constructor(){
        super(20,"Magic")
    }

}