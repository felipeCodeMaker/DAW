const btnFlotante = document.querySelector('.btn-flotante'); // Selecciona botón flotante
const footer = document.querySelector('.footer'); // Selecciona footer

// btnFlotante.addEventListener('click', () =>{ // Versión con arrow function (comentada)
// console.log('Hiciste click');
// });

btnFlotante.addEventListener('click', mostrarOcultarFooter); // Asigna evento click a la función

function mostrarOcultarFooter(){ // Define función para mostrar/ocultar footer

    if(footer.classList.contains('activo')){ // Si footer tiene clase 'activo'
        footer.classList.remove('activo'); // Quita clase 'activo' del footer
        btnFlotante.classList.remove('activo'); // Quita clase 'activo' del botón
        // this.classList.remove('activo') // Alternativa usando this (comentada)
        this.textContent = 'Idioma y Moneda'; // Cambia texto del botón

    }else{ // Si footer NO tiene clase 'activo'
        footer.classList.add('activo'); // Añade clase 'activo' al footer
        btnFlotante.classList.add('activo'); // Añade clase 'activo' al botón
        // this.classList.remove('activo') // Alternativa usando this (comentada)
        this.textContent = 'X CERRAR'; // Cambia texto del botón
    }
    // Hazlo con un operador ternario (sugerencia)
}