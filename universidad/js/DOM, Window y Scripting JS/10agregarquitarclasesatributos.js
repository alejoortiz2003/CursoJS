// const enlaces = document.querySelectorAll('.enlace');
// enlaces[0].remove();
// console.log(enlaces);

// const navegacion = document.querySelector('#principal');
// navegacion.removeChild(enlaces[0]);
// console.log(navegacion)

const primerLi = document.querySelector('.enlace')
let elemento
//obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// Leer atributos
//obtener atributo
elemento = primerLi.getAttribute('href');
// modifica o anade el atributo en caso de que no exista
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', 20);
// comprobar si tiene un atributo
elemento = primerLi.hasAttribute('data-id');
// eliminar un atributo
primerLi.removeAttribute('data-id');

console.log(elemento);
console.log(primerLi);


