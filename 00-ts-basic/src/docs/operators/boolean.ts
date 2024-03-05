const b2 = true;
const c = false;
const d = b2 && c;

//Con cualquier operador logico puedo generar una variable booleana


// falsy
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false

// truthy
console.log(!!1); // true
console.log(!!'hola'); // true
console.log(!!{}); // true
console.log(!![]); // true