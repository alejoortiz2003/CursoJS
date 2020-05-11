// Query Selector
// permite seleccionar por id usando #
// tambien podemos seleccionar clases usando el .

// const encabezado = document.querySelector('#encabezado');
// Aplicar css
// encabezado.style.background ='#333';
// encabezado.style.color = '#fff';
// encabezado.style.padding = '20px';
// encabezado.textContent = 'Los mejores Cursos';

// const encabezado = document.querySelector('.encabezado');
//const encabezado = document.querySelector('.card img');
//console.log(encabezado);

let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
//enlace = document.querySelector('#principal a:last-child');



console.log(enlace);
