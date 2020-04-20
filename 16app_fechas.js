// En JS existe un objeto llamado Date
const diaHoy = new Date();

// Fecha en Especifico Mes, Dia, Ano
let navidad2020 = new Date('12-25-2020')

let valor;
//Mes
valor = diaHoy.getMonth();
// dia actual
valor = diaHoy.getDate();
valor = diaHoy.getDay();
// Obtener ano
valor = diaHoy.getFullYear();
// Minutos
valor = diaHoy.getMinutes();
// hora
valor = diaHoy.getHours();
//Milisegundos desde 1970
valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();

console.log(diaHoy);
console.log(navidad2020);
console.log(valor);
