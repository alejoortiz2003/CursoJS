// 

const ciudades = ['Londres','New York','Madrid','Paris', {
    idioma: 'ingles'
}]

// const [
//     primeraCiudad,
//     segundaCiudad
// ] = ciudades;

// const [, , ciudad1, ciudad] = ciudades;

// console.log(ciudades);

// Ejemplo avanzad
const cliente = {
    tipo: 'Premium',
    saldo: 30000,
    datos: {
        nombre: 'Pedro',
        apellido: 'Perez',
        residencia: {
            ciudad: 'Mexico'
        }
    },
    movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}

let {
    tipo,
    datos,
    datos: {residencia},
    movimientos,
    movimientos: [uno, dos]
} = cliente;

console.log(tipo);
console.log(datos);
console.log(residencia);
console.log(movimientos);
console.log(uno, dos);