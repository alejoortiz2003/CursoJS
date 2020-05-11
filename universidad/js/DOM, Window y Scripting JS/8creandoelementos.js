// crear enlance
const enlace = document.createElement('a');
//agregamos una clase
enlace.className = 'enlace';
//anadir id
enlace.id = 'nuevo-id';
//anadir atributo de href
enlace.setAttribute('href', '#');
// anadir texto
enlace.textContent = 'Nuevo Enlace';
//otra opcion
//enlace.appendChild(document.createTextNode('Nuevo Enlace'))
// agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);
