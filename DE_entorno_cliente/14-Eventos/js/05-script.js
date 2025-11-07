window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY; // Píxeles desplazados verticalmente
    console.log(scrollPX);

    const premium = document.querySelector('.premium');
    // Obtiene las coordenadas y dimensiones del elemento
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    
    // Verifica si el elemento está visible en la ventana
    if(ubicacion.top < 675){
        console.log('El elemento ya esta visible');
        // Podemos añadir una clase aquí para estilos
    } else {
        console.log('No lo esta')
    }
});