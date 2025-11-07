// querySelectorAll devuelve todos los elementos que cumplan la condición
const cards = document.querySelectorAll('.card'); // Selecciona TODOS los elementos con clase 'card'
console.log(cards); // Muestra en consola la NodeList de elementos encontrados

// Siguen funcionando todos los tipos de selectores que se usan con querySelector
const noexiste = document.querySelectorAll('.noexiste'); // Intenta seleccionar elementos con clase 'noexiste' (no existen)
console.log(noexiste); // Muestra en consola una NodeList vacía