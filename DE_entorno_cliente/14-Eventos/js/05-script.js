window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //Entre otra informacion devuelve las coordenadas de la ubicacion
    //del elemento
    console.log(ubicacion);
        if(ubicacion.top< 675){
             console.log('El elemento ya esta visible');    //Podemos añadir una clase

        }else{
            console.log('No lo esta')
        }

});