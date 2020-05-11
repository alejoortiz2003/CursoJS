// Evento Bubbling
// se evita mandando como argumento e y stoppropagation
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
    console.log('Click en Card');
    e.stopPropagation();
})

infoCurso.addEventListener('click', function(e){
    console.log('Click en Info Curso');
    e.stopPropagation();
})

agregarCarrito.addEventListener('click', function(e){
    console.log('Click en agregar a carrito');
    e.stopPropagation();
})
