// Selecciona el elemento select para las categorías de comida
const selectorCategorias = document.querySelector('#categorias');

// Selecciona el contenedor donde se mostrarán los resultados de recetas
const resultados = document.querySelector('#resultado');

// Ejecuta la función para registrar event listeners
registrarEventListener();

// Función que configura todos los event listeners
function registrarEventListener(){
    // Cuando cambia la selección en el dropdown de categorías, ejecuta seleccionarCategorias
    selectorCategorias.addEventListener('change', seleccionarCategorias);
}

// Ejecuta la función para cargar y mostrar las categorías
mostrarCategorias();

// Función que obtiene las categorías de comida desde la API
function mostrarCategorias(){
    // URL de la API para obtener todas las categorías de comidas
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    
    // Hace una petición HTTP GET a la API
    fetch(url) // 2. fetch(link_api), accede a la api
            // Convierte la respuesta a formato JSON
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            // Procesa el resultado JSON
            .then( resultado => {
                // Muestra el resultado completo en consola para debugging
                console.log(resultado)
                // Llama a la función para pintar las categorías en el dropdown
                pintarCategorias(resultado.categories)
            })
}

// Función que crea las opciones del dropdown con las categorías
function pintarCategorias(categorias){
    // Itera sobre cada categoría recibida del API
    categorias.forEach(categoria => {
        // Crea un nuevo elemento option para el select
        const opcion = document.createElement('option');
        // Establece el texto visible de la opción con el nombre de la categoría
        opcion.textContent = categoria.strCategory;
        // Establece el valor de la opción con el nombre de la categoría
        opcion.value = categoria.strCategory;
        // Agrega la opción al dropdown de categorías
        selectorCategorias.appendChild(opcion);
    });
}

// Función que se ejecuta cuando el usuario selecciona una categoría
function seleccionarCategorias(e){
    // Obtiene el valor seleccionado en el dropdown
    const miCategoria = e.target.value
    // Construye la URL para obtener recetas de la categoría seleccionada
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${miCategoria}`;
    
    // Hace petición a la API para obtener recetas de la categoría
    fetch(url) // 2. fetch(link_api), accede a la api
            // Convierte respuesta a JSON
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            // Procesa el resultado
            .then( resultado => {
                // Muestra resultado en consola
                console.log(resultado)
                // Llama función para mostrar las recetas obtenidas
                mostrarRecetas(resultado.meals)
            })
}

// Función que muestra las recetas en el contenedor de resultados
function mostrarRecetas(meals){
    // Limpia el contenido anterior del contenedor de resultados
    limpiarHTML(resultados);
    
    // Crea un título para la sección de resultados
    const h2 = document.createElement('h2');
    h2.textContent = 'Resultados';
    
    // Itera sobre cada receta obtenida
    meals.forEach(meal => {
        // Crea un contenedor div para cada receta
        const div = document.createElement('div');
        
        // Crea elemento imagen para la receta
        const imagen = document.createElement('img');
        imagen.src = meal.strMealThumb; // URL de la imagen
        imagen.width = 100; // Ancho fijo de 100px
        div.appendChild(imagen); // Agrega imagen al div
        
        // Crea título con el nombre de la receta
        const h4 = document.createElement('h4');
        h4.textContent = meal.strMeal;
        div.appendChild(h4); // Agrega título al div
        
        // Crea botón para ver detalles de la receta
        const boton = document.createElement('button');
        boton.classList = 'btn btn-danger'; // Clases de Bootstrap para estilo
        boton.textContent = 'Ver receta';
        // Asigna función que se ejecuta al hacer click en el botón
        boton.onclick = function(){
            mostrarReceta(meal.idMeal); // Pasa el ID de la receta
        }
        div.appendChild(boton); // Agrega botón al div
        
        // Agrega el div completo al contenedor de resultados
        resultados.appendChild(div);
    });
}

// Función que obtiene y muestra los detalles completos de una receta
function mostrarReceta(idMeal){
    // Construye URL para obtener detalles específicos de una receta por ID
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    
    // Hace petición a la API
    fetch(url) // 2. fetch(link_api), accede a la api
            // Convierte respuesta a JSON
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            // Procesa el resultado
            .then( resultado => {
                // Muestra resultado en consola
                console.log(resultado)
                // Llama función para pintar el modal con los detalles
                pintarModal(resultado.meals[0]) // Toma el primer elemento del array
            })
}

// Función que pinta los detalles de la receta en un modal
function pintarModal(comidas){
    // Crea una nueva instancia del modal de Bootstrap
    const modal = new bootstrap.Modal('#modal', {}); // empezar
    
    // Selecciona el título del modal y lo limpia
    const titulo = document.querySelector('.modal-title');
    limpiarHTML(titulo);
    
    // Crea y agrega el título de la receta al modal
    const h2 = document.createElement('h2');
    h2.textContent = comidas.strMeal;
    titulo.appendChild(h2);
    
    // Selecciona el cuerpo del modal y lo limpia
    const body = document.querySelector('.modal-body');
    limpiarHTML(body);
    
    // Crea y agrega la imagen de la receta
    const imagen = document.createElement('img');
    imagen.src = comidas.strMealThumb;
    imagen.width = 100;
    body.appendChild(imagen);
    
    // Crea y agrega título para la sección de ingredientes
    const h3 = document.createElement('h3');
    h3.textContent = 'Ingredientes y cantidades';
    body.appendChild(h3);
    
    // Itera sobre los 20 posibles ingredientes (la API tiene hasta 20)
    for(i = 1; i < 20; i++){
        // Construye los nombres de las propiedades para ingrediente y medida
        const nombre = `strIngredient${i}`;
        const cantidad = `strMeasure${i}`;
        
        // Verifica si el ingrediente existe (no está vacío)
        if(comidas[nombre]){
            // Crea elemento de lista para el ingrediente
            const li = document.createElement('li');
            li.textContent = comidas[nombre] + ' - ' + comidas[cantidad];
            body.appendChild(li);
        }
    }
    
    // Selecciona el footer del modal y lo limpia
    const footer = document.querySelector('.modal-footer');
    limpiarHTML(footer);
    
    // Crea y agrega botón para cerrar el modal
    const btnCerrar = document.createElement('button');
    btnCerrar.classList = 'btn btn-danger';
    btnCerrar.textContent = 'Cerrar';
    footer.appendChild(btnCerrar);

    // Muestra el modal
    modal.show() // terminar
}

// Función genérica para limpiar el contenido de cualquier elemento HTML
function limpiarHTML(selector) {
    // Mientras el elemento tenga hijos, los elimina uno por uno
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}