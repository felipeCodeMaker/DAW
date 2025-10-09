localStorage.clear();


// Escuchar el evento submit del formulario
document.querySelector('#formulario').addEventListener('submit', agregar);

function agregar(e) {
    e.preventDefault(); // Evita recargar la página

    // Obtener el texto del textarea
    const texto = document.querySelector('#tweet').value;

    console.log('Texto del usuario:', texto);

    // Guardar el texto en localStorage
    localStorage.setItem('nombre', JSON.stringify(texto));

    // (opcional) limpiar el textarea
    document.querySelector('#tweet').value = '';
}

//const encabezado = document.getElementsByClassName('tweet')
//const contenido = encabezado.textContent;
