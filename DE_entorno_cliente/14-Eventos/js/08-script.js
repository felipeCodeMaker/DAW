// Evitar la propagación con contenido creado...
// Creación dinámica de elementos y asignación de eventos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Tres formas equivalentes de asignar eventos
parrafo3.onclick = ()=>{nuevaFuncion(2)}; //Cualquiera de los 3 // Arrow function con parámetro
// parrafo3.onclick = function(){nuevaFuncion()};   // Función anónima tradicional
// parrafo3.onclick = nuevaFuncion;     // Referencia directa a función



// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

function nuevaFuncion(id){
    console.log('Click en nuevo parrafo', id)
}



