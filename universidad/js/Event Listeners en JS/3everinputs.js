// Variables
const busqueda = document.querySelector('#buscador');
// Evento keydown
// busqueda.addEventListener('keydown', obtenerEvento);

// Evento keyup
// busqueda.addEventListener('keyup', obtenerEvento);

// Evento keypress
//busqueda.addEventListener('keypress', obtenerEvento);

// Evento focus
//busqueda.addEventListener('focus', obtenerEvento);

// Evento blur
//busqueda.addEventListener('blur', obtenerEvento);

// Evento cut
//busqueda.addEventListener('cut', obtenerEvento);

// Evento copy
busqueda.addEventListener('copy', obtenerEvento);

// Evento paste
busqueda.addEventListener('paste', obtenerEvento);

// Evento input es el todo en 1
busqueda.addEventListener('input', obtenerEvento);

function obtenerEvento(e) {
    //console.log(busqueda.value);
    //otra manera para obtener la informacion es
    //document.querySelector('#encabezado').innerText = busqueda.value
    console.log(`EVENTO: ${e.type}`);
}
