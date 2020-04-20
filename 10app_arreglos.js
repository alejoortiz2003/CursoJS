// Crear un arreglo

const numeros = [10,20,30,40,50];
//console.log(numeros);

//Arreglo de String (metodo alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
// console.log(meses);
// console.log(meses.length);
// console.log(Array.isArray(meses));
// console.log(meses[1]);

// anadir funciones dentro de un arreglo
meses[4] = 'Mayo';
meses.push('Junio');
//anadir al inicio del arreglo
meses.unshift('Mes 0');
//console.log(meses);

// Eliminar un elemnto de un arreglo
meses.pop();
//console.log(meses);

//encontrar un elemento en el arreglo
//console.log(meses.indexOf('Abril'));

//arreglo mezclado
// const mezclado = ['Hola', 20, true, null, false, undefined];
// console.log(mezclado);

// Eliminar un elemento del arreglo (el primero)
meses.shift();
//console.log(meses);
// Quitar un rango
meses.splice(2,1);
//console.log(meses);
// revertir
meses.reverse()
//console.log(meses);
// Unir un arreglo con otro
let arreglo1 = [1,2,3];
    arreglo2 = [9,8,7];

//console.log(arreglo1.concat(arreglo2));

// ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];
frutas.sort();
//console.log(frutas);

// Ordenar numeros
arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];

arreglo1.sort(function(x,y){
    return x - y;
});
console.log(arreglo1);
