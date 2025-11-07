// Selecciona el botón con id 'cargarJSONArray'
const cargar = document.querySelector('#cargarJSONArray')

// Agrega event listener para el click
cargar.addEventListener('click', mostrarArray)

// Función para mostrar el array de empleados
function mostrarArray(){
    // Define la URL del archivo JSON que contiene un array
    const url = 'data/empleados.json'
    
    // Hace fetch a la URL
    fetch(url)
        // Convierte respuesta a JSON
        .then(respuesta=>respuesta.json())
        // Pasa el array resultante a la función mostrarHTML
        .then(resultado => mostrarHTML(resultado))     //                                      

}

// Función que recibe un array de empleados y los muestra en HTML
function mostrarHTML(empleados){    
    // Selecciona el contenedor donde se mostrará el contenido
    const conti = document.querySelector('.contenido')                                                                       
    
    // Variable para acumular el HTML generado
    let HTML ='';                           
    
    // Itera sobre cada empleado del array
    empleados.forEach(empleado => {
        // Extrae propiedades del empleado usando destructuring
        const {id, nombre, empresa, trabajo} = empleado
        
        // Agrega HTML para este empleado a la variable acumuladora
        HTML +=`
            <p>Nombre: ${nombre}</p>
            <p>Id: ${id}</p>
            <p>trabajo: ${trabajo}</p>
            <p>Empresa: ${empresa}</p>
            `
    });
    
    // Inserta todo el HTML generado en el contenedor
    conti.innerHTML = HTML
}