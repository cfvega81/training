import { Magic } from "../weapons/magic";




export class Mage {
    private weapon: Magic;
    
    constructor(weapon: Magic) {
        this.weapon = weapon;
    }

    class_Name() {
        console.log("Class: Mage");
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