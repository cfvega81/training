//Tipo de dato enum
enum Estado { //Es una restricción de valores del mismo tipo
    Activo = 1,
    Inactivo = 0,
}

enum BladeStatus {
    Up = 'arriba',
    Middle = 'medio',
    Down = 'abajo',
}

enum EstatusFacturacion {
    Pendiente = 'pendiente',
    Pagado = 'pagado',
    Aprobado = 'aprobado',
    Rechazado = 'rechazado',
    Cancelado = 'cancelado'
}


function buscarPorEstatus(estatus: string) { 
    if (estatus === 'pendiente' || estatus === 'pagado' || estatus === 'aprobado' || estatus === 'rechazado' || estatus === 'cancelado') {
        console.log('Estatus de facturacion')
    }
}
buscarPorEstatus('perro');


function buscarPorEstatusEnum(estatus: EstatusFacturacion) { }
buscarPorEstatusEnum(EstatusFacturacion.Pendiente);


function buscarPorEstatusActivos(estatus: EstatusFacturacion) {
    if (estatus === EstatusFacturacion.Aprobado || estatus === EstatusFacturacion.Pagado || estatus === EstatusFacturacion.Pendiente) {
        console.log('Estatus activo')
    }
}
buscarPorEstatusActivos(EstatusFacturacion.Rechazado);

function buscarPorEstatusActivosEnumV2(estatus: EstatusFacturacion.Aprobado | EstatusFacturacion.Pagado | EstatusFacturacion.Pendiente)  {
    
}

buscarPorEstatusActivosEnumV2(EstatusFacturacion.Aprobado)

