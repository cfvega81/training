//Tipo de dato fecha
let fecha: Date = new Date(); //Fecha actual

//Otra manera de declarar fecha
let fecha2: Date = new Date('2020-12-25'); // aaaa-mm-dd o aaaa/mm/dd o aaaa,mm,dd

// o 
let fecha3: Date = new Date(2020, 11, 25); // aaaa,mm,dd o aaaa,mm,dd,hh,mm,ss,ms
console.log(fecha3) //2020-12-25T06:00:00.000Z

//los meses empiezan de 0 a 11, 0 es enero y 11 es diciembre
let fecha4 = new Date(2023, 11, 1, 10, 22, 33, 880) //
console.log(fecha4) //2023-12-01T16:22:33.880Z

//Zonas horarias para almacenaje usar [UTC] y para mostrar usar [toLocaleString]

