// Selecciona el botón con id 'cargarAPI'
const cargarapi = document.querySelector('#cargarAPI')

// Agrega event listener para el click
cargarapi.addEventListener('click', obtenerDatos)

// Función para obtener datos de API externa
function obtenerDatos(){
    // URL de la API externa (Lorem Picsum - servicio de imágenes)
    const url = 'https://picsum.photos/list'
    
    // Hace fetch a la API externa
    fetch(url)
            // Convierte respuesta a JSON
            .then(respuesta => respuesta.json())
            // Pasa los datos a la función mostrarHTML
            .then(resultado =>mostrarHTML(resultado))
}

// Función que muestra los datos de la API en HTML
function mostrarHTML(datos){
    // Selecciona el contenedor del contenido
    const contenido = document.querySelector('.contenido')
    
    // Variable para acumular HTML
    let html='';

    // Itera sobre cada perfil (cada elemento del array de datos)
    datos.forEach(perfil => {
        // Extrae propiedades author y post_url del perfil
        const {author, post_url} = perfil
        
        // Agrega HTML para este perfil
        html +=`
        <p>Autor: ${author} </p>
        <a href = "${post_url}" target="_blank" >Ver imagen</a>
        `;
        
    });
    
    // Inserta todo el HTML en el contenedor
    contenido.innerHTML = html
}