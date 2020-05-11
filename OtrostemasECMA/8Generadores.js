// Generadores

// function *crearGenerador() {
//     // yield
//     yield 1;
//     yield 'Nombre';
//     yield 3*3;
//     yield true;
// }

// const iterador = crearGenerador();

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

// iterar con generadores

function *nuevoGenerador(carrito) {
    for(let i = 0; i<carrito.length; i++){
        yield carrito[i];
    }
}
// Creamos el carrito
const carrito = ['Prodcuto1', 'Producto2', 'Producto3', 'Prdocuto4'];

// Recorremos el iterador
let iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);