//Variables
const listaTweets = document.querySelector('#lista-tweets');



// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envia al formulario
    document.getElementById('formulario').addEventListener('submit', agregarTweet);

    // Borrar tweet
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
};



// Funciones

// anadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // crear boton de eliminar
    const botonBorrar = document.createElement('a');
    // anadir clase al boton
    botonBorrar.classList = 'borrar-tweet';
    // anadir texto al boton
    botonBorrar.innerText = 'X';

    // crear elemento y anadir el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // anade el boton de borrar al twwet
    li.appendChild(botonBorrar);
    // anade el tweet a la lista
    listaTweets.appendChild(li);
    //Anadir a Local Storage
    agregarTweetLocalStorage(tweet);
}
// Eliminar el tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}
//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // anadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
// Mostrar datos de local storage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        // crear boton de eliminar
        const botonBorrar = document.createElement('a');
        // anadir clase al boton
        botonBorrar.classList = 'borrar-tweet';
        // anadir texto al boton
        botonBorrar.innerText = 'X';

        // crear elemento y anadir el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // anade el boton de borrar al twwet
        li.appendChild(botonBorrar);
        // anade el tweet a la lista
        listaTweets.appendChild(li);
    });
}
// Comprobar que hayan elementos en localstorage
function obtenerTweetsLocalStorage(){
    let tweets;
    // revisamos los valores de local storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}
// Eliminar tweet de localstorage
function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;
    //Eliminar la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach( (tweet, index) => {
        if(tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}
