// IIFE
/*
(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
})('JavaScript');
*/

// metodos de propiedad
// Cuando una funcion se pone dentro de un objeto

const musica ={
    reproducir: function(id){
        console.log(`Reproduciendo cancion id ${id}`)
    },
    pausar: function() {
        console.log(`Pause a la musica`);
    }
}

// Los metodos tambien pueden guardarse / crearse fuera del objeto
musica.borrar = function(id){
    console.log(`Borrando la cancion con el ID ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
