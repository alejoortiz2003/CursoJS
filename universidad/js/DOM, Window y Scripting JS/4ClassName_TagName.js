// // 1 ejemplo de uso
// let enlaces = document.getElementsByClassName('enlace')[3];
// // modificar css
// enlaces.style.background ='#333';
// enlaces.textContent = 'Nuevo enlace';
// console.log(enlaces);

// // 2 ejemplo de uso combinacion de query y classname
// const listaEnlances = document.querySelector('#principal').getElementsByClassName('enlace');
// console.log(listaEnlances);

// 3 ejemplo de uso de Tagname etiqueta de html
const links = document.getElementsByTagName('a');
//modificar css
links[18].style.color = 'red';
links[18].textContent = 'Nuevo enlace';
// si queremos que funcione como arreglo
let enlaces = Array.from(links);
// como enlaces es ya un arreglo podemos aplicar un foreach
enlaces.forEach(function(enlace){
    console.log(enlace.textContent);
});
console.log(links);
console.log(enlaces);
