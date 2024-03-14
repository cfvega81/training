{
    interface Banco {
        nombre: string
        servicio: string
        monto: number
    }

    class HSBC implements Banco {
        monto: number;
        servicio: string;
        nombre = 'Banco HSBC';
    }
    
    class BBVA implements Banco {
        monto: number;
        servicio: string;
        nombre = 'Banco BBVA';
    }

    class PagoHSBC {
        constructor(private banco: HSBC) {}
        ejecutar() {
            console.log(`Pago a ${this.banco.nombre}`);
        }   
    }

    class PagoBBVA {
        constructor(private banco: BBVA) {}
        ejecutar() {
            console.log(`Pago a ${this.banco.nombre}`);
        }   
    }

    class TransferenciaBBVA {
        constructor(private banco: BBVA) {}
        ejecutar() {
            console.log(`Transferencia a ${this.banco.nombre}`);
        }   
    }

    class TransferenciaHSBC {
        constructor(private banco: HSBC) {}
        ejecutar() {
            console.log(`Transferencia a ${this.banco.nombre}`);
        }   
    }

    class Megacable implements Banco {
        monto: number;
        servicio: string = "Telecomunicaciones";
        nombre = 'Megacable';
    }

    class PagoMegacable {
        constructor(private banco: Megacable) {}
        ejecutar() {
            console.log(`Pago a ${this.banco.nombre} por concepto de ${this.banco.servicio}`);
        }   
    }

    class Satander implements Banco {
        monto: number;
        servicio: string;
        nombre = 'Banco Santander';
    }

    class TransferenciaSantander {
        constructor(private banco: Satander) {}
        ejecutar() {
            console.log(`Transferencia a ${this.banco.nombre}`);
        }   
    }

    class PagoSantander {
        constructor(private banco: Satander) {}
        ejecutar() {
            console.log(`Pago a ${this.banco.nombre}`);
        }   
    }

    class CargoDomiciliadoHSBC {
        constructor(private banco: HSBC) {}
        ejecutar() {
            console.log(`Cargo domiciliado a ${this.banco.nombre}`);
        }   
    }

    class CargoDomiciliadoBBVA {
        constructor(private banco: BBVA) {}
        ejecutar() {
            console.log(`Cargo domiciliado a ${this.banco.nombre}`);
        }   
    }

    class CargoDomiciliadoSantander {
        constructor(private banco: Satander) {}
        ejecutar() {
            console.log(`Cargo domiciliado a ${this.banco.nombre}`);
        }   
    }

    let pagoHSBC = new PagoHSBC(new HSBC());
    pagoHSBC.ejecutar();

    let pagoBBVA = new PagoBBVA(new BBVA());
    pagoBBVA.ejecutar();

    let transferenciaBBVA = new TransferenciaBBVA(new BBVA());
    transferenciaBBVA.ejecutar();

    let transferenciaHSBC = new TransferenciaHSBC(new HSBC());
    transferenciaHSBC.ejecutar();

    let pagoMegacable = new PagoMegacable(new Megacable());
    pagoMegacable.ejecutar();

    let pagoSantander = new PagoSantander(new Satander());
    pagoSantander.ejecutar();

    let transferenciaSantander = new TransferenciaSantander(new Satander());
    transferenciaSantander.ejecutar();

    let cargoDomiciliadoHSBC = new CargoDomiciliadoHSBC(new HSBC());
    cargoDomiciliadoHSBC.ejecutar();

    let cargoDomiciliadoBBVA = new CargoDomiciliadoBBVA(new BBVA());
    cargoDomiciliadoBBVA.ejecutar();

    let cargoDomiciliadoSantander = new CargoDomiciliadoSantander(new Satander());
    cargoDomiciliadoSantander.ejecutar();

}
