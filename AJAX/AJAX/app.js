document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga la pagina
    xhr.onload = function() {
        // 200:Correcto | 403: Prohibido | 404: No encontrado
        if(this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    // Enviar el request
    xhr.send();
}
