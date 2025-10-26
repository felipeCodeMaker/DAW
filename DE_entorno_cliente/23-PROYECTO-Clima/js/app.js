

//La aplicacion tiene un desplegable con las categorias de comidas
//Al seleccionar una categoria, se muestran las comidas de esa categoria
//Al hacer click en una comida, se muestra un modal con los detalles de la comida
//Se pueden guardar comidas como favoritas, que se almacenan en localStorage
//Hay una seccion para ver las comidas favoritas


function iniciarApp() {

    const resultado = document.querySelector('#resultado');

    const selectCategorias = document.querySelector('#categorias');

    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria)

        obtenerCategoria();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }

    const modal = new bootstrap.Modal('#modal', {});

    function obtenerCategoria(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        fetch(url)
            .then(respuesta => respuesta.json())        //Obtener la respuesta y convertirla a JSON
            .then(resultado => mostrarCategoria(resultado.categories))  //Pasar el resultado a la funcion mostrarCategoria
    }


    function mostrarCategoria(categorias = []){    // Recibe un array de categorias
        categorias.forEach(categoria => {   //Recorrer el array de categorias
            const {strCategory} = categoria;
            const option = document.createElement('OPTION');    //Destructuring para obtener el nombre de la categoria
            option.value = strCategory;    //Crear una opcion para el select
            option.textContent = strCategory;  //Agregar el nombre de la categoria como texto de la opcion
            selectCategorias.appendChild(option); //Agregar la opcion al select
        })
    }



    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarComidas(resultado.meals))
        

    }


    function mostrarReceta(recetas = []){
        recetas.forEach(receta => {
            const {idMeal} = receta;
            obtenerDetalleFavorito(idMeal);

        });
    }

    function seleccionarReceta(id){
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }


    // Mostrar el modal con detalles de la receta
    function mostrarRecetaModal(receta = {}) {
        const { idMeal, strMeal, strInstructions, strMealThumb } = receta;

        const modalTitle = document.querySelector('#modal .modal-title');
        const modalBody = document.querySelector('#modal .modal-body');

        modalTitle.textContent = strMeal;
        
        // Ingredientes y medidas
        let ingredientesHTML = '<h6>Ingredientes:</h6><ul class="list-group mb-3">';
        for (let i = 1; i <= 20; i++) {
            const ingrediente = receta[`strIngredient${i}`];
            const medida = receta[`strMeasure${i}`];
            if (ingrediente && ingrediente.trim() !== '') {
                ingredientesHTML += `<li class="list-group-item">${medida ? medida + ' - ' : ''}${ingrediente}</li>`;
            }
        }
        ingredientesHTML += '</ul>';

        modalBody.innerHTML = `
            <img class="img-fluid mb-3" src="${strMealThumb}" alt="${strMeal}">
            ${ingredientesHTML}
            <h6>Instrucciones:</h6>
            <p>${strInstructions}</p>
            <div class="text-end">
                <button id="modal-fav-btn" class="btn ${existeStorage(idMeal) ? 'btn-danger' : 'btn-outline-danger'}">
                    ${existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito'}
                </button>
            </div>
        `;

  


    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length === 0){
            const noFavoritos = document.createElement('p');
            noFavoritos.textContent = 'No hay favoritos aun';
            noFavoritos.classList.add('text-center');
            favoritosDiv.appendChild(noFavoritos);
            return;
        }   

        favoritos.forEach(favorito => {
            const {idMeal} = favorito;
            obtenerDetalleFavorito(idMeal);
        });


    }




}









document.addEventListener('DOMContentLoaded', iniciarApp);