//Es un evento que se ejecuta cuando es descargado todo el HTML´
//eso incluye las imagenes, auido, etc...

console.log('1');
document.addEventListener('DMCContentLoaded', ()=>{
    console.log("Cargo todo el documento");
    console.log('2');
});
console.log('3');