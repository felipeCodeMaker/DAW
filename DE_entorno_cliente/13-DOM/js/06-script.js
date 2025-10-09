const encabezado = document.querySelector('.contenido-hero h1')

console.log(encabezado);

console.log(encabezado.innerText);  //Si la etiqueta tiene un visibility:hidden, no lo va a encontrar
console.log(encabezado.textContent);    //Trae el texto tal y como este
console.log(encabezado.innerHTML);  //Se trae el HTML 

const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

//Esto no modifica el fichero html, se ve afectado el html del navegador
document.querySelector('.contenido-hero h1').textContent = "Nuevo HEADING";

const addEncabezado = "NUEVO ENCABEZADO";

document.querySelector('.contenido-hero h1').textContent = addEncabezado;

const imagen = document.querySelector('.card img');
imagen.src  = 'img/hacer2.jpg'
