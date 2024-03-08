export interface Coordinates {
    x: number;
    y: number;
}

// Herencia es una relación entre clases, donde una clase hija hereda los atributos y métodos de una clase padre.
export class Character { 
    id: string;

    constructor(id: string) {
        this.id = id;   
    }

}


export class NonPlayableCharacter extends Character {
    readonly isEnemy: boolean; // La clase hija puede agregar nuevos atributos y métodos

    constructor(id:string, isEnemy: boolean) {
        super(id);
        this.isEnemy = isEnemy;
    }

    move(to: Coordinates): void {
        console.log('Moving to', to);
    }
}


export class BossNonPlayableCharacter extends NonPlayableCharacter {
    power: number;

    constructor(id: string) {
        super(id, true);
    }   
 
    // Sobreescritura de métodos - reescribiendo el metodo padre para adaptarlo a las necesidades de la clase hija
    // aqui aplica polimorfismo
    override move(to: Coordinates): void { // o modificar los ya existentes.
        super.move(to); // llamamos al método de la clase padre
        console.log('Set damage on path');
    }
}


export class HealthNPC extends NonPlayableCharacter {
    constructor(id: string, public readonly health: number) {
        super(id, false);
        this.health = health;
    }
}


// Instanciando clases
const player = new Character('player-1');
player.id = 'player-2';
const npc = new NonPlayableCharacter('npc1', false);
const enemy = new BossNonPlayableCharacter('bnpc1');
const health = new HealthNPC('health1', 100);


console.log('player', player);
console.log('npc', npc);   
console.log('enemy', enemy);


//TODO: Crear una clase para representar al jugador y una para representar a un herrero (npc)