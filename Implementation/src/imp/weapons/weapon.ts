export abstract class Weapon {
    protected p_total_damage: number;
    private p_damage_type: string;

    get total_damage(): number {
        return this.p_total_damage;
    }
    get damage_type(): string {
        return this.p_damage_type
    }

    constructor(total_damage: number, damage_type: string) {
        this.p_total_damage = total_damage;
        this.p_damage_type = damage_type;
    }

    toString(): string {
        return `${this.constructor.name} has a total Damage: ${this.total_damage} and Damage Type: ${this.damage_type}`
    }

     getDamage(): number {
        return this.total_damage + this.getImprovementDamage();
     }

     attack(target: any): void {
        if (!this.canAttack()) {
            console.log(`${this.constructor.name} cannot attack`);
            return;
        }
        console.log(`${this.constructor.name} attacks ${target.constructor.name} with ${this.getDamage()} damage`);
        this.afterAttack();
     }

     protected abstract getImprovementDamage(): number;
     protected abstract afterAttack(): void;
     protected abstract canAttack(): boolean;

}