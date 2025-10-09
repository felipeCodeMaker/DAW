const encabezado = document.querySelector('h1');

console.log(encabezado.style);

//Las mismas propiedades que tenemos en HTML stylos tambien las tienes en JavaScript 
// las que son compuestas les quita el guion

//Tambien lo podemos hacer agregando o quitando clases
//que tenemos definidas en nuestro css
encabezado.style.backgroundColor = 'green';
encabezado.style.fontFamily = 'Arial';
encabezado.style.ttextTransform = 'uppercase';

//devuelve la primera etiqueta que tiene la clase card
const card = document.querySelector('.card');

//Añade una nueva clase a la etiqueta seleccionada
//Puedes añadir mas de una clase
card.classList.add('nueva-clase')

//card.classList.add('nueva-clase', 'segunda-clase')

//Podemos eliminar una clase
card.classList.remove('card');



