//Event bubbling, propagacion de eventos

const cardDiv = document.querySelector('.card');//captura la primera card
const infoDiv = document.querySelector('.info');//captura el primer info
const titulo = document.querySelector('.titulo');//captura el primer titulo

cardDiv.addEventListener('click', (e) => {
    //e.stopPropagation();
    console.log('Click en card');
});

infoDiv.addEventListener('click', (e) => {
    //e.stopPropagation();
    console.log('Click en info');
});


titulo.addEventListener('click', (e) => {
    //e.stopPropagation();
    console.log('Click en titulo');
});