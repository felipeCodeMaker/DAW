// Selecciona el primer elemento en el documento que tenga la clase CSS 'navegacion'
// y lo almacena en la constante 'navegacion'
const navegacion = document.querySelector('.navegacion');

// Agrega un event listener para el evento 'click' al elemento navegacion
// Cuando se hace click en el elemento, se ejecutará la función arrow
navegacion.addEventListener('click', () =>{
    // Muestra en la consola el mensaje 'click en nav' cuando se hace click
    console.log('click en nav');
})

// Agrega un event listener para el evento 'mouseenter' al elemento navegacion
// 'mouseenter' se dispara cuando el cursor del mouse entra en el área del elemento
navegacion.addEventListener('mouseenter', ()=>{
    // Muestra en la consola el mensaje indicando que el cursor está en la zona de navegación
    console.log('Estas en la zona de navegacion');
    
    // Cambia el color de fondo del elemento navegacion a rojo
    // Esto proporciona una retroalimentación visual al usuario
    navegacion.style.backgroundColor = 'red';
});

// Agrega un event listener para el evento 'mouseout' al elemento navegacion
// 'mouseout' se dispara cuando el cursor del mouse sale del área del elemento
navegacion.addEventListener('mouseout', () =>{
    // Muestra en la consola el mensaje indicando que el cursor salió de la zona de navegación
    console.log('Has salido de la zona de navegacion');
    
    // Restablece el color de fondo del elemento a transparente
    // Esto elimina el efecto visual cuando el cursor ya no está sobre el elemento
    navegacion.style.backgroundColor = 'transparent';
});

// Agrega un event listener para el evento 'mouseup' al elemento navegacion
// 'mouseup' se dispara cuando se suelta el botón del mouse después de hacer click
navegacion.addEventListener('mouseup', () =>{
    // Comentario explicativo: indica que este evento se dispara al soltar el botón del mouse
    //cuando suelto el boton hace click
    
    // Muestra en la consola el mensaje "Has soltado"
    console.log("Has soltado");

    // ⚠️ ERROR CONCEPTUAL GRAVE: 
    // Se está agregando un NUEVO event listener para 'dbClick' DENTRO del evento 'mouseup'
    // Esto significa que CADA VEZ que se suelte el mouse, se agregará otro listener de doble click
    // Esto puede causar múltiples ejecuciones del mismo evento
    

})

// ⚠️ ERROR TIPOGRÁFICO: El evento correcto es 'dblclick' no 'dbClick'
navegacion.addEventListener('dbClick', ()=>{
    // Comentario explicativo (con error tipográfico): debería decir "botón" no "botn"
    //Cuando suelto el botn de click
        
    // Mensaje que se mostraría al hacer doble click (pero nunca se ejecutará correctamente)
    console.log('Has hecho doble click')
});




/*
const navegacion = document.querySelector('.navegacion');

navegacion.addEventListener('click', () =>{
    console.log('click en nav');
})

navegacion.addEventListener('mouseenter', ()=>{
    console.log('Estas en la zona de navegacion');
    navegacion.style.backgroundColor = 'red';
});

navegacion.addEventListener('mouseout', () =>{
    console.log('Has salido de la zona de navegacion');
    navegacion.style.backgroundColor = 'transparent';
});

navegacion.addEventListener('mouseup', () =>{
    console.log("Has soltado el botón del mouse");
});

// Evento de doble click CORREGIDO - fuera del evento mouseup
navegacion.addEventListener('dblclick', ()=>{
    console.log('Has hecho doble click')
});


*/