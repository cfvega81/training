import { Bow } from "../imp/weapons/bow";
import { Weapon } from "../imp/weapons/weapon";

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
}
