export abstract class Weapon {
    total_damage: number;
    damage_type: string;

    constructor(total_damage: number, damage_type: string) {
        this.total_damage = total_damage;
        this.damage_type = damage_type;
    }
}