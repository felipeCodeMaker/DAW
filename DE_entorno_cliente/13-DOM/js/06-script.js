const encabezado = document.querySelector('.contenido-hero h1') // Selecciona el primer h1 dentro de elemento con clase 'contenido-hero'

console.log(encabezado); // Muestra en consola el elemento h1

console.log(encabezado.innerText);  // Si la etiqueta tiene visibility:hidden, no lo va a encontrar
console.log(encabezado.textContent);    // Trae el texto tal y como esté en el HTML
console.log(encabezado.innerHTML);  // Se trae el HTML interno (incluyendo etiquetas)

const encabezado2 = document.querySelector('.contenido-hero h1').textContent; // Obtiene directamente el texto del h1
console.log(encabezado2); // Muestra en consola el texto del h1

// Esto no modifica el fichero HTML, se ve afectado el HTML del navegador
document.querySelector('.contenido-hero h1').textContent = "Nuevo HEADING"; // Cambia el texto del h1

const addEncabezado = "NUEVO ENCABEZADO"; // Define nuevo texto

document.querySelector('.contenido-hero h1').textContent = addEncabezado; // Asigna el nuevo texto al h1

const imagen = document.querySelector('.card img'); // Selecciona la primera imagen dentro de un elemento con clase 'card'
imagen.src = 'img/hacer2.jpg' // Cambia la fuente (src) de la imagen