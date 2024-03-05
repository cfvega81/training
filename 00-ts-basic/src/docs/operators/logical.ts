//Operadores lógicos

// Operador AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Operador OR
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true
console.log(false || false) // false

// Operador NOT
console.log(!true); // false
console.log(!false); // true

// Operador de negación
console.log(!!true); // true
console.log(!!false); // false

// Operador de negación
console.log(!0); // true
console.log(!1); // false
console.log(!!0); // false
console.log(!!1); // true

// Operador de negación
console.log(!''); // true
console.log(!'hola'); // false
console.log(!!''); // false
console.log(!!'hola'); // true

// Operador de negación
console.log(!null); // true
console.log(!undefined); // true
console.log(!!null); // false
console.log(!!undefined); // false

// Operador de negación
console.log(!{}); // false
console.log(![]); // false
console.log(!!{}); // true
console.log(!![]); // true

// Operador igualdad
console.log(1 == 1); // true
// console.log(1 == '1'); // true // comparacion de valor
// console.log(1 === '1'); // false // comparacion de valor y tipo

// Operador desigualdad
// console.log(1 != 2); // true
// console.log(1 != '1'); // false
// console.log(1 !== '1'); // true

// Operador mayor que
console.log(1 > 2); // false
console.log(1 > 1); // false
console.log(2 > 1); // true

// Operador menor que
console.log(1 < 2); // true
console.log(1 < 1); // false
console.log(2 < 1); // false

// Operador mayor o igual que
console.log(1 >= 2); // false
console.log(1 >= 1); // true
console.log(2 >= 1); // true

// Operador menor o igual que
console.log(1 <= 2); // true
console.log(1 <= 1); // true
console.log(2 <= 1); // false

// Operador ternario
console.log(1 < 2 ? 'hola' : 'adios'); // hola
console.log(1 > 2 ? 'hola' : 'adios'); // adios

// Operador de cortocircuito
console.log(1 && 2); // 2
console.log(0 && 2); // 0
console.log(1 || 2); // 1
console.log(0 || 2); // 2

// Operador de cortocircuito
console.log(1 && 2 && 3); // 3
console.log(1 && 0 && 3); // 0
console.log(1 || 2 || 3); // 1
console.log(0 || 2 || 3); // 2

// Operador de cortocircuito
console.log(1 && 2 || 3); // 2
console.log(1 && 0 || 3); // 3
console.log(0 && 2 || 3); // 3
console.log(0 && 0 || 3); // 3

// Operador de cortocircuito
console.log(1 || 2 && 3); // 1
console.log(1 || 0 && 3); // 1
console.log(0 || 2 && 3); // 3
console.log(0 || 0 && 3); // 0

