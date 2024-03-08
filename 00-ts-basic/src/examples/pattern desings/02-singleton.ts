class SistemaOperativo {
    //Al ser estatico, se puede acceder sin necesidad de instanciar la clase
    //ya que pertenece a la clase y no a la instancia
    //expone su referencia a memoria en vez de su valor
    static instancia: number;
    static getValue(instancia: SistemaOperativo) {
        return instancia.valor;
    }

    private valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }
}

// Clase es un molde para crear objetos
// Objeto es una instancia de una clase

SistemaOperativo.instancia = 15;
///console.log(SistemaOperativo.instancia);

SistemaOperativo.instancia = 30;
///console.log(SistemaOperativo.instancia);

let win = new SistemaOperativo(10);
//console.log(SistemaOperativo.getValue(win)); 

let mac = new SistemaOperativo(20);
//console.log(SistemaOperativo.getValue(mac)); 


//¿Que es singleton?
// Es un patrón de diseño que nos permite asegurarnos de que una clase tenga una única instancia 
// y proporcionar un punto de acceso global a ella.

class RegistroBitacora {
    //#region  Singleton
    //impide que se pueda instanciar la clase
    private constructor() {
        this.valor = 10;
    }
    //Es una variable que se puede acceder sin necesidad de instanciar la clase
    private static instancia: RegistroBitacora = null;
    //Mecanismo de acceso para obtener la instancia
    static getInstancia() {
        if (!RegistroBitacora.instancia) {
            console.log('No existe una instancia, se creará una nueva');
            RegistroBitacora.instancia = new RegistroBitacora();
        } else {
            console.log('Regresando la instancia existente');
        }
        return RegistroBitacora.instancia;
    }    
    //#endregion

    valor: number;
}

let instancia = RegistroBitacora.getInstancia();

console.log(instancia.valor);

instancia.valor = 100;

console.log(instancia.valor);


let instancia2 = RegistroBitacora.getInstancia();

console.log(instancia2.valor);

instancia2.valor = 1000;

let instancia3 = RegistroBitacora.getInstancia();

console.log(instancia3.valor);


class Contador {
    private static instancia: Contador = null;
    private constructor(private valor: number) { }

    static getInstancia(valor: number) {
        if (!Contador.instancia) {
            Contador.instancia = new Contador(valor);
        }
        return Contador.instancia;
    }

    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    getValor() {
        return this.valor;
    }
}

console.log('Probando contador');

{
    let contador = Contador.getInstancia(10);
    contador.incrementar();
    console.log(contador.getValor());
}

{
    let contador = Contador.getInstancia(15);
    contador.incrementar();
    console.log(contador.getValor());
}

{
    let contador = Contador.getInstancia(15);
    contador.incrementar();
    console.log(contador.getValor());
}

{
    let contador = Contador.getInstancia(15);
    contador.decrementar();
    console.log(contador.getValor());
}


