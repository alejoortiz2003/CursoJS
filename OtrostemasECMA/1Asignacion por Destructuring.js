// const cliente = {
//     nombre: 'Alejandra',
//     tipo: 'Premium'
// }
// // let nombre = cliente.nombre,
//     // tipo = cliente.tipo;

// nombre = 'Pedro';
// tipo = 'Gold';

//  ({nombre, tipo} = cliente);

// console.log(nombre);
// console.log(tipo);

// const cliente = {
//     tipo: 'Premium',
//     nombre: 'Antonio',
//     datos: {
//         ubicacion: {
//             ciudad: 'Jalisco',
//             pais: 'Mexico'
//         },
//         cuenta: {
//             desde: '10-12-2012',
//             saldo: 4000
//         }
//     }
// }
// let { datos: {ubicacion}} = cliente;
// console.log(ubicacion);
// console.log(ubicacion.ciudad);
// console.log(ubicacion.pais);

// let { datos: {cuenta}} = cliente;
// console.log(cuenta);
// console.log(cuenta.desde);
// console.log(cuenta.saldo);

const cliente = {
    nombre: 'Pedro',
    // tipo: 'Premium',
    // saldo: 3000
}

let {nombre, tipo='Basico', saldo=0} = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);