//getElementById

// let elemento;
// elemento = document.getElementById('header').className;
// console.log(elemento);

let encabezado;
encabezado = document.getElementById('encabezado');
encabezado = document.getElementById('encabezado').id;
encabezado = document.getElementById('encabezado').textContent;
encabezado = document.getElementById('encabezado').innerText;
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px'

// Cambiar texto
encabezado.textContent = 'Los mejores Cursos';
encabezado.innerText = 'Los mejores Cursos';
console.log(encabezado);
