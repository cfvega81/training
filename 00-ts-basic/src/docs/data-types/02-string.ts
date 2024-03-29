//Tipo de dato cadena
let nombre: string = 'Juan';

//En Typescript existen diferentes maneras de declarar cadenas, ejemplo:
let apellido: string = "Perez";

//Se llama template string o template literal o interpolación de cadenas
let direccion: string = `Calle ${apellido} 123`; 

let nombreCompleto: string = nombre + ' ' + apellido;
let nombreCompletov2: string = `${nombre} ${apellido}`;


let textCompleto = nombre + " " + apellido + ", Direccion: " + direccion + ", Nombre Completo: " + nombreCompleto;
let textCompletov2 = `${nombre} ${apellido}, Direccion: ${direccion}, Nombre Completo: ${nombreCompleto}`;

// En Csharp existe el tipo de dato char y el tipo de dato cadena, en TypeScript solo existe el tipo de dato cadena, ejemplo:
//  let letra: char = 'a'; //No existe en TypeScript
//  let palabra: string = 'Hola'; //Existe en TypeScript
//
// En Csharp los ejemplos previos serian equivalentes a:
//  char letra = 'a';
//  string palabra = "Hola";