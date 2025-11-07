// Inserta código HTML desde JavaScript

const enlace = document.createElement('a'); // Crea un nuevo elemento <a>
enlace.textContent = 'Nuevo enlace'; // Establece el texto del enlace

enlace.href = '/nuevo-enlace'; // Establece el atributo href
enlace.target = '_blank'; // Establece que se abra en nueva pestaña
enlace.setAttribute('mi_atributo', 'nuevo_enlace'); // Añade un atributo personalizado
enlace.classList.add('mi_clase'); // Añade una clase al enlace
enlace.onclick = miFuncion; // Asigna la función que se ejecutará al hacer click
console.log(enlace); // Muestra en consola el enlace creado

// Seleccionar navegación
const navegacion = document.querySelector('.navegacion'); // Selecciona elemento con clase 'navegacion'
console.log(navegacion); // Muestra en consola la navegación

// navegacion.appendChild(enlace);   // Lo colocaría el último (comentado)
console.log(navegacion); // Muestra en consola la navegación

// Insertamos el elemento en la posicion deseada
navegacion.insertBefore(enlace, navegacion.children[1]); // Inserta el enlace antes del segundo hijo

function miFuncion(){ // Define la función que se ejecuta al hacer click
    alert('Has pulsado'); // Muestra alerta
}

// EJEMPLO IMPORTANTE CREAR UNA TARJETA DE FORMA DINÁMICA
const parrafo1 = document.createElement('p'); // Crea un elemento <p>
parrafo1.textContent = 'Concierto'; // Establece texto del párrafo
parrafo1.classList.add('categoria', 'concierto'); // Añade dos clases al párrafo

const parrafo2 = document.createElement('p'); // Crea otro elemento <p>
parrafo2.textContent = 'Concierto de Rock'; // Establece texto del segundo párrafo
parrafo2.classList.add('titulo'); // Añade clase 'titulo'

const parrafo3 = document.createElement('p'); // Crea tercer elemento <p>
parrafo3.textContent = '80€ por persona'; // Establece texto del tercer párrafo
parrafo3.classList.add('precio'); // Añade clase 'precio'

// Crear div con la clase info
const info = document.createElement('div'); // Crea elemento <div>
info.classList.add('info'); // Añade clase 'info' al div
info.appendChild(parrafo1); // Añade el primer párrafo al div
info.appendChild(parrafo2); // Añade el segundo párrafo al div
info.appendChild(parrafo3); // Añade el tercer párrafo al div

// Crear la imagen
const imagen = document.createElement('img'); // Crea elemento <img>
imagen.src = 'img/hacer2.jpg'; // Establece la fuente de la imagen

// Crear el card
const card = document.createElement('div'); // Crea elemento <div>
card.classList.add('card'); // Añade clase 'card' al div

// Asigna la imagen
card.appendChild(imagen); // Añade la imagen al card
// Asigna el info
card.appendChild(info); // Añade el div info al card

// Inserta en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards'); // Selecciona contenedor donde insertar
contenedor.appendChild(card); // Añade el card al contenedor

// Añadir en una posición en concreto
contenedor.insertBefore(card, contenedor.children[0]) // Inserta el card al principio del contenedor
console.log(info) // Muestra en consola el elemento info