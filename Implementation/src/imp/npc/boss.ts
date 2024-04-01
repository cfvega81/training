
export class Boss {
    private hp: number;
    private class_name: string;

    constructor(hp: number, class_name: string) {
        this.hp = hp;
        this.class_name = class_name;
    }

    // Método para obtener el valor de hp
    public getHp(): number {
        return this.hp;
    }

    // Método para obtener el valor de class_name
    public getClassName(): string {
        return this.class_name;
    }

    public appearsBoss(): void {
        console.log('A boss has appeared');
    }
}
