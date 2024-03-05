//Tipo de dato void
function saludar(): void {
    console.log('Hola');
}

//Tipo de dato never
function error(mensaje: string): never {
    throw new Error(mensaje);
}

function mensaje(titulo: string, mensaje: string): boolean {
    console.log(titulo);    
    return true;
}
mensaje('titulo','mensaje');


interface ParametroMensaje {
    titulo?: string;
    mensaje: string;
    prioridad?: number;
}

function mensaje2(info: ParametroMensaje): boolean {
    console.log(info.titulo);    
    console.log(info.mensaje);    
    console.log(info.prioridad);

    const { titulo, mensaje, prioridad } = info;

    console.log(titulo);
    console.log(mensaje);
    console.log(prioridad);

    return true;
}

mensaje2({ mensaje: 'mensaje', titulo: 'titulo', prioridad: 2});

function mensaje3({ mensaje, titulo = 'Titulo', prioridad = 2 }: ParametroMensaje): 
    { envioExitoso: boolean, acuse: string } {
    console.log(titulo);
    console.log(mensaje);
    console.log(prioridad);

    return {
        envioExitoso: true,
        acuse: 'Mensaje enviado'
    };
}

console.log(mensaje3({ mensaje: 'mensaje', prioridad: 5 })) // { envioExitoso: true, acuse: 'Mensaje enviado' }

const { envioExitoso, acuse } = mensaje3({ mensaje: 'mensaje', prioridad: 5 }); 
if (envioExitoso) {
    //has algo adicional
}
console.log(acuse);

const fnMostrarMensaje = ({ mensaje, titulo = 'Titulo', prioridad = 2 }: ParametroMensaje): 
    { envioExitoso: boolean, acuse: string } => {
    console.log(titulo);
    console.log(mensaje);
    console.log(prioridad);

    return {
        envioExitoso: true,
        acuse: 'Mensaje enviado'
    };
}


//Callbacks
function mostrarMensaje(mensaje: string, callback: (acuse: string) => void): void {
    const { envioExitoso, acuse } = mensaje3({ mensaje: mensaje, prioridad: 5 });
    if (envioExitoso) callback(acuse);
}

mostrarMensaje('mensaje', (acuse: string) => {
    console.log(acuse);
});

let contador = 0;
mostrarMensaje('mensaje', (acuse: string) => {
    console.log(this);
    contador++;
});

mostrarMensaje('mensaje', (acuse: string) => {
    //guardar acuse en BD
});

//Declarar y ejecutar en el mismo paso
(async function mensaje(msg: string) {
    console.log(msg);
})('mensaje');

//Se puede usar el método call para cambiar el contexto de this
mostrarMensaje.call({}, 'mensaje');