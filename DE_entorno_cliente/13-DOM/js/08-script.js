const primerenlace = document.querySelector('a');
console.log(primerenlace);

//primerenlace.remove();

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');    //establece la clase   

//Elimino el tercer enlace desde el padre
navegacion.removeChild(navegacion.children[2]); //A partir de la clase busca al tercer hijo(0..1..2), y lo borra