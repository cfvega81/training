// Operador XOR
console.log(25 ^ 11); // 18
console.log(25 ^ 1); // 24

// Operador XAND
console.log(25 & 3); // 1
console.log(25 & 1); // 1
console.log(25 & 0); // 0
console.log(25 & 2); // 0
console.log(25 & 4); // 0
console.log(25 & 8); // 8
console.log(25 & 16); // 16
console.log(25 & 32); // 0
console.log(25 & 64); // 0
console.log(25 & 128); // 0
console.log(25 & 256); // 0
console.log(25 & 512); // 0

// Operador NOT
console.log(~25); // -26
console.log(~1); // -2
console.log(~0); // -1
console.log(~-1); // 0
console.log(~-2); // 1

// Operador de corrimiento a la izquierda
console.log(1 << 1); // 2
console.log(1 << 2); // 4
console.log(1 << 3); // 8

// Operador de corrimiento a la derecha
console.log(8 >> 1); // 4
console.log(10 >> 1); // 4

// Operador de corrimiento a la derecha sin signo
console.log(-8 >>> 1); // 2147483644
console.log(10 >>> 1); // 5

