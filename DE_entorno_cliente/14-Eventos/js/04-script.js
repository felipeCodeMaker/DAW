const formulario = document.querySelector('#formulario');

/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault();     // Evita el envío tradicional del formulario
    console.log(e.target.method);   // Método del formulario (GET/POST)
    console.log(e.target.action);   // URL de destino del formulario
});
*/

// Alternativa: usar función nombrada en lugar de arrow function
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();     // Previene el comportamiento por defecto
    console.log(e.target.action); // Muestra la acción del formulario
}

// Comentario: Ambas formas son equivalentes, solo cambia la sintaxis