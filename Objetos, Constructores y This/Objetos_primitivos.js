// // Object Literal

// const cliente = {
//     nombre: 'Juan',
//     saldo: 600,
//     tipoCliente: function() {
//         let tipo;

//         if (this.saldo > 1000){
//             tipo = 'Gold';
//         } else if(this.saldo > 500) {
//             tipo = 'Platinium';
//         } else {
//             tipo = 'Normal';
//         }

//         return tipo;
//     }
// }

// console.log(cliente.tipoCliente());
// console.log(cliente.saldo);

// // Metodo alternativo

// function Cliente(nombre, saldo) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.tipoCliente = function() {
//         let tipo;
        
//         if (this.saldo > 1000){
//                 tipo = 'Gold';
//             } else if(this.saldo > 500) {
//                 tipo = 'Platinium';
//             } else {
//                 tipo = 'Normal';
//             }
    
//             return tipo;
//         }
// }

// const persona = new Cliente('Pedro', 20000);

// console.log(persona);
// console.log(persona.tipoCliente());

// String
const nuombre1 = 'David';
const nombre2 = new String('David');

// Numeros
const numero1 = 20;
const numero2 = new Number(20);

// Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);

// Funciones
const funcion1 = function(a,b){
    return a+b;
}
const funcion2 = new Function('a', 'b', 'return 1+2');

// Objetos
const persona1 = {
    nombre: 'David'
}
const persona2 = new Object({nombre: 'David'});

// Arreglos
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);
