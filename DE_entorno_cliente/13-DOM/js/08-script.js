const primerenlace = document.querySelector('a'); // Selecciona el primer enlace (<a>) del documento
console.log(primerenlace); // Muestra en consola el enlace encontrado

// primerenlace.remove(); // Eliminaría el enlace directamente (comentado)

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion'); // Selecciona el elemento con clase 'navegacion'

// Elimino el tercer enlace desde el padre
navegacion.removeChild(navegacion.children[2]); // A partir de la clase busca al tercer hijo (0..1..2), y lo borra