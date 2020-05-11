import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        // El usuario deja los campos vacios, mostrar error
        UI.divMensaje.innerHTML = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.innerHTML = '';
            UI.divMensaje.classList.remove('error');
        }, 3000)
    } else {
        // Realizar consulta a la API
        const api = new API(artista, cancion);
        api.consultarAPI()
            .then(data => {
                if(data.respuesta.lyrics) {
                    // La cancion Existe
                    const letra = data.respuesta.lyrics;
                    UI.divResultado.textContent = letra;
                } else {
                    // La cancion no existe
                    UI.divMensaje.innerHTML = 'Error... La cancion no existe, prueba con otra busqueda';
                    UI.divMensaje.classList.add('error');
                    setTimeout(() => {
                        UI.divMensaje.innerHTML = '';
                        UI.divMensaje.classList.remove('error');
                        UI.formularioBuscar.reset();
                        UI.divResultado.textContent = '';
                    }, 3000)
                }
                
            })
    }
    
    
});
