import { Sword } from "../weapons/sword";



export class Warrior {
    weapon: Sword;
    
    constructor(weapon: Sword) {
        this.weapon = weapon;
    }

    class_Name() {
        console.log("Class: Warrior");
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


