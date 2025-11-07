//Eventos del teclado

const busqueda = document.querySelector('.busqueda');



//1

//busqueda.addEventListener('keydown', () => {
//    console.log('Escribiendo....');
//});

//2
/*
busqueda.addEventListener('keyup', () => {
    console.log('Escribiendo....');
});




//3
//Cuando ha perdido el foco
busqueda.addEventListener('blur', () => {
    console.log('Has perdido el foco');
});

//4
//Selecciona si has pulsado ctrl+c
busqueda.addEventListener('copy', () => {
    console.log('Has copiado');
});

//5
busqueda.addEventListener('cut', () => {
    console.log('Has cortado');
});


//Se ejecuta cuando realizas cualquiera de los eventos anteriores, MENOS EL BLUR y el COPY
busqueda.addEventListener('input', () => {
    console.log('Has pegado');
});

*/
//A la funcion anónima le pasamos como parametro el evento que esta sucediendo

busqueda.addEventListener('input', (e) => {
    console.log(e);         // Objeto evento completo
    console.log(e.type);    //tipo de elemento que estoy escribiendo     // Tipo de evento ('input')
    console.log(e.target);      //objetivo de eveento   // Elemento que disparó el evento
    console.log(e.target.value);    // Valor actual del campo

    // Validación: si el campo está vacío

    if(e.target.value === ''){
        console.log('Fallo la validación, no paso nada.');
    }

});

































