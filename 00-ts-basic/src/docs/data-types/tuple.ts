//Tipo de dato tupla
let persona: [string, number] = ['Juan', 30];

//extraer valores de la tupla
let nombrePersona: string = persona[0];
let edadPersona: number = persona[1];

let [nombrePersona2, edadPersona2] = persona;

nombrePersona2 = 'Ana';
edadPersona2 = 25;