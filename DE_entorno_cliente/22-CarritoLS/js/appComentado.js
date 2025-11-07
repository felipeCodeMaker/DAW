// Selectores del DOM
// Selecciona el contenedor de la lista de cursos disponibles
const seleccionCurso = document.querySelector('#lista-cursos')

// Selecciona el tbody de la tabla del carrito donde se mostrarán los cursos agregados
const carrito = document.querySelector('#lista-carrito tbody')

// Selecciona el contenedor completo del carrito (para event delegation)
const borrarCurso = document.querySelector('#lista-carrito')

// Selecciona el botón para vaciar todo el carrito
const vaciarCarrito = document.querySelector('#vaciar-carrito')

// Array que almacenará todos los cursos agregados al carrito
let listaCursos = []

// Event Listeners
// Cuando se hace click en la lista de cursos, ejecuta cursoSeleccionado
seleccionCurso.addEventListener('click', cursoSeleccionado)

// Event delegation: escucha clicks en todo el carrito para borrar cursos individuales
borrarCurso.addEventListener('click', borrar)

// Cuando se hace click en el botón vaciar carrito
vaciarCarrito.addEventListener('click', ()=>{
    listaCursos=[]  // Vacía el array de cursos
    limpiarHTML()   // Limpia la visualización del carrito
})

// Cuando el DOM ha terminado de cargar completamente
document.addEventListener('DOMContentLoaded',()=>{
    // Recupera los cursos guardados en localStorage o usa array vacío si no existen
    listaCursos = JSON.parse(localStorage.getItem('productos')) || []
    // Cuando la página carga, recupera los cursos guardados en localStorage
    // Si no hay datos, usa un array vacío
    
    // Muestra los cursos recuperados en el carrito
    iterado(listaCursos) // Ejecuta iterado() para mostrar los cursos en el carrito
})

// Función para borrar un curso individual del carrito
function borrar(e){
    // Verifica si el elemento clickeado tiene la clase 'borrar-curso'
    if(e.target.classList.contains('borrar-curso')){
        // Obtiene el ID del curso a borrar del atributo id
        const borrado = e.target.getAttribute('id')
        
        // Filtra el array, manteniendo solo los cursos que NO tienen el ID a eliminar
        listaCursos = listaCursos.filter(curso=>curso.id !== borrado)
        
        // Actualiza la visualización del carrito
        iterado(listaCursos)
    }
}

// Función que se ejecuta al hacer click en un curso para agregarlo al carrito
function cursoSeleccionado(e){
    e.preventDefault() // Evita el comportamiento por defecto del enlace
    
    // Verifica si el click fue en un botón 'agregar-carrito'
    if(e.target.classList.contains('agregar-carrito')){
        // Navega al contenedor principal del curso (dos niveles arriba en el DOM)
        const curso = e.target.parentElement.parentElement
        
        // Extrae la información del curso
        infoCurso(curso)
    }
}

// Función que extrae la información de un curso y lo agrega al carrito
function infoCurso(curso){
    // Crea un objeto con toda la información del curso
    const descripcion={        
        imagen: curso.querySelector('img').src, // URL de la imagen
        titulo: curso.querySelector('.info-card h4').textContent, // Título del curso
        precio: curso.querySelector('.precio span').textContent, // Precio
        id:     curso.querySelector('a').getAttribute('data-id'), // ID único
        cantidad:1 // Inicializa la cantidad en 1        
    }
    
    // Verifica si el curso ya existe en el carrito
    if(listaCursos.some(id=>id.id === descripcion.id)){
        // Si existe, actualiza la cantidad
        
        // Crea un nuevo array mapeando los cursos existentes
        const existe = listaCursos.map(id =>{
            // Si encontramos el curso con el mismo ID
            if(id.id === descripcion.id){
                id.cantidad++; // Incrementa la cantidad
                return id; // Retorna el curso actualizado
            }else{
                return id; // Retorna los otros cursos sin cambios
            }
        })
        // Actualiza el array principal con los cursos mapeados
        listaCursos=[...existe]
    }else{
        // Si el curso NO existe, lo agrega al carrito usando spread operator
        listaCursos=[...listaCursos, descripcion]
    }
    
    // Actualiza la visualización del carrito
    iterado(listaCursos)
}

// Función principal que renderiza el carrito en el HTML
function iterado(listCursos){
    // Limpia el contenido anterior del carrito
    limpiarHTML();
    
    // Muestra el array de cursos en consola (para debugging)
    console.log(listaCursos)
    
    // Guarda el estado actual del carrito en localStorage
    localStorage.setItem('productos', JSON.stringify(listaCursos))
    
    // Itera sobre cada curso en el carrito
    listCursos.forEach(curso => {
        // Crea una nueva fila de tabla
        const card = document.createElement('tr')
        
        // Extrae propiedades del curso usando destructuring
        const {imagen,titulo,precio,cantidad, id} = curso
        
        // Asigna el HTML interno de la fila con los datos del curso
        card.innerHTML=`
        <img src="${imagen}" width="100">
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <a class="borrar-curso" href="#" id="${id}" >X </a></td>
        `
    
    // Agrega la fila al tbody del carrito
    carrito.appendChild(card);
    });
}

// Función para limpiar el contenido del carrito
function limpiarHTML(){
    // Elimina todos los hijos del carrito uno por uno
    while(carrito.firstElementChild){
        carrito.removeChild(carrito.firstElementChild)
    }
}