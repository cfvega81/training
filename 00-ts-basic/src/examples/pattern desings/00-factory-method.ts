// Creator - CelularFactory
// Concrete Creators - GoogleFactory, AppleFactory

// Product - Celular
// Concrete Products - GooglePixel, AppleIphone

interface Celular {
    llamar(): void;
    navegar(): void;
    sacarFoto(): void;
}

class GooglePixel implements Celular {
    llamar(): void {
        console.log('Llamando desde un Google Pixel');
    }
    navegar(): void {
        console.log('Navegando desde un Google Pixel');
    }
    sacarFoto(): void {
        console.log('Tomando foto desde un Google Pixel');
    }
}

class AppleIphone implements Celular {
    llamar(): void {
        console.log('Llamando desde un Apple Iphone');
    }
    navegar(): void {
        console.log('Navegando desde un Apple Iphone');
    }
    sacarFoto(): void {
        console.log('Tomando foto desde un Apple Iphone');
    }
}

class SamsungGalaxy implements Celular {
    llamar(): void {
        console.log('Llamando desde un Samsung Galaxy');
    }
    navegar(): void {
        console.log('Navegando desde un Samsung Galaxy');
    }
    sacarFoto(): void {
        console.log('Tomando foto desde un Samsung Galaxy');
    }
}

class XiaomiRedmi implements Celular {
    llamar(): void {
        console.log('Llamando desde un Xiaomi Redmi');
    }
    navegar(): void {
        console.log('Navegando desde un Xiaomi Redmi');
    }
    sacarFoto(): void {
        console.log('Tomando foto desde un Xiaomi Redmi');
    }
}

abstract class Mayorista {
    tipo: TipoCelular;
    public abstract createCelular(): Celular;
}

class GoogleFactory extends Mayorista {
    constructor() {
        super();
        this.tipo = TipoCelular.google;
    }

    public createCelular(): Celular {
        return new GooglePixel();
    }
}

class AppleFactory extends Mayorista {
    constructor() {
        super();
        this.tipo = TipoCelular.apple;
    }

    public createCelular(): Celular {
        return new AppleIphone();
    }
}   

class SamsungFactory extends Mayorista {
    constructor() {
        super();
        this.tipo = TipoCelular.samsung;
    }

    public createCelular(): Celular {
        return new SamsungGalaxy();
    }
}

class XiaomiFactory extends Mayorista {
    constructor() {
        super();
        this.tipo = TipoCelular.xiaomi;
    }

    public createCelular(): Celular {
        return new XiaomiRedmi();
    }
}

enum TipoCelular {
    google = "google",
    apple = "apple",
    samsung = "samsung",
    xiaomi = "xiaomi"
}

let factories = [
    new GoogleFactory(),
    new AppleFactory(),
    new SamsungFactory(),
    new XiaomiFactory()
];

let cliente: { tipoCelular: TipoCelular } = { tipoCelular: TipoCelular.xiaomi };   

let vendedor = {
    vender_metodo_malo: (cliente: { tipoCelular: TipoCelular }) => {
        if (cliente.tipoCelular === TipoCelular.google) {
            return new GooglePixel();
        } else if (cliente.tipoCelular === TipoCelular.apple) {
            return new AppleIphone();
        } else if (cliente.tipoCelular === TipoCelular.samsung) {
            return new SamsungGalaxy();
        } else if (cliente.tipoCelular === TipoCelular.xiaomi) {
            return new XiaomiRedmi();
        }
    },
    vender_metodo_no_tan_malo: (cliente: { tipoCelular: TipoCelular }) => {
        let factory: Mayorista;
        switch (cliente.tipoCelular) {
            case TipoCelular.google:
                factory = new GoogleFactory();
                break;
            case TipoCelular.apple:
                factory = new AppleFactory();
                break;
            case TipoCelular.samsung:
                factory = new SamsungFactory();
                break;
            case TipoCelular.xiaomi:
                factory = new XiaomiFactory();
                break;
        }
        return factory.createCelular();
    },
    vender: (cliente: { tipoCelular: TipoCelular }) => {
        let factory = factories
            .find(factory => factory.tipo === cliente.tipoCelular);
        return factory.createCelular();
    }
}

let celular = vendedor.vender(cliente);
celular.llamar();
celular.navegar();
celular.sacarFoto();
