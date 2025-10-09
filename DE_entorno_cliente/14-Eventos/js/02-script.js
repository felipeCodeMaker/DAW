const navegacion = document.querySelector('.navegacion');

navegacion.addEventListener('click', () =>{
    console.log('click en nav');
})

navegacion.addEventListener('mouseenter', ()=>{
    console.log('Estas en la zona de navegacion');
    navegacion.computedStyleMap.background = 'red';
});

navegacion.addEventListener('mouseout', () =>{
    console.log('Has salido de la zona de navegacion');
    navegacion.computedStyleMap.backgroundColor = 'transparent';

});

navegacion.addEventListener('mouseup', () =>{
    //cuando suelto el boton hace click
    console.log("Has soltado");

    navegacion.addEventListener('dbClick', ()=>{
        //Cuando suelto el botn de click
        console.log('Has hecho doble click')
    })

})









