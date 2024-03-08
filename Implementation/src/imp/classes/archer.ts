import { Bow } from "../weapons/bow";


export class Archer {
    weapon: Bow;
    
    constructor(weapon: Bow) {
        this.weapon = weapon;
    }

    class_Name() {
        console.log("Class: Archer");
    }

    dataDamage() {
        if (this.weapon) {
            return {
                total_damage: this.weapon.total_damage,
                damage_type: this.weapon.damage_type
            };
        }
        else{
            return { total_damage: 0, damage_type: "" }; 
        }
    }

    toString(): string {
        return `${this.constructor.name} has a {${this.weapon}} like weapon`;
    }
}
