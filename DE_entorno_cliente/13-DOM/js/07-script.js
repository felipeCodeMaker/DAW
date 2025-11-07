const encabezado = document.querySelector('h1'); // Selecciona el primer elemento h1

console.log(encabezado.style); // Muestra en consola el objeto style del h1

// Las mismas propiedades que tenemos en HTML estilos también las tienes en JavaScript
// Las que son compuestas les quita el guion

// También lo podemos hacer agregando o quitando clases
// que tenemos definidas en nuestro CSS
encabezado.style.backgroundColor = 'green'; // Cambia el color de fondo a verde
encabezado.style.fontFamily = 'Arial'; // Cambia la fuente a Arial
encabezado.style.textTransform = 'uppercase'; // Transforma el texto a mayúsculas

// Devuelve la primera etiqueta que tiene la clase card
const card = document.querySelector('.card'); // Selecciona el primer elemento con clase 'card'

// Añade una nueva clase a la etiqueta seleccionada
// Puedes añadir más de una clase
card.classList.add('nueva-clase') // Añade la clase 'nueva-clase' al elemento

// card.classList.add('nueva-clase', 'segunda-clase') // Ejemplo: añadir múltiples clases

// Podemos eliminar una clase
card.classList.remove('card'); // Elimina la clase 'card' del elemento