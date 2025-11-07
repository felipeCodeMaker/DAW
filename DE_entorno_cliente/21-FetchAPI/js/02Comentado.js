// Selecciona el botón con id 'cargarJSON'
const cargarJSON = document.querySelector('#cargarJSON')

// Agrega event listener para el click que ejecutará obtenerDatos
cargarJSON.addEventListener("click", obtenerDatos)

// Función para obtener datos JSON
function obtenerDatos(){
    // url = 'data/empleado.json' (esto está comentado)
    // fetch(url ) (esto está comentado)
    
    // Hace fetch directamente a la URL del archivo JSON
    fetch('data/empleado.json')
    // Convierte la respuesta a formato JSON
    .then(resu => resu.json())
    // Pasa el resultado JSON a la función mostrarHTML
    .then(resultado => mostrarHTML(resultado))
}

// Función que muestra los datos en el HTML usando destructuring
function mostrarHTML({empresa, nombre, id, trabajo}){
    // Selecciona el elemento donde se mostrará el contenido
    const conten = document.querySelector('.contenido')
    
    // Inserta HTML con los datos del empleado usando template literals
    conten.innerHTML= `
    <p>Empresa: ${empresa}</p>
    <p>ID: ${id}</p>
    <p>Nombre: ${nombre}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}