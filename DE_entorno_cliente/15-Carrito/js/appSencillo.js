// Selección de elementos principales
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

// Array para almacenar los artículos del carrito
let articulosCarrito = [];

// Inicializar event listeners
function init() {
    // Evento para agregar cursos al carrito
    listaCursos.addEventListener('click', agregarCurso);
    
    // Evento para eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);
    
    // Evento para vaciar el carrito completo
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Función para agregar curso al carrito
function agregarCurso(e) {
    e.preventDefault();
    
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.closest('.card'); // Busca el contenedor del curso más cercano
        const cursoInfo = {
            id: curso.querySelector('a').getAttribute('data-id'),
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            cantidad: 1
        };
        
        // Verificar si el curso ya existe en el carrito
        const cursoExistente = articulosCarrito.find(item => item.id === cursoInfo.id);
        
        if (cursoExistente) {
            // Si existe, aumentar cantidad
            cursoExistente.cantidad++;
        } else {
            // Si no existe, agregar nuevo curso
            articulosCarrito.push(cursoInfo);
        }
        
        actualizarCarrito();
    }
}

// Función para eliminar un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        actualizarCarrito();
    }
}

// Función para vaciar todo el carrito
function vaciarCarrito() {
    articulosCarrito = [];
    actualizarCarrito();
}

// Función principal para actualizar la visualización del carrito
function actualizarCarrito() {
    // Limpiar contenido anterior
    contenedorCarrito.innerHTML = '';
    
    // Si el carrito está vacío, mostrar mensaje
    if (articulosCarrito.length === 0) {
        const filaVacia = document.createElement('tr');
        filaVacia.innerHTML = '<td colspan="5" class="text-center">El carrito está vacío</td>';
        contenedorCarrito.appendChild(filaVacia);
        return;
    }
    
    // Generar HTML para cada curso en el carrito
    articulosCarrito.forEach(curso => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${curso.imagen}" width="100"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">✕</a>
            </td>
        `;
        contenedorCarrito.appendChild(fila);
    });
    
    // Actualizar contador total (opcional)
    actualizarContador();
}

// Función opcional para mostrar cantidad total de items
function actualizarContador() {
    const totalItems = articulosCarrito.reduce((total, curso) => total + curso.cantidad, 0);
    console.log(`Total items en carrito: ${totalItems}`);
}

// Inicializar la aplicación
init();