// Seleccionar elementos por su clase

const myheader = document.getElementsByClassName('header'); // Obtiene todos los elementos con clase 'header'
console.log(myheader); // Muestra en consola la colección de elementos con clase 'header'

const myhero = document.getElementsByClassName("hero"); // Obtiene todos los elementos con clase 'hero'
console.log(myhero); // Muestra en consola la colección de elementos con clase 'hero'

const contenedores = document.getElementsByClassName("contenedor"); // Obtiene todos los elementos con clase 'contenedor'
console.log(contenedores); // Muestra en consola la colección de elementos con clase 'contenedor'

const noexiste = document.getElementsByClassName("noexiste"); // Intenta obtener elementos con clase 'noexiste' (no existen)
console.log(noexiste); // Muestra en consola una colección vacía