// Abstraccion como concepto de POO
export class AireAcondicionado {
    private temperatura: number = 24;
    private marca: string;
    private modelo: string;
    private capacidad: number;

    constructor(marca: string, modelo: string, capacidad: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
    }

    public encender(): void {
        console.log('Encendiendo aire acondicionado');
    }

    public apagar(): void {
        console.log('Apagando aire acondicionado');
    }

    public setTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }
}

//El otro ejemplo el proyecto de aire acondicionado


// Implementar - en base a un elemento abstracto, definir todo aquello que este pendiente.

// Regla:
// clase extends clase
// clase implements interface
// interface extends interface

// Abstraccion usando interfaces
interface Aviador { 
    volar(): void; // para que volar tenga cuerpo necesita ser implementado
}

export class PilotoComercial implements Aviador {
    volar(): void {
        console.log('Volando aviones comerciales');
    }
}

export class PilotoFumigador implements Aviador {
    volar(): void {
        console.log('Volando aviones fumigadores');
    }
}

export class PilotoMilitar implements Aviador {
    volar(): void {
        console.log('Volando aviones militares');
    }
}

let aviador: Aviador = new PilotoComercial();
aviador.volar();
aviador = new PilotoFumigador();
aviador.volar();
aviador = new PilotoMilitar();
aviador.volar();

// Abstraccion como mecanimos de POO

// Abstraccion usando clases abstractas
export abstract class Receta {
    private ingredientes: string[] = [];

    constructor(ingredientes: string[]) {
        this.ingredientes = ingredientes;
    }

    public cocinar(): void {
        this.limpiarAreaTrabajo();
        this.prepararInstrumentos();

        const pasos = this.ejecutarPasosReceta();
        console.log('Preparando receta', this.constructor.name);
        pasos.forEach((paso, ndx) => { 
            console.log(` - paso ${ndx + 1}: ${paso}`);
        });

        this.servir();
    }

    public limpiarAreaTrabajo(): void {
        console.log('Limpiando area de trabajo');
    }

    public prepararInstrumentos(): void {
        console.log('Preparando instrumentos');
    }

    public abstract ejecutarPasosReceta(): string[];

    public servir(): void {
        console.log('Sirviendo receta');
    }
}

export class TacosReceta extends Receta {
    public ejecutarPasosReceta(): string[] {
        return ['Poner tortilla', 'Poner carne', 'Poner salsa'];
    }
}

export class PizzaReceta extends Receta {
    public ejecutarPasosReceta(): string[] {
        return ['Poner masa', 'Poner salsa', 'Poner queso', 'Poner ingredientes'];
    }
}

const tacos = new TacosReceta(['torilla', 'carne', 'salsa']);
tacos.cocinar();

const pizza = new PizzaReceta(['masa', 'salsa', 'queso', 'ingredientes']);
pizza.cocinar();





