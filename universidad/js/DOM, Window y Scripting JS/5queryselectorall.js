// queryselectorAll retorna una lista de todo lo que encuentr
// const enlaces = document.querySelectorAll('#principal .enlace');
// // modificar css
// enlaces[1].style.background = 'red';
// enlaces[1].style.color = 'black';
// console.log(enlaces);

//ejmplo
const enlaces = document.querySelectorAll('#principal a:nth-child(odd)')
enlaces.forEach(function(impares){
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
})

const nombreCurso = document.querySelectorAll('.info-card h4:nth-child(odd)');
//let nombres = Array.from(nombreCurso);
nombreCurso.forEach(function(nombre, index){
    if(index % 2 == 0){
        nombre.style.color = 'red';
    }
    //console.log(nombre.textContent)
})
console.log(enlaces)
