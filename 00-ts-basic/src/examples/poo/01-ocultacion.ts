// Principio de ocultación - Encapsulamiento

// En TypeScript, la ocultación se logra utilizando los modificadores de acceso.
// Los modificadores de acceso son palabras clave que se utilizan para establecer la accesibilidad de los miembros de una clase.
// TypeScript admite los siguientes modificadores de acceso:
// public - visible por todos
// protected - visible por la clase y sus subclases
// private - visible solo por la clase

// Ejemplo de ocultación
export class MaquinaExpendedora {
    private tieneStock: boolean;
    protected puedeCobrar: boolean;

    constructor(tieneStock: boolean) {
        this.tieneStock = tieneStock;
    }

    public dispensar(): void {
        this.puedeCobrar = this.tieneStock
        this.validarStock();
        if (this.tieneStock) {
            console.log('Dispensando producto');
        } else {
            console.log('No hay stock');
        }
    }

    private validarStock() {
        console.log('Conjunto de operaciones para validar stock');
    }
}

// puede ver los elementos publicos y protected, pero no los privados
export class RefrescoExpendedora extends MaquinaExpendedora {
   public cobrar(): void {
       if (this.puedeCobrar) {
           console.log('Cobrando');
       } else {
           console.log('No se puede cobrar');
       }
   }
}

const maquina = new MaquinaExpendedora(true);
const refresco = new RefrescoExpendedora(true);

