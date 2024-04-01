// Herencia
import { Weapon } from "./weapon";


export abstract class Bow extends Weapon {
    protected p_max_distance: number;
    private arrows: Arrow[] = [];

    get max_distance(): number {
        return this.p_max_distance;
    }

    constructor() {
        super(7, "Piercing")
        this.p_max_distance = 100;
    }

    toString(): string {
        return `${super.toString()} and Max Distance: ${this.p_max_distance}`;
    }

    addArrow(arrow: Arrow): void {
        this.arrows.push(arrow);
    }   

    protected getImprovementDamage(): number {
        if (this.arrows.length > 0) {
            return this.arrows[this.arrows.length - 1].plus_damage;
        }   
        return 0;
    }

    protected afterAttack(): void {
        this.arrows.pop();
    }

    protected canAttack(): boolean {
        return this.arrows.length > 0;
    }
}

export class LongBow extends Bow {
    constructor() {
        super();
        this.p_max_distance = 200;
    }
}

export class ShortBow extends Bow {
    constructor() {
        super();
        this.p_max_distance = 50;
    }
}

export class SlingShot extends Bow {
    constructor() {
        super();
    }
}


export abstract class Arrow {
    protected p_plus_damage: number;
    get plus_damage(): number {
        return this.p_plus_damage;
    }

    constructor() {
        this.p_plus_damage = 0;
    }
}

export class FireArrow extends Arrow {
    constructor() {
        super();
        this.p_plus_damage = 3;
    }
}

export class IceArrow extends Arrow {
    constructor() {
        super();
        this.p_plus_damage = 2;
    }
}

export class PoisonArrow extends Arrow {
    constructor() {
        super();
        this.p_plus_damage = 1;
    }
}

export class NormalArrow extends Arrow {
    constructor() {
        super();
        this.p_plus_damage = 0;
    }
}