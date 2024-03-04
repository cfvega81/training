//Sintaxis 1: let nombreVariable: tipoDato = valor;
let valor: number = 10;

//Sintaxis 2: let nombreVariable = valor; //El tipo de dato implicito
let valor2 = 10;

//Sintaxis 3: let nombreVariable: tipo_dato_1 | tipo_dato_2 | ... | tipo_dato_n; 
let valor3: number | string | boolean = 10;

//Sintaxis 4: let nombreVariable: valor_permitido_1 | valor_permitido_2 | ... | valor_permitido_n; 
// valores puede ser del mismo tipo o de difente tipo
let valor4: 10 | 20 | 30 = 10;

//Sintaxis 5: una mezcla de de 4 y 6
let valor5: 10 | 20 | 30 | 'hola' | 'adios' | boolean | object = 10;
valor5 = 'hola';
valor5 = true;
valor5 = {};








