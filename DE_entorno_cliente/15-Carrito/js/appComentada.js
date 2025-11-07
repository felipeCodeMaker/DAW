// Selecciona el elemento con id 'carrito' y lo almacena en la constante
const carrito = document.querySelector('#carrito')

// Selecciona el tbody dentro de la tabla con id 'lista-carrito'
// Este es donde se mostrarán los items del carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody')

// Selecciona el botón para vaciar el carrito completo
const vaciarCarrito = document.querySelector('#vaciar-carrito')

// Selecciona el contenedor que tiene todos los cursos disponibles
const listaCursos = document.querySelector('#lista-cursos')

// Array que almacenará todos los artículos agregados al carrito
// Inicializado como array vacío
let articulosCarrito = [];

// Llama a la función para registrar todos los event listeners
registrarEventListeners()

// Función que registra todos los event listeners del carrito
function registrarEventListeners(){
    // Cuando se hace click en la lista de cursos, llama a agregarCurso
    listaCursos.addEventListener('click',agregarCurso)  // Comentario: Agrega curso al carrito y luego vuelve a pintar

    // Cuando se hace click en el carrito, llama a eliminarCurso
    // Para eliminar cursos individuales del carrito
    carrito.addEventListener('click', eliminarCurso)

    // Cuando se hace click en el botón vaciar carrito
    vaciarCarrito.addEventListener('click', ()=>{
        // Reinicia el array del carrito a vacío
        articulosCarrito=[]

        // Limpia la visualización del carrito en el HTML
        limpiarHTML()
    })
}

// Función que se ejecuta al hacer click en un curso para agregarlo al carrito
function agregarCurso(e){
    e.preventDefault() // Previene el comportamiento por defecto del enlace
    
    // Verifica si el elemento clickeado tiene la clase 'agregar-carrito'
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target) // Debug: muestra el elemento clickeado
        
        // Navega al contenedor principal del curso (dos niveles arriba)
        const cursoSeleccionado = e.target.parentElement.parentElement
        
        // Lee los datos del curso y los procesa
        leerDatosCurso(cursoSeleccionado)
    }
}

// Función para eliminar un curso específico del carrito
function eliminarCurso(e){
    // Verifica si el elemento clickeado tiene la clase 'borrar-curso'
    if(e.target.classList.contains('borrar-curso')){
        // Obtiene el id del curso a eliminar del atributo data-id
        const borrar = e.target.getAttribute('data-id')
        
        // Filtra el array, manteniendo solo los cursos que NO tienen el id a eliminar
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== borrar)
        
        // Vuelve a renderizar el carrito en el HTML
        carritoHTML()
    }
}

// Función que extrae la información del curso del HTML
function leerDatosCurso(curso){
    // Crea un objeto con toda la información del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src, // URL de la imagen
        titulo: curso.querySelector('h4').textContent, // Título del curso
        precio: curso.querySelector('.precio span').textContent, // Precio
        cantidad: 1, // Inicializa la cantidad en 1
        id: curso.querySelector('a').getAttribute('data-id') // ID único del curso
    }    

    // Verifica si el curso ya existe en el carrito
    // 'some' retorna true si al menos un elemento cumple la condición
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    // Si el curso ya existe en el carrito
    if(existe){
        // Actualiza la cantidad usando map
        const cursos = articulosCarrito.map(curso => {
            // Si encontramos el curso con el mismo id
            if (curso.id === infoCurso.id){
                curso.cantidad++ // Incrementa la cantidad
                return curso; // Retorna el objeto actualizado
            }else{
                return curso; // Retorna los otros objetos sin cambios
            }
        })
        // Actualiza el array del carrito con los cursos mapeados
        articulosCarrito = [...cursos]
    }else{
        // Si el curso NO existe, lo agrega al carrito usando spread operator
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    // Debug: muestra el estado actual del carrito en consola
    console.log(articulosCarrito);
    
    // Actualiza la visualización del carrito en el HTML
    carritoHTML()
}

// Función que renderiza el carrito en el HTML
function carritoHTML(){
    // Primero limpia el HTML existente
    limpiarHTML();

    // Recorre cada curso en el carrito y crea su representación HTML
    articulosCarrito.forEach(curso => {
        // Desestructura el objeto curso para obtener sus propiedades
        const {imagen, titulo, precio, cantidad, id} = curso
        
        // Crea un nuevo elemento tr (fila de tabla)
        const row = document.createElement('tr')

        // Asigna el HTML interno de la fila con los datos del curso
        row.innerHTML = `
            <td><img src = '${imagen}' width = "100"></td> <!-- Imagen del curso -->
            <td>${titulo}</td> <!-- Título del curso -->
            <td>${precio}</td> <!-- Precio del curso -->
            <td>${cantidad}</td> <!-- Cantidad seleccionada -->
            <td><a href="#" class ="borrar-curso" data-id="${id}"> x </a></td> <!-- Botón eliminar -->
        `;
        
        // Agrega la fila al tbody del carrito
        contenedorCarrito.appendChild(row)
    })
}

// Función para limpiar el HTML del carrito
function limpiarHTML(){
    // Comentario: Forma alternativa pero más lenta
    // contenedorCarrito.innerHTML= '' 

    // Comentario: Otra forma considerada lenta
    // contenedorCarrito.innerHTML = "";
    
    // FORMA EFICIENTE: Elimina todos los hijos del contenedor uno por uno
    // Mientras exista un primer hijo (firstChild)...
    while(contenedorCarrito.firstChild){
        // ...elimina ese primer hijo
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}