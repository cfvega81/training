// principio de estado - poder cambiar el estado de un objeto, es decir, sus propiedades y métodos.
// el objeto debe ser capaz de cambiar su estado interno.

export class Counter {
    private count: number = 0;  //lleva el control del conteo
    private top: number;        //determina hasta donde se puede contar

    constructor(top: number) {
        this.top = top;
    }

    public increment(): void {
        if(this.count < this.top) {
            this.count++;
        } else {
            console.log('No se puede incrementar más');
        }
    }

    public decrement(): void {
        this.count--;
    }

    public getCount(): number {
        return this.count;
    }
}

const counter = new Counter(10);
for (let i = 0; i < 12; i++) {
    counter.increment();
    console.log('counter', counter.getCount());
}
counter.decrement();
console.log('counter', counter.getCount());

