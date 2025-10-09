//inserta codigo Html desde JavaScript

const enlace = document.createElement('a');
enlace.textContent = 'Nuevo enlace';

enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('mi_atributo', 'nuevo_enlace');
enlace.classList.add('mi_clase');
enlace.onclick = miFuncion;
console.log(enlace);


//Seleccionar navegacion

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//navegacion.appendChild(enlace);   //Lo coloca el ultimo
console.log(navegacion);

//Insertamos el elemento en la posicion deseada
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('Has pulsado');
}

//EJEMPLO IMPORTANTE CREAR UNA TARJETA DE FORMA DINAMICA
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo2.textContent = '80€ por persona';
parrafo2.classList.add('precio');

//Crear dic con la clase info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asigna la imagen
card.appendChild(imagen);
//asigna el info
card.appendChild(info);

//Inserta en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

//añadir en una posicion en concreto
contenedor.insertBefore(card, contenedor.children[0])
console.log(info)

