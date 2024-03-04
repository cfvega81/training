//Tipo de dato arreglo
let frutas: string[] = ['manzana', 'pera', 'uva'];
let numeros: number[] = [1, 2, 3, 4, 5];
let booleanos: boolean[] = [true, false, true];
let fechas: Date[] = [new Date(), new Date('2020-12-25')];
let mixto: any[] = ['manzana', 1, true, new Date()];
let mixto2: (number | boolean)[] = [1, true]; //Constraint o restricción de tipos

let mixto3: (number | false | 'cancelado')[] = [1, false, 'cancelado']; //Constraint o restricción de tipos



let objetos: object[] = [{nombre: 'Juan', edad: 30}, {nombre: 'Ana', edad: 25}];
let estados: Estado[] = [Estado.Activo, Estado.Inactivo];


//vector 
//[] = [1, 2, 3, 4, 5]

//matriz arreglo de arreglos arreglo bidimensional
//[][] = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]

//arreglo de matrices arreglo tridimensional
//[][][] = [[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], [[11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]]
