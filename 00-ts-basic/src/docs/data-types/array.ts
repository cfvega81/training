//Tipo de dato arreglo
let frutas: string[] = ['manzana', 'pera', 'uva'];
let numeros: number[] = [1, 2, 3, 4, 5];
let booleanos: boolean[] = [true, false, true];
let fechas: Date[] = [new Date(), new Date('2020-12-25')];
let mixto: any[] = ['manzana', 1, true, new Date()];
let mixto2: (number | boolean)[] = [1, true]; //Constraint o restricción de tipos
let objetos: object[] = [{nombre: 'Juan', edad: 30}, {nombre: 'Ana', edad: 25}];
let estados: Estado[] = [Estado.Activo, Estado.Inactivo];
