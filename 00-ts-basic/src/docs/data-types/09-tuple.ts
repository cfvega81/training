//Tuplas son arreglos con tipos de datos fijos y un número fijo de elementos
let respuesta: (boolean | number[])[] = [true, [1, 2, 3, 4, 5]]

let [tieneResultados, resultados] =  respuesta;
if (tieneResultados) {
    console.log(resultados)
}

if (respuesta[0]) {
    console.log(respuesta[1])
}

