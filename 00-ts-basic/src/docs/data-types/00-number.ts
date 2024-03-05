//Tipo de dato número númoer 2
let edad: number = 30;

//Tipo de dato número flotante  
let altura: number = 1.75;

let ponderacion: number = edad % altura;

//Tipo de dato número hexadecimal
let hex: number = 0xf00d; //base 16 0 - 9 y A - F

//Tipo de dato número binario
let binario: number = 0b1010; //base 2 0 - 1

//Tipo de dato número octal
let octal: number = 0o744; //base 8 0 - 7

//En CSharp existe float y decimal y su diferencia 
//float: 32 bits, 7 dígitos de precisión yendo desde 1.5 x 10^-45 hasta 3.4 x 10^38
//double: 64 bits, 15-16 dígitos de precisión yendo desde 5.0 x 10^-324 hasta 1.7 x 10^308
//decimal: 128 bits, 28 dígitos de precisión yendo desde 1.0 x 10^-28 hasta 7.9 x 10^28

//es la precisión, en TypeScript solo existe el tipo de dato número, ejemplo:
//  float altura = 1.75; //Existe en CSharp
//  decimal altura = 1.75; //Existe en CSharp
//  number altura = 1.75; //Existe en TypeScript