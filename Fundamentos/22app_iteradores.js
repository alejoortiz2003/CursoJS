const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();
datos.set('nombre', 'david');
datos.set('profesion', 'desarrollador web');

// Entries iterador
// Entries a las ciudades
// for(let entrada of ciudades.entries()){
//     console.log(entrada);
// }

// Entries para las ordenes
// for(let entradas of ordenes.entries()){
//     console.log(entradas);
// }

// entries para los datos
// for(let entrada of datos.entries()){
//     console.log(entrada);
// }

// Value iterador
// values a las ciudades
// for(let entrada of ciudades.values()){
//     console.log(entrada);
// }

// values a las ordenes
// for(let entrada of ordenes.values()){
//     console.log(entrada);
// }

// values a los datos
// for(let entrada of datos.values()){
//     console.log(entrada);
// }

// Keys operador
// keys a las ciudades
// for(let entrada of ciudades.keys()){
//     console.log(entrada);
// }

// keys a las ordenes
// for(let entrada of ordenes.keys()){
//     console.log(entrada);
// }

// keys a los datos
// for(let entrada of datos.keys()){
//     console.log(entrada);
// }

// const mensaje = 'Aprendiendo JavaScript';

// for(let letra of mensaje){
//     console.log(letra);
// }

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces) {
    console.log(enlace.href);
}

// console.log(ciudades);
// console.log(ordenes);
// console.log(datos);

