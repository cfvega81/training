import { Magic } from "../imp/weapons/magic";
import { Sword } from "../imp/weapons/sword";


export class Paladin {
    private weapon: Magic;
    private weapon2: Sword;
    
    constructor(weapon: Magic, weapon2: Sword) {
        this.weapon = weapon;
        this.weapon2 = weapon2;
    }

    class_Name() {
        console.log("Class: Paladin");
    }


    public dataDamage() {
        if (this.weapon) {
            return {
                total_damage: this.weapon.total_damage,
                damage_type: this.weapon.damage_type
            };
        } 
        
        if (this.weapon2) {
            return {
                total_damage: this.weapon2.total_damage,
                damage_type: this.weapon2.damage_type
            };
            
        } else {
            return { total_damage: 0, damage_type: "" }; 
        }
    }
}