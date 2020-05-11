// Variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// click
//boton.addEventListener('click', obtenerEvento);

// doble click
// boton.addEventListener('dblclick', obtenerEvento);

// Mouse enter
//boton.addEventListener('mouseenter', obtenerEvento);

// Mouse leave
// boton.addEventListener('mouseleave', obtenerEvento);

//Mouse over
// boton.addEventListener('mouseover', obtenerEvento);

// Mouse out
// boton.addEventListener('mouseout', obtenerEvento);

// Mouse down
// boton.addEventListener('mousedown', obtenerEvento);

// Mouse up
// boton.addEventListener('mouseup', obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento)

function obtenerEvento(e) {
    console.log(`EVENTO: ${e.type}`);
}

// ejemplo
// document.querySelector('#encabezado').addEventListener('mouseenter', function(e) {
//     e.target.innerText = 'Nuevo Encabezado';
// });

// document.querySelector('#encabezado').addEventListener('mouseleave', function(e) {
//     e.target.innerText = 'Cursos En Línea';
// });

// document.querySelector('#encabezado').addEventListener('mouseover', function(e) {
//     e.target.innerText = 'Nuevo Encabezado';
// });

// document.querySelector('#encabezado').addEventListener('mouseout', function(e) {
//     e.target.innerText = 'Cursos En Línea';
// });
