// Adapter patter design - Structural pattern - Creationals - 04-prototype - 00-adapter.ts 
// Adaptador para convertir una interfaz en otra

// Servicio
interface Impuesto {
    codigo: string;
    tipoImpuesto: string;
    monto: number;
}

class PagoImpuestosService {
    pagarImpuestos(impuestos: Impuesto[]) {
        console.log("Pagando impuestos", impuestos);
    }
}

// Elementos que generan impuestos
interface FacturaImpuesto {
    codigo: string;
    tipoImpuesto: string;
    porcentaje: number;
}

class Factura {
    total: number;
    subtotal: number;
    impuestosT: number;
    impuestosR: number;
    impuestos: FacturaImpuesto[] = [];

    calcularImpuestos(): void {
        this.impuestosT = this.impuestos
            .filter(impuesto => impuesto.tipoImpuesto === "T")
            .reduce((acc, impuesto) => acc + (this.subtotal * impuesto.porcentaje), 0);
        this.impuestosR = this.impuestos
            .filter(impuesto => impuesto.tipoImpuesto === "R")
            .reduce((acc, impuesto) => acc + (this.subtotal * impuesto.porcentaje), 0);
        this.total = this.subtotal + this.impuestosT - this.impuestosR;
    }
}

interface NominaImpuesto {
    codigo: string;
    subCodigo: string;
    tipoImpuesto: string;
    porcentaje: number;
    esExcento: boolean;
}

class Nomina {
    totalPagar: number;
    subtotal: number;
    impuestosT: number;
    impuestosR: number;
    impuestos: NominaImpuesto[] = [];

    calcularImpuestos(): void {
        this.impuestosT = this.impuestos
            .filter(impuesto => impuesto.tipoImpuesto === "T")
            .reduce((acc, impuesto) => acc + (this.subtotal * impuesto.porcentaje), 0);
        this.impuestosR = this.impuestos
            .filter(impuesto => impuesto.tipoImpuesto === "R")
            .reduce((acc, impuesto) => acc + (this.subtotal * impuesto.porcentaje), 0);
        this.totalPagar = this.subtotal + this.impuestosT - this.impuestosR;
    }
}

// Adaptador
interface PagarImpuestoAdapter<T> {
    pagarImpuestos(elemento: T): void;
}

class PagarFacturaImpuestoAdapter implements PagarImpuestoAdapter<Factura> {
    private servicio: PagoImpuestosService = new PagoImpuestosService();

    pagarImpuestos(factura: Factura): void {
        let impuestos: Impuesto[] = factura.impuestos.map(impuesto => {
            return {
                codigo: impuesto.codigo,
                tipoImpuesto: impuesto.tipoImpuesto,
                monto: factura.subtotal * impuesto.porcentaje
            }
        });
        this.servicio.pagarImpuestos(impuestos);
    }
}

class PagarNominaImpuestoAdapter implements PagarImpuestoAdapter<Nomina> {
    private servicio: PagoImpuestosService = new PagoImpuestosService();

    pagarImpuestos(nomina: Nomina): void {
        let impuestos: Impuesto[] = nomina.impuestos.filter(e => !e.esExcento).map(impuesto => {
            return {
                codigo: impuesto.codigo,
                tipoImpuesto: impuesto.tipoImpuesto,
                monto: nomina.subtotal * impuesto.porcentaje
            }
        });
        this.servicio.pagarImpuestos(impuestos);
    }
}

// Uso

let factura = new Factura();
factura.subtotal = 100;
factura.impuestos.push({ codigo: "IVA", tipoImpuesto: "T", porcentaje: 0.16 });
factura.impuestos.push({ codigo: "IEPS", tipoImpuesto: "T", porcentaje: 0.05 });
factura.impuestos.push({ codigo: "IVA", tipoImpuesto: "R", porcentaje: 0.04 });
factura.calcularImpuestos();

let nomina = new Nomina();
nomina.subtotal = 100;
nomina.impuestos.push({ codigo: "ISR", subCodigo: "001", tipoImpuesto: "T", porcentaje: 0.12, esExcento: false });
nomina.impuestos.push({ codigo: "IVA", subCodigo: "003", tipoImpuesto: "R", porcentaje: 0.04, esExcento: true });
nomina.calcularImpuestos();

// Opcion 1
let adapter: PagarImpuestoAdapter<Factura| Nomina> = new PagarFacturaImpuestoAdapter();
adapter.pagarImpuestos(factura);

adapter = new PagarNominaImpuestoAdapter();
adapter.pagarImpuestos(nomina);

// Opcion 2
function pagarImpuestos<T>(elemento: T, adapter: PagarImpuestoAdapter<T>): void {
    adapter.pagarImpuestos(elemento);
}

pagarImpuestos(factura, new PagarFacturaImpuestoAdapter());
pagarImpuestos(nomina, new PagarNominaImpuestoAdapter());

// Opcion 3
function pagarImpuestos2<T extends Factura | Nomina>(elemento: T): void {
    let adapter: PagarImpuestoAdapter<Factura| Nomina>;
    if (elemento instanceof Factura) {
        adapter = new PagarFacturaImpuestoAdapter();
    } else if (elemento instanceof Nomina) {
        adapter = new PagarNominaImpuestoAdapter();
    }
    adapter.pagarImpuestos(elemento);
}

pagarImpuestos2(factura);
pagarImpuestos2(nomina);

