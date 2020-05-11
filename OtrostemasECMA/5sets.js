let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');

// let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4])
// console.log(numeros);
// console.log(numeros.size);

// comprobar que un valor exista
// console.log(carrito.has('Guitarra'));
// Eliminar algo de un set
// carrito.delete('Camisa');
// Se puede vaciar un set
// carrito.clear();

// recorrer set con foreach
// carrito.forEach((element, index) => {
//     console.log(`${index}: ${element}`);
// });

// Como convertir un set a arreglo
const arregloCarrito = [...carrito];

// console.log(carrito);
// console.log(carrito.size);

