//Para prevenir los efectos no deseados del punto anterior usamos el DELEGATION
// Delegación de eventos para evitar el bubbling problemático
const carDiv = document.querySelector('.card');

carDiv.addEventListener('click', (e) => {
    console.log(e.target.classList); // Clases del elemento clickeado
    
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }

    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }

    // ERROR: Debe ser e.target.classList.contains('IMG')
    if(e.target.classList === 'IMG'){
        console.log('Diste click en la imagen');
    }
})