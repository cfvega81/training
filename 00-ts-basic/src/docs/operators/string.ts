//Operadores de cadena

// Operador de concatenación
console.log('Hola' + 'Mundo'); // HolaMundo
console.log('Hola' + 1); // Hola1
console.log('Hola' + true); // HolaTrue
console.log('Hola' + {}); // Hola[object Object]
console.log('Hola' + []); // Hola
console.log('Hola' + [1, 2, 3]); // Hola1,2,3
console.log('Hola' + null); // Hola
console.log('Hola' + undefined); // Holaundefined
console.log('Hola' + ''); // Hola
console.log('Hola' + ' '); // Hola
console.log('Hola' + 0); // Hola0
console.log('Hola' + false); // HolaFalse
console.log('Hola' + NaN); // HolaNaN
console.log('Hola' + Infinity); // HolaInfinity
console.log('Hola' + -Infinity); // Hola-Infinity
console.log('Hola' + 1 / 0); // HolaInfinity
console.log('Hola' + -1 / 0); // Hola-Infinity

// Operador de concatenación compuesto
let saludo = 'Hola';
saludo += ' Mundo'; // saludo = saludo + ' Mundo'
console.log(saludo); // Hola Mundo

// Operador de concatenación con plantillas de texto
console.log(`Hola Mundo`); // Hola Mundo
console.log(`Hola ${'Mundo'}`); // Hola Mundo
console.log(`Hola ${1}`); // Hola 1
console.log(`Hola ${true}`); // Hola true
console.log(`Hola ${{}}`); // Hola [object Object]
console.log(`Hola ${[]} `); // Hola

// Operador de concatenación con plantillas de texto compuesto
let saludo2 = 'Hola';
saludo2 += ' Mundo';
console.log(`${saludo2}`); // Hola Mundo
saludo2 += '!';
console.log(`${saludo2}`); // Hola Mundo!



