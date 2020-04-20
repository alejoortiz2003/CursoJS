// Crear objeto

const persona = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disenador grafico',
    email: 'correo@correo.com',
    edad: 20,
    musica: ['Trance', ' Rock', 'Grunge'],
    hogar: {
        ciudad: 'Cali',
        pais: 'Colombia'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}

const persona2 = {
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Disenador grafico',
    email: 'correo@correo.com',
    edad: 30,
    musica: ['Trance', ' Rock', 'Grunge'],
    hogar: {
        ciudad: 'Cali',
        pais: 'Colombia'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}
// anadir a la lista dentro del objeto
persona.musica.push('Alternativo');
console.log(persona);
// console.log(persona.musica);
// console.log(persona.musica[2]);
console.log(persona.hogar);
console.log(persona.hogar.ciudad);
console.log(persona.nacimiento() )
console.log(persona2.nacimiento())
