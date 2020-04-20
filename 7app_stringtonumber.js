const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';


//console.log(numero1 + numero2);
// console.log(Number(numero1) + numero2);
// console.log(parseInt(numero1) + numero2);
// console.log(Number(numero1) + numero2);

let dato;
dato = Number('20');
dato = Number('20.10931');
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('Hola Mundo');
dato = Number([1,2,4,5]);

// ParseFloat y ParseInt
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.2030');

// toFixed
dato = '18929173';
//dato = 18929173.9812912871371193899;
console.log(parseInt(dato).toFixed(3));
console.log(typeof dato);
