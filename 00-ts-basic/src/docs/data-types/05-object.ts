//Tipo de dato object
let objeto: object = {nombre: 'Juan', edad: 30}; 
let objeto2: {} = {}; //objeto vacio
let objeto3: { nombre: string, edad: number, peso?: number } = {nombre: 'Juan', edad: 30}; //peso es opcional
let objeto4: { nombre: string, edad: number, peso: number | null } = {nombre: 'Juan', edad: 30, peso: null }; 


let obj1 = {}; //objeto vacio
let obj2 = new Object(); //objeto vacio

let obj3 = {nombre: 'Juan', edad: 30}; //objeto con propiedades


let obj4: { [key: string]: string }  = {}; 
obj4.nombre = 'Juan';
obj4.edad = '30';
obj4.peso = '80';






