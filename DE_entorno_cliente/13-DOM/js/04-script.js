// querySelector, devuelve a lo máximo un elemento,
// puede seleccionar ID y clases

// Para seleccionar una clase ponemos un punto
// Devuelve el primero que encuentra
const card = document.querySelector('.card'); // Selecciona el primer elemento con clase 'card'
console.log(card); // Muestra en consola el elemento encontrado

// Padre premium y info es el hijo
const info = document.querySelector('.premium .info'); // Selecciona elemento con clase 'info' dentro de elemento con clase 'premium'
console.log(info); // Muestra en consola el elemento encontrado

// Si no ponemos el espacio indicamos etiquetas que tengan las dos clases
const info2 = document.querySelector('.premium.info') // Selecciona elemento que tenga ambas clases 'premium' e 'info'
console.log(info2); // Muestra en consola el elemento encontrado

// Seleccionar el segundo card de hospedajes
const segundocard = document.querySelector('.hospedaje .card:nth-child(2)'); // Selecciona el segundo hijo con clase 'card' dentro de 'hospedaje'
console.log(segundocard); // Muestra en consola el elemento encontrado

// Seleccionar un ID con querySelector
const formulario = document.querySelector('#formulario'); // Selecciona elemento con ID 'formulario'
console.log(formulario); // Muestra en consola el elemento encontrado