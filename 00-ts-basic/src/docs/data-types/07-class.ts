//Tipo de dato clase
class Auto {
    marca: string;
    modelo: string;
    ano: number;
    precio: number;
    arranca(): boolean {
        return true;
    }
}

class Sedan2 extends Auto {
    //constructor
    constructor(modelo:string) {
        super();
        this.modelo = modelo;
    }
    detente(): boolean {
        return true;
    }
}


class SedanNuevo extends Sedan2 {

    enciende(): boolean {
        return true;
    }
}

class Sedan implements Carro {
    marca: string;
    modelo: string;
    ano: number;
    preco: number;
    arranca(): boolean {
        return true;
    }
}

let sentra: Sedan = new Sedan(); //objeto o instancia de la clase Persona
sentra.arranca();
