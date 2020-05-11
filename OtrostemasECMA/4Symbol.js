// SYMBOL

// const simbolo = Symbol();
// const simbolo2 = Symbol('Descripcion aqui');

// console.log(simbolo);

let nombre = Symbol();
let apellido = Symbol();

// crear una persona
let persona = {}
persona.nombre = 'David';
persona[nombre] = 'David';
persona[apellido] = 'Ortiz';
persona.saldo = 100;
persona.tipoCliente = 'Normal';


console.log(persona);
console.log(persona.nombre);
console.log(persona[nombre]);
console.log(persona[apellido]);

// Los symbols se consideran como propiedades privadas