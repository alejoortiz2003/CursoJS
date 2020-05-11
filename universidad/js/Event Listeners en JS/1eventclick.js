// Event Listener click al buscador

// document.querySelector('#submit-buscador').addEventListener('click', function(e){
//     // prevenir que se realicen las acciones que vienen en el action por default
//     e.preventDefault();
//     alert('Buscando Cursos');
// });

// document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);
// function ejecutarBoton(e) {
//     e.preventDefault();
//     let elemento;
//     elemento = e;
//     elemento = e.target;
//     elemento = e.target.id;
//     elemento = e.target.className;
//     elemento = e.target.innerText;

//     console.log(elemento);
// }

document.querySelector('#encabezado').addEventListener('click', function(e) {
    e.target.innerText = 'Nuevo Encabezado';
});
