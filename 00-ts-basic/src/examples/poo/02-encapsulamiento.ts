// principio de encapsulamiento - poder agrupar distiontos elementos de una clase en un solo bloque 
// y controlar el acceso a ellos, es decir, que elementos son visibles y cuales no.
// y que tengan relacion entre ellos.

export interface Speciality {
    name: string;
    operate(): void;
}

export class Doctor {
    private name: string;
    private age: number;
    private specialty: string;

    constructor(name: string, age: number, specialty: string) {
        this.name = name;
        this.age = age;
        this.specialty = specialty;
    }

    public getDoctorInfo(): string {
        return `Doctor: ${this.name}, ${this.age} years, ${this.specialty}`;
    }

    public operate(specialty: Speciality): void {
        console.log('Operating in...', specialty.name);
        specialty.operate();
    }

    //Esto rompe el encapsulamiento ya que no tiene relacion con un doctor
    public repair(): void {
        console.log('Repairing...');
    }
}