const formulario = document.querySelector('#formulario');
/*
formulario.addEventListener('submit', (e) => {

    e.preventDefault();     //Evitamos la accion por defecto que es post

    console.log(e.target.method);   //Mostramos el metodo por defecto
    console.log(e.target.action);   //Mostramos la accion por defecto

});
*/


formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(e.target.action);
}


//SON LO MISMO ESCRITO DE DIFERENTE MANERA