//Mismo ejemplo pero NO Generico
interface AutoFactory2 { create(): Automovil; reparar(auto: Automovil); } 

class MatrizAutoFactory implements AutoFactory2 {
    constructor(private tipo: TipoAutomovil) { }

    create(): Automovil {
        switch (this.tipo) {
            case TipoAutomovil.Tractor: return { marca: 'Nissan', modelo: '2020', numEjes: 2 } as Tractor;
            case TipoAutomovil.Trailer: return { marca: 'Toyota', modelo: '2020', numRemolques: 2 } as Trailer;
            case TipoAutomovil.Sedan: return { marca: 'Chevrolet', modelo: '2020', numPuertas: 4 } as TipoSedan;
        }    
    }
    reparar(auto: Automovil) {
        switch (this.tipo) {
            case TipoAutomovil.Tractor: 
                console.log('Reparando tractor', auto);
                console.log('Reparando ejes', auto);
                console.log('Poniendo aceite', auto);
                break;
            case TipoAutomovil.Trailer: 
                console.log('Reparando trailer', auto);
                console.log('Reparando remolques', auto);
                break;
            case TipoAutomovil.Sedan:
                console.log('Reparando sedan', auto);
                console.log('Poniendo aceite', auto);
                break;
        } 
    }
}

let tractorFactory2 = new MatrizAutoFactory(TipoAutomovil.Tractor); 
let tractor = tractorFactory2.create();
tractorFactory2.reparar(_tractor);

let trailerFactory2 = new MatrizAutoFactory(TipoAutomovil.Trailer);
let trailer = trailerFactory2.create();
trailerFactory2.reparar(trailer);

