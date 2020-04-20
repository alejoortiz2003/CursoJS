// Function Declaration
/*
function saludar(){
    console.log('Hola David');
}
saludar();

function saludar(nombre='David'){
    console.log(`Hola ${nombre}`);
}
saludar('Alma');
saludar();

function sumar(a, b) {
    console.log(a + b);
}
sumar(1,2);
sumar(3,4);

function sumar(a,b){
    return a + b;
}

let suma;
suma=sumar(1,2)
console.log(suma);

function saludar(nombre='Visitante'){
    return `Hola ${nombre}`;
}

let saludo;

saludo = saludar();

console.log(saludo);
*/

// Functions Expressions
/*
const suma = function(a = 0, b = 0){
    return a + b;
}
console.log(suma(1,2));
console.log(suma(1));
*/
const saludar = function(nombre = 'Visitante', edad = 20, trabajo = 'Desarrollador Web'){
    return `Hola, tienes ${edad}, trabajas como ${trabajo} y te llamas ${nombre}`
}
console.log(saludar());
console.log(saludar('David'));
