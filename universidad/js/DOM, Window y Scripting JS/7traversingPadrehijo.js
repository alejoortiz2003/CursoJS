// const enlaces = document.querySelectorAll('.enlace');
// console.log(enlaces[0].parentNode);
// console.log(enlaces[0].parentElement);
// console.log(enlaces[0].parentElement.parentElement);
// console.log(enlaces[0].parentElement.parentElement.parentElement);

// const cursos = document.querySelectorAll('.card');
// console.log(cursos[0]);
// console.log(cursos[0].parentElement);
// console.log(cursos[0].parentElement.parentElement);
// console.log(cursos[0].parentElement.parentElement.parentElement);
// console.log(cursos[0].parentElement.parentElement.parentElement.children);
// console.log(cursos[0].parentElement.parentElement.parentElement.children[0]);
// console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='Hola desde traversing');

// otra manera de trabajar es con el uso de Sibling
const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[4]);
console.log(enlaces[4].previousElementSibling);
enlaces[4].previousElementSibling.previousElementSibling.textContent='Hola desde Sibling';
console.log(enlaces[0]);
console.log(enlaces[0].nextElementSibling);
console.log(enlaces[0].nextElementSibling.parentElement);
console.log(enlaces[0].nextElementSibling.parentElement.children);
console.log(enlaces[0].nextElementSibling.parentElement.children[4]);
