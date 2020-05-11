// Destructuring forma anterior

// function reservacion(completo, opciones) {
//     opciones = opciones || {};

//     //console.log(opciones);
//     let metodo = opciones.metodoPago,
//         cantidad = opciones.cantidad,
//         dias = opciones.dias;

//         console.log(metodo);
//         console.log(cantidad);
//         console.log(dias);
// }

// function reservacion(completo, opciones) {
//     let{metodoPago, cantidad, dias} = opciones;


//     console.log(metodoPago);
//     console.log(cantidad);
//     console.log(dias);
// }

// Si queremos pasar valores por Default
function reservacion(completo,
    {
        metodoPago = 'efectivo',
        cantidad = 0,
        dias = 0
    } = {}
    )
    {
    
        if(completo) {
            console.log('Proceder a reservar...')
        } else {
            console.log('Abandonar')
        }
}



//
reservacion(
    true,
    {
        // metodoPago: 'tarjeta',
        // cantidad: 2000,
        // dias:3
    }
);