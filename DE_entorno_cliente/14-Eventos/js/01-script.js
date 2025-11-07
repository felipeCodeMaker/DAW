// Es un evento que se ejecuta cuando es descargado todo el HTML
// eso incluye las imagenes, audio, etc...
console.log('1');
// ERROR: El evento correcto es 'DOMContentLoaded', no 'DMCContentLoaded'
document.addEventListener('DMCContentLoaded', ()=>{
    console.log("Cargo todo el documento");
    console.log('2');
});
console.log('3');