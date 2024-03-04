///Fabrica de Autos

enum TipoAutomovil {
    Tractor = 'tractor',
    Trailer = 'trailer',
    Sedan = 'sedan'
}

interface Automovil {
    marca: string;
    modelo: string;
}

interface Tractor extends Automovil {  numEjes: number; }
interface Trailer extends Automovil { numRemolques: number; }
interface Sedan extends Automovil { numPuertas: number; }

interface Moto { marca: string; cilindraje: number; }

interface AutoFactory<T extends Automovil> { create(): T; reparar(auto: T); } //Abstraccion no se como se va crear el auto, pero se que va a ser un auto

class TractorFactory implements AutoFactory<Tractor> {
    reparar(auto: Tractor) {  //Polimorfismo
        console.log('Reparando tractor', auto);
        console.log('Reparando ejes', auto);
        console.log('Poniendo aceite', auto);
    }
    create(): Tractor {
        return { marca: 'Nissan', modelo: '2020', numEjes: 2 } //polimorfismo
    }
}

class TrailerFactory implements AutoFactory<Trailer> {
    reparar(auto: Trailer) { //Polimorfismo
        console.log('Reparando trailer', auto);
        console.log('Reparando remolques', auto);
    }
    create(): Trailer {
        return { marca: 'Toyota', modelo: '2020', numRemolques: 2 }
    }
}

class SedanFactory implements AutoFactory<Sedan> {
    reparar(auto: Sedan) { //Polimorfismo
        console.log('Reparando sedan', auto);
        console.log('Poniendo aceite', auto);
    }
    create(): Sedan {
        return { marca: 'Chevrolet', modelo: '2020', numPuertas: 4 };
    }
}

function createAutomovilFactory(tipo: TipoAutomovil): AutoFactory<Automovil> {
    switch (tipo) {
        case TipoAutomovil.Tractor: return new TractorFactory();
        case TipoAutomovil.Trailer: return new TrailerFactory();
        case TipoAutomovil.Sedan: return new SedanFactory();
    }
}

let tractorFactory = createAutomovilFactory(TipoAutomovil.Tractor);
let tractor = tractorFactory.create();
console.log(tractor); // { marca: 'Nissan', modelo: '2020', numEjes: 2 }

let trailerFactory = createAutomovilFactory(TipoAutomovil.Trailer);
let trailer = trailerFactory.create();
console.log(trailer); // { marca: 'Toyota', modelo: '2020', numRemolques: 2 }