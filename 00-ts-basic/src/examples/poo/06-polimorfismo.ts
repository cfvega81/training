// Polimorfismo en POO es la capacidad de responder diferente a un mismo llamado

// Ejemplo de polimorfismo en POO
// Clase padre
export class Animal {
    constructor(public name: string) {}

    public makeSound(): void {
        console.log('Animal sound');
    }
}

// Clase hija
export class Dog extends Animal {
    public makeSound(): void {
        console.log('Guau guau');
    }
}

// Clase hija
export class Cat extends Animal {
    public makeSound(): void {
        console.log('Miau miau');
    }
}