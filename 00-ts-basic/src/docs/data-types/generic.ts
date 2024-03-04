//Tipo de dato genérico
let valores: Array<Persona> = [
    { nombre: 'Juan', edad: 42, puesto: 'Gerente' }
    , { nombre: 'Ana', edad: 25, puesto: 'Asistente' }];
let mayores40 = valores.filter((valor) => valor.edad > 40);