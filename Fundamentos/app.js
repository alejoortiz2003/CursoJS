var a = 'a';
let b = 'b';
const c = 'c';

// Scope de la funcion
function funcionScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCION: '+a,b,c);
}
funcionScope();
// Scope de bloque{}
if(true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: '+a,b,c);
}

// for
for(var a = 0; a < 10; a++){
    console.log(a);
}



console.log('GLOBALES: '+a,b,c);
