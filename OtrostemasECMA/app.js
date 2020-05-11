// Formas de llamar expresiones regulares
// const exp1 = new RegExp('/abc/');
// const exp2 = /abc/

// Buscar un digito con expresiones regulare
let valor, expReg, expReg1;
// expReg = /[0123456789]/;
// expReg1 = /[0-9]/
// valor = 1992
// console.log(expReg1.test(valor));

// una fechaen exp regula 20-10-2018
// expReg = /\d\d-\d\d-\d\d\d\d/;
// valor = '20-10-2018';
// console.log(expReg.test(valor));

// para ver una hora 10:30
// expReg = /\d\d:\d\d/
// valor = '10:30'
// console.log(expReg.test(valor));

// para ver una hora 10:30 AM
// expReg = /\d\d:\d\d \D\D/
// valor = '10:30 AM'
// console.log(expReg.test(valor));

// Expresion regular sin repeticion
// expReg = /\d+/;
// valor = 123;
// console.log(expReg.test(valor));

// Negar la expresion regular
// expReg = /[^0-9]/
// valor = 1992;
// console.log(expReg.test(valor));

// SIntaxis {1,2}
// expReg = /\d{1,2}-\d{1,2}-\d{4}/
// valor = '10-10-2018';
// valor = '1-1-2018';
// valor = '1-100-2018'
// console.log(expReg.test(valor));

// Letras o numero
// expReg = /\w+/
// valor = 'Mensaje de prueba';
// console.log(expReg.test(valor));

// Revisar que sean puros numero
// expReg = /\d+/
// valor = 1234;
// console.log(expReg.test(valor));

// Otra manera de evaluar solo numeros
// expReg = /([0-9])\w+/;
// valor = 1234
// console.log(expReg.test(valor));

// Revisar que un texto todas sean mayusculas
expReg = /([A-Z])\w+/;
valor = 'HOLA MUNDO';
console.log(expReg.test(valor));

// revisar que un texto todas sean minusculas
expReg = /([a-z])\w+/;
valor = 'HOLA MUNDO';
console.log(expReg.test(valor));