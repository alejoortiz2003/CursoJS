class Interfaz {

    constructor() {
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {

                // crear un select de opciones
                const select = document.querySelector('#criptomoneda')

                // iterar por los resultados de la api
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    // Anadir el Symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
                
            })
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        // Seleccionar mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        // Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // Imprime el resultado de la cotizacion
    
    mostrarResultado(resultado, moneda, cripto) {

        // En caso de un resultado anterior ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMonedas = resultado[cripto][moneda];

        // Recortar digitos de precios
        let precio = datosMonedas.PRICE.toFixed(2),
            variacion = datosMonedas.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-CO');

        // Construir el template

        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMonedas.FROMSYMBOL} a moneda ${datosMonedas.TOSYMBOL} es de: $ ${precio}</p>
                    <p>Variacion ultimo dia: % ${variacion}</p>
                    <p>Ultima actualizacion: ${actualizado}</p>
                </div>
            </div>
        `;

        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
            // Insertar el resultado

            document.querySelector('#resultado').innerHTML = templateHTML; 
            
            //Ocultar spinner
            this.mostrarOcultarSpinner('none');
        }, 3000);
        
    }

    // Mostrar un spinner de carga al enviar la cotizacion
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}
