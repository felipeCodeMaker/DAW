//querySelector, devuelve a lo maximo un elemento,
//puede seleccionar id y clases

//para sleccionar una clase ponemos un punto
//Devuelve el primero que encuentra
const card = document.querySelector('.card');
console.log(card);
//Padre premium y info es el hijo
const info = document.querySelector('.premium .info');
console.log(info);
//si no ponemos el espacio indicamos etiquetas que tengan las dos clases
const info2 = document.querySelector('.premium.info')
console.log(info2);
//seleccionar el segundo card de hospedajes
const segundocard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundocard);
//seleccionar un id con querySelector
const formulario = document.querySelector('#formulario');
console.log(formulario);