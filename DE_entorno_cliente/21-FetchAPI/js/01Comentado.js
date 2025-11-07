// Selecciona el botón con id 'cargarTxt' del DOM
const cargarTxtBtn = document.querySelector('#cargarTxt')

// Agrega un event listener para el evento 'click' que ejecutará obtenerDatos
cargarTxtBtn.addEventListener('click', obtenerDatos);

// Función que se ejecuta al hacer click en el botón
function obtenerDatos(){

    // Define la URL del archivo de texto a cargar
    const url   =   'data/datos.txt'    //comentario: definimos la url del recurso a obtener
    
    // Fetch API: hace una petición HTTP GET a la URL especificada
    // fetch es una promesa que recibe como parametro la url del recurso a obtener.
    // Tambien puede recibir datos de una url de internet.
    fetch(url)      

            // Primer .then: procesa la respuesta inicial de fetch
            .then(respuesta => { // El primer .then nos da el resultado de la promesa fetch

                // Muestra el objeto Response completo en consola
                console.log(respuesta)      // El objeto Response que nos devuelve fetch tiene mucha informacion

                // Muestra si la petición fue exitosa (true/false)
                console.log(respuesta.ok)       // El ok nos devuelve true o false dependiendo de si la request ha ido bien o no

                // Muestra el código de estado HTTP (200, 404, etc.)
                console.log(respuesta.status)   // El status es el que nos define justamente el status de la request

                // Muestra el texto del estado HTTP ("OK", "Not Found", etc.)
                console.log(respuesta.statusText)// El status es el que nos define justamente el status de la request

                // Muestra la URL desde donde se hizo la petición
                console.log(respuesta.url)// La url desde donde se ha hecho la peticion

                // Muestra el tipo de respuesta ("basic", "cors", etc.)
                console.log(respuesta.type)// El tipo de respuesta que es

                // Convierte la respuesta a texto y lo pasa al siguiente .then
                return respuesta.text() // con la respuesta ok le hacemos retornar el valor al proximo .then

            })
            // Segundo .then: recibe el contenido del archivo como texto
            .then(datos => {// el segundo .then con el return del anterior devuelve el valor del archivo
                console.log(datos) // Muestra el contenido del archivo TXT en consola
            })
            // Catch: maneja cualquier error que ocurra durante la petición
            .catch (error => console.log(error)) // Muestra errores en consola
}