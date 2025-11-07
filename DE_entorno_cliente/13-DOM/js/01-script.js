let elemento;
elemento = document; // Asigna el objeto document como valor, que representa todo el documento HTML
console.log(elemento); // Muestra en consola el objeto document completo

elemento = document.head; // Accede al elemento <head> del documento
console.log(elemento); // Muestra en consola el elemento head

let elemento1 = document.body; // Accede al elemento <body> del documento
console.log(elemento1); // Muestra en consola el elemento body

let elemento3 = document.forms; // Accede a la colección de todos los formularios del documento

// Se llama HTMLCollection (colección de elementos HTML)
elemento = document.forms[0]; // Accede al primer formulario de la colección
elemento = document.forms[0].id; // Obtiene el ID del primer formulario
elemento = document.forms[0].method; // Obtiene el método (GET/POST) del primer formulario
elemento = document.forms[0].classList; // Obtiene la lista de clases del primer formulario
elemento = document.forms[0].action; // Obtiene la acción (URL) del primer formulario
elemento = document.links; // Accede a la colección de todos los enlaces del documento
elemento = document.links[4]; // Accede al quinto enlace de la colección (índice 4)
elemento = document.links[4].classList; // Obtiene la lista de clases del quinto enlace
elemento = document.links[4].className; // Obtiene las clases como string del quinto enlace
elemento = document.images; // Accede a la colección de todas las imágenes del documento
elemento = document.scripts; // Accede a la colección de todos los scripts del documento