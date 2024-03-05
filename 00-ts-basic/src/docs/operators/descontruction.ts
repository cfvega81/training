const arrayOfValues = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arrayOfValues; //Operador rest
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

//Rest operator es usado para descontruir un arreglo en sus elementos individuales
//El operador rest debe ser el último elemento en la descontrucción

//Descontrucción de objetos
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    state: 'NY'
};

const { name, age, ...restPerson } = person;

console.log(name); // John
console.log(age); // 30
console.log(restPerson); // { city: 'New York', state: 'NY' }

//El operador spread es usado para combinar elementos de un arreglo o un objeto
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];

const matriz = [arr1, arr2];

console.log(combinedArr) // [1, 2, 3, 4, 5, 6]
console.log(matriz) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

const person1 = {
    name: 'John',
    age: 30
};

const person2 = {
    city: 'New York',
    state: 'NY'
};

const combinedPerson = { ...person1, ...person2 };

console.log(combinedPerson); // { name: 'John', age: 30, city: 'New York', state: 'NY' }




