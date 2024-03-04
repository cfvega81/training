interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    preco: number;

    arranca(): boolean;
}

//Nos permite utilizar la interfaz para definir el tipo de dato de un objeto
let nissan: Carro = {
    marca: 'Nissan',
    modelo: 'Sentra',
    ano: 2020,
    preco: 20000,
    arranca() {
        return true;
    }
}

let toyota: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    preco: 25000,
    arranca() {
        return false;
    }

}

//Nos permite usarlas como contratos para clases cuando queremos usar inyeccion de depencias y polimorfismo
