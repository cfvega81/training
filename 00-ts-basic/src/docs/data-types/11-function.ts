//Tipo de dato void
function saludar(): void {
    console.log('Hola');
}

//Tipo de dato never
function error(mensaje: string): never {
    throw new Error(mensaje);
}
