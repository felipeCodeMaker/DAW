function iniciarApp() {
    const resultado = document.querySelector('#resultado');
    const selectCategorias = document.querySelector('#categorias');
    const favoritosDiv = document.querySelector('.favoritos');

    if(selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    if(favoritosDiv) {
        obtenerFavoritos();
    }

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        
        fetch(url)
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('Error en la petición');
                }
                return respuesta.json();
            })
            .then(datos => {
                if (datos && datos.categories) {
                    mostrarCategorias(datos.categories);
                }
            })
            .catch(error => {
                console.error('Error al obtener categorías:', error);
            });
    }

    function mostrarCategorias(categorias) {
        categorias.forEach(categoria => {
            const option = document.createElement('OPTION');
            option.value = categoria.strCategory;
            option.textContent = categoria.strCategory;
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        if (categoria === '-- Seleccione --') {
            resultado.innerHTML = '';
            return;
        }

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        
        fetch(url)
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('Error en la petición');
                }
                return respuesta.json();
            })
            .then(datos => {
                if (datos && datos.meals) {
                    mostrarComidas(datos.meals);
                } else {
                    resultado.innerHTML = '<p class="text-center">No se encontraron comidas</p>';
                }
            })
            .catch(error => {
                console.error('Error al obtener comidas:', error);
                resultado.innerHTML = '<p class="text-center">Error al cargar las comidas</p>';
            });
    }

    function mostrarComidas(comidas) {
        resultado.innerHTML = '';

        comidas.forEach(comida => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card h-100';

            const img = document.createElement('img');
            img.src = comida.strMealThumb;
            img.alt = comida.strMeal;
            img.className = 'card-img-top';
            img.style.height = '200px';
            img.style.objectFit = 'cover';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex flex-column';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = comida.strMeal;

            const button = document.createElement('button');
            button.className = 'btn btn-primary mt-auto';
            button.textContent = 'Ver Receta';
            button.addEventListener('click', function() {
                seleccionarReceta(comida.idMeal);
            });

            cardBody.appendChild(title);
            cardBody.appendChild(button);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            resultado.appendChild(col);
        });
    }

    function seleccionarReceta(id) {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        
        fetch(url)
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('Error en la petición');
                }
                return respuesta.json();
            })
            .then(datos => {
                if (datos && datos.meals && datos.meals[0]) {
                    mostrarRecetaModal(datos.meals[0]);
                }
            })
            .catch(error => {
                console.error('Error al obtener receta:', error);
            });
    }

    function mostrarRecetaModal(receta) {
        const modal = new bootstrap.Modal(document.getElementById('modal'));
        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');

        modalTitle.textContent = receta.strMeal;

        // Generar lista de ingredientes
        let ingredientesHTML = '<h6>Ingredientes:</h6><ul class="list-group mb-3">';
        for (let i = 1; i <= 20; i++) {
            const ingrediente = receta['strIngredient' + i];
            const medida = receta['strMeasure' + i];
            if (ingrediente && ingrediente.trim() !== '') {
                ingredientesHTML += `<li class="list-group-item">${medida} ${ingrediente}</li>`;
            }
        }
        ingredientesHTML += '</ul>';

        const esFavorito = existeEnFavoritos(receta.idMeal);
        
        modalBody.innerHTML = `
            <img class="img-fluid rounded mb-3" src="${receta.strMealThumb}" alt="${receta.strMeal}" style="max-height: 300px; width: 100%; object-fit: cover;">
            ${ingredientesHTML}
            <h6>Instrucciones:</h6>
            <p>${receta.strInstructions}</p>
            <div class="text-end">
                <button id="modal-fav-btn" class="btn ${esFavorito ? 'btn-danger' : 'btn-outline-danger'}">
                    ${esFavorito ? 'Eliminar Favorito' : 'Guardar Favorito'}
                </button>
            </div>
        `;

        const favBtn = document.getElementById('modal-fav-btn');
        favBtn.addEventListener('click', function() {
            if (esFavorito) {
                eliminarFavorito(receta.idMeal);
            } else {
                agregarFavorito(receta);
            }
            modal.hide();
        });

        modal.show();
    }

    function existeEnFavoritos(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        return favoritos.some(fav => fav.idMeal === id);
    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (!existeEnFavoritos(receta.idMeal)) {
            favoritos.push({
                idMeal: receta.idMeal,
                strMeal: receta.strMeal,
                strMealThumb: receta.strMealThumb
            });
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            mostrarToast('Agregado a favoritos');
        }
    }

    function eliminarFavorito(id) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        favoritos = favoritos.filter(fav => fav.idMeal !== id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        mostrarToast('Eliminado de favoritos');
        
        if (favoritosDiv) {
            obtenerFavoritos();
        }
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        favoritosDiv.innerHTML = '';

        if (favoritos.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.textContent = 'No hay favoritos aún';
            mensaje.className = 'text-center';
            favoritosDiv.appendChild(mensaje);
            return;
        }

        favoritos.forEach(favorito => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card h-100';

            const img = document.createElement('img');
            img.src = favorito.strMealThumb;
            img.alt = favorito.strMeal;
            img.className = 'card-img-top';
            img.style.height = '200px';
            img.style.objectFit = 'cover';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex flex-column';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = favorito.strMeal;

            const verBtn = document.createElement('button');
            verBtn.className = 'btn btn-primary me-2';
            verBtn.textContent = 'Ver Receta';
            verBtn.addEventListener('click', function() {
                seleccionarReceta(favorito.idMeal);
            });

            const eliminarBtn = document.createElement('button');
            eliminarBtn.className = 'btn btn-danger';
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.addEventListener('click', function() {
                eliminarFavorito(favorito.idMeal);
            });

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'mt-auto';
            buttonContainer.appendChild(verBtn);
            buttonContainer.appendChild(eliminarBtn);

            cardBody.appendChild(title);
            cardBody.appendChild(buttonContainer);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            favoritosDiv.appendChild(col);
        });
    }

    function mostrarToast(mensaje) {
        const toastEl = document.getElementById('toast');
        const toastBody = toastEl.querySelector('.toast-body');
        toastBody.textContent = mensaje;
        
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);