// Principio de sobrecarga = mandar a llamar al metodo con diferentes parametros

export class Counter {
    private count: number = 0;  //lleva el control del conteo
    private top: number;        //determina hasta donde se puede contar

    constructor(top: number) {
        this.top = top;
    }

    public increment(): void;
    public increment(step: number): void;
    public increment(step?: number): void {
        if (step) {
            this.count += step;
        } else {
            if(this.count < this.top) {
                this.count++;
            } else {
                console.log('No se puede incrementar más');
            }
        }
    }


    public decrement(): void;
    public decrement(step: number): void;
    public decrement(step?: number): void {
        if (step) {
            this.count -= step;
        } else {
            this.count--;
        }
    }

    public getCount(): number {
        return this.count;
    }
}