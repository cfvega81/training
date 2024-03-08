export abstract class Zapatos{
    
    public confeccionar(): void {

        console.log("Confeccionando ", this.constructor.name);

        this.comprarMateriales();

        const materiales = this.usarMateriales();
        console.log("Materiales:")
        materiales.forEach((paso, ndx) => { 
            console.log(` - ${paso}`);
        });

        this.engrazarMaquinaria();

        const maquinaria = this.usarMaquinaria();
        console.log("Maquinas:")
        maquinaria.forEach((paso, ndx) => { 
            console.log(` - ${paso}`);
        });

        const pasos = this.pasosConfeccion();
        console.log("Pasos de confección");
        pasos.forEach((paso, ndx) => { 
            console.log(` - paso ${ndx + 1}: ${paso}`);
        });
    }

    public comprarMateriales(): void {
        console.log('Comprando Materiales');
    }

    public abstract usarMateriales():string[];

    public engrazarMaquinaria(): void {
        console.log('Engrazando Maquinaria');
    }

    public abstract usarMaquinaria():string[];

    public abstract pasosConfeccion(): string[];
}

export class Zapatos_Elegantes extends Zapatos {
    public usarMateriales(): string[] {
        return ['Cuero', 'Gamuza', 'Charol']
    }
    public usarMaquinaria(): string[] {
        return ['Máquina de corte', 'Máquina de coser', 'Máquina de pegado']
    }
    public pasosConfeccion(): string[] {
        return ['Corte de patrones', 'Montaje de las partes', 'Pegado de las partes', 'Acabado y pulido']
    }
}

export class Tenis_Deportivos extends Zapatos {
    public usarMateriales(): string[] {
        return ['Malla transpirable', 'Caucho', 'Refuerzos sintéticos']
    }
    public usarMaquinaria(): string[] {
        return ['Máquina de corte por troquelado', 'Máquina de costura', 'Máquina de inyección de suela']
    }
    public pasosConfeccion(): string[] {
        return ['Corte de patrones', 'Montaje de las partes', 'Pegado de las partes', 'Inyección de suelas']
    }
}

const zapatos_elegantes = new Zapatos_Elegantes();

zapatos_elegantes.confeccionar();

const tenis_deportivos = new Tenis_Deportivos();

tenis_deportivos.confeccionar();