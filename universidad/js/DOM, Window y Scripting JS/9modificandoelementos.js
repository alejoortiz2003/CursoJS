// reemplazar elementons
const nuevoEncabezado = document.createElement('h2');
//agregar un id
nuevoEncabezado.id = 'encabezado'
// agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));
// elemento anterior sera reemplazado
const anterior = document.querySelector('#encabezado');
// Escogemos el elemento padre
const elPadre = document.querySelector('#lista-cursos')
// remplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);
console.log(anterior.parentElement);
