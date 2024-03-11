enum Material {
    cobre = "cobre",
    hierro = "hierro",
    acero = "acero"
}

enum Calidad {
    buena = "buena",
    mala =  "mala"
}

interface Cloning {
    clone(): Cloning;
}

// Clase abstracta de herramientas que implementa Clonable
abstract class Herramienta implements Cloning {
    material: Material;
    calidad: Calidad;
    fabrica: string; 
    
    constructor(fabrica: string) {
        this.fabrica = fabrica;
    }
    
    abstract clone(): Herramienta;

    toString(): string{
        return `${this.constructor.name} ${this.fabrica}: ${this.material} de ${this.calidad} calidad`;
    }
}


// Implementación de Navaja que implementa Clon
class Navaja extends Herramienta {
    constructor(material: Material, calidad: Calidad, fabrica: string) {
        super(fabrica);
        this.material = material;
        this.calidad = calidad;
    }

    clone(): Navaja {
        return new Navaja(this.material, this.calidad, this.fabrica);
    }
}

class Martillo extends Herramienta {
    constructor(material: Material, calidad: Calidad, fabrica: string) {
        super(fabrica);
        this.material = material;
        this.calidad = calidad;
    }

    clone(): Martillo {
        return new Martillo(this.material, this.calidad, this.fabrica);
    }
}

class Destornillador extends Herramienta {
    constructor(material: Material, calidad: Calidad, fabrica: string) {
        super(fabrica);
        this.material = material;
        this.calidad = calidad;
    }

    clone(): Destornillador {
        return new Destornillador(this.material, this.calidad, this.fabrica);
    }
}

// Creación de la clase fábrica que crea las herramientas
abstract class FabricaHerramientas {
    abstract crearNavaja(): Navaja;
    abstract crearMartillo(): Martillo;
    abstract crearDestornillador(): Destornillador;
}

// Creación de las fábricas que agregan sus variables a las herramientas
class FabricaTruper extends FabricaHerramientas {

    private static instancia: FabricaTruper;

    private constructor() {
        super();
    }

    static obtenerInstancia(): FabricaTruper {
        if (!FabricaTruper.instancia) {
            FabricaTruper.instancia = new FabricaTruper();
        }
        return FabricaTruper.instancia;
    }

    crearNavaja(): Navaja {
        return new Navaja(Material.acero, Calidad.buena, 'Truper');
    }

    crearMartillo(): Martillo {
        return new Martillo(Material.cobre, Calidad.mala, 'Truper');
    }

    crearDestornillador(): Destornillador {
        return new Destornillador(Material.hierro, Calidad.buena, 'Truper');
    }
}

class FabricaStanly extends FabricaHerramientas {

    private static instancia: FabricaTruper;

    private constructor() {
        super();
    }

    static obtenerInstancia(): FabricaStanly {
        if (!FabricaStanly.instancia) {
            FabricaStanly.instancia = new FabricaStanly();
        }
        return FabricaStanly.instancia;
    }
    
    crearNavaja(): Navaja {
        return new Navaja(Material.hierro, Calidad.buena, 'Stanly');
    }

    crearMartillo(): Martillo {
        return new Martillo(Material.acero, Calidad.buena, 'Stanly');
    }

    crearDestornillador(): Destornillador {
        return new Destornillador(Material.cobre, Calidad.mala, 'Stanly');
    }
}

class FabricaLoro extends FabricaHerramientas {

    private static instancia: FabricaLoro;

    private constructor() {
        super();
    }

    static obtenerInstancia(): FabricaLoro {
        if (!FabricaLoro.instancia) {
            FabricaLoro.instancia = new FabricaLoro();
        }
        return FabricaLoro.instancia;
    }

    crearNavaja(): Navaja {
        return new Navaja(Material.hierro, Calidad.mala, 'Loro');
    }

    crearMartillo(): Martillo {
        return new Martillo(Material.cobre, Calidad.buena, 'Loro');
    }

    crearDestornillador(): Destornillador {
        return new Destornillador(Material.acero, Calidad.buena, 'Loro');
    }
}

// Se crea un builder para crear los setts de herramientas
class SettHerramientasBuilder {
    private fabrica: FabricaHerramientas;

    constructor(fabrica: FabricaHerramientas) {
        this.fabrica = fabrica;
    }

    buildSettCarpintero(): [Navaja, Martillo] {
        const navaja = this.fabrica.crearNavaja();
        const martillo = this.fabrica.crearMartillo();
        return [navaja, martillo];
    }

    buildSettPlomero(): [Destornillador, Martillo] {
        const destornillador = this.fabrica.crearDestornillador();
        const martillo = this.fabrica.crearMartillo();
        return [destornillador, martillo];
    }
}

class SettHerramientas {

    public buildSettCarpintero(fabrica: FabricaHerramientas): [Navaja, Martillo] {
        const builder = new SettHerramientasBuilder(fabrica);
        return builder.buildSettCarpintero();
    }

    public buildSettPlomero(fabrica: FabricaHerramientas): [Destornillador, Martillo] {
        const builder = new SettHerramientasBuilder(fabrica);
        return builder.buildSettPlomero();
    }
}

// Creación de las instancias de fábricas
const fabricaTruper = FabricaTruper.obtenerInstancia();
const fabricaStanly = FabricaStanly.obtenerInstancia();
const fabricaLoro = FabricaLoro.obtenerInstancia();

// Creación del set de herramientas para carpintero
const settCarpinteroTruper = new SettHerramientas().buildSettCarpintero(fabricaTruper);
console.log(`Set de herramientas para carpintero: ${settCarpinteroTruper[0]} y ${settCarpinteroTruper[1]}`);
const settCarpinteroStanly = new SettHerramientas().buildSettCarpintero(fabricaStanly);
console.log(`Set de herramientas para carpintero: ${settCarpinteroStanly[0]} y ${settCarpinteroStanly[1]}`);
const settCarpinteroLoro = new SettHerramientas().buildSettCarpintero(fabricaLoro);
console.log(`Set de herramientas para carpintero: ${settCarpinteroLoro[0]} y ${settCarpinteroLoro[1]}`);

// Creación del set de herramientas para plomero
const settPlomeroTruper = new SettHerramientas().buildSettPlomero(fabricaTruper);
console.log(`Set de herramientas para plomero: ${settPlomeroTruper[0]} y ${settPlomeroTruper[1]}`);
const settPlomeroStanly = new SettHerramientas().buildSettPlomero(fabricaStanly);
console.log(`Set de herramientas para plomero: ${settPlomeroStanly[0]} y ${settPlomeroStanly[1]}`);
const settPlomeroLoro = new SettHerramientas().buildSettPlomero(fabricaLoro);
console.log(`Set de herramientas para plomero: ${settPlomeroLoro[0]} y ${settPlomeroLoro[1]}`);






