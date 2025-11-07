// Variables
// Selecciona el elemento UL donde se mostrarán los tweets
const listaTweets = document.querySelector('#lista-tweets');

// Selecciona el formulario para agregar nuevos tweets
const formulario = document.querySelector('#formulario');

// Array que almacenará todos los tweets
let tweets = [];

// Event Listeners
// Llama a la función para configurar todos los event listeners
eventListeners();

// Función que configura todos los event listeners de la aplicación
function eventListeners() {
     // Cuando se envía el formulario (click en botón o Enter)
     formulario.addEventListener('submit', agregarTweet);

     // Event delegation para borrar tweets
     // El listener está en el contenedor padre, no en cada botón individual
     listaTweets.addEventListener('click', borrarTweet);

     // Cuando el DOM ha terminado de cargar completamente
     document.addEventListener('DOMContentLoaded', () => {
          // Recupera tweets del localStorage o usa array vacío si no existen
          // JSON.parse convierte el string JSON a array
          // || [] proporciona un array vacío como fallback
          tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ;
          
          // Muestra los tweets recuperados en consola (para debugging)
          console.log(tweets);
          
          // Renderiza los tweets en el HTML
          crearHTML();
     });
}

// Función que se ejecuta al enviar el formulario para agregar tweet
function agregarTweet(e) {
     e.preventDefault(); // Evita que el formulario se envíe tradicionalmente
     
     // Obtiene el valor del textarea con id 'tweet'
     const tweet = document.querySelector('#tweet').value;
     
     // validación - verifica que el tweet no esté vacío
     if(tweet === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return; // Detiene la ejecución si hay error
     }

     // Crear un objeto Tweet con estructura definida
     const tweetObj = {
          id: Date.now(), // ID único basado en timestamp actual
          texto: tweet    // Texto del tweet
     }

     // Añade el nuevo tweet al array usando spread operator
     // Crea un nuevo array con todos los tweets existentes más el nuevo
     tweets = [...tweets, tweetObj];
     
     // Vuelve a renderizar todo el HTML con el nuevo tweet incluido
     crearHTML();

     // Limpia el formulario, dejando el textarea vacío
     formulario.reset();
}

// Función para mostrar mensajes de error temporales
function mostrarError(error) {
     // Crea un elemento párrafo para el mensaje de error
     const mensajeEerror = document.createElement('p');
     mensajeEerror.textContent = error; // Establece el texto del error
     mensajeEerror.classList.add('error'); // Añade clase CSS para estilizar

     // Selecciona el contenedor donde mostrar el error
     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeEerror); // Añade el mensaje al DOM

     // Elimina automáticamente el mensaje después de 3 segundos
     setTimeout(() => {
          mensajeEerror.remove();
     }, 3000);
}

// Función principal que renderiza todos los tweets en el HTML
function crearHTML() {
     limpiarHTML(); // Limpia el contenido anterior
     
     // Solo renderiza si hay tweets
     if(tweets.length > 0 ) {
          // Itera sobre cada tweet del array
          tweets.forEach( tweet =>  {
               // crear boton de eliminar
               const botonBorrar = document.createElement('a');
               botonBorrar.classList = 'borrar-tweet'; // Clase para estilos y detección
               botonBorrar.innerText = 'X'; // Texto del botón
     
               // Crear elemento de lista para el tweet
               const li = document.createElement('li');

               // Añade el texto del tweet al elemento li
               li.innerText = tweet.texto;

               // añade el botón de borrar al tweet (dentro del li)
               li.appendChild(botonBorrar);

               // añade un atributo único con el ID del tweet para identificarlo
               // dataset.tweetId crea el atributo data-tweet-id en el HTML
               li.dataset.tweetId = tweet.id;

               // añade el tweet completo a la lista en el DOM
               listaTweets.appendChild(li);
          });
     }

     // Guarda los tweets actualizados en localStorage
     sincronizarStorage();
}

// Función que elimina un tweet cuando se hace click en 'X'
function borrarTweet(e) {
     e.preventDefault();

     // Obtiene el ID del tweet desde el atributo data del elemento padre (li)
     const id = e.target.parentElement.dataset.tweetId;
     
     // Filtra el array, manteniendo solo los tweets que NO tienen el ID a eliminar
     tweets = tweets.filter( tweet => tweet.id != id  );
     
     // Vuelve a renderizar el HTML con el tweet eliminado
     crearHTML();
}

// Función que guarda los tweets en localStorage
function sincronizarStorage() {
     // Convierte el array de tweets a string JSON y lo guarda
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Función que limpia el contenido de la lista de tweets
function limpiarHTML() {
     // Elimina todos los hijos del elemento listaTweets uno por uno
     // while se ejecuta mientras exista un primer hijo
     while(listaTweets.firstChild) {
          listaTweets.removeChild(listaTweets.firstChild);
     }
}