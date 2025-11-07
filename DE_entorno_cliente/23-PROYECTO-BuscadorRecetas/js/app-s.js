const selectorCategorias = document.querySelector('#categorias');
const resultados= document.querySelector('#resultado');

registrarEventListener();

function registrarEventListener(){
	selectorCategorias.addEventListener('change', seleccionarCategorias);
}

mostrarCategorias();
function mostrarCategorias(){
	const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
	fetch(url) // 2. fetch(link_api), accede a la api
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            .then( resultado => {
				console.log(resultado)
				pintarCategorias(resultado.categories)
			})
}

function pintarCategorias(categorias){
	categorias.forEach(categoria => {
		const opcion = document.createElement('option');
		opcion.textContent=categoria.strCategory;
		opcion.value=categoria.strCategory;
		selectorCategorias.appendChild(opcion);
	});
}

function seleccionarCategorias(e){
	const miCategoria = e.target.value
	const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${miCategoria}`;
	fetch(url) // 2. fetch(link_api), accede a la api
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            .then( resultado => {
				console.log(resultado)
				mostrarRecetas(resultado.meals)
			})
}

function mostrarRecetas(meals){
	limpiarHTML(resultados);
	const h2 = document.createElement('h2');
	h2.textContent='Resultados';
	meals.forEach(meal => {
		const div = document.createElement('div');
		const imagen = document.createElement('img');
		imagen.src = meal.strMealThumb;
		imagen.width=100;
		div.appendChild(imagen);
		const h4 = document.createElement('h4');
		h4.textContent=meal.strMeal;
		div.appendChild(h4);
		const boton = document.createElement('button');
		boton.classList='btn btn-danger';
		boton.textContent='Ver receta';
		boton.onclick = function(){
			mostrarReceta(meal.idMeal);
		}
		div.appendChild(boton);
		resultados.appendChild(div);
	});
}

function mostrarReceta(idMeal){
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
	fetch(url) // 2. fetch(link_api), accede a la api
            .then( respuesta => respuesta.json()) // 3. transformar la respuesta a json
            .then( resultado => {
				console.log(resultado)
				pintarModal(resultado.meals[0])
			})
}

function pintarModal(comidas){
	const modal = new bootstrap.Modal('#modal', {}); // empezar
	
	const titulo = document.querySelector('.modal-title');
	limpiarHTML(titulo);
	const h2=document.createElement('h2');
	h2.textContent=comidas.strMeal;
	titulo.appendChild(h2);
	const body = document.querySelector('.modal-body');
	limpiarHTML(body);
	const imagen = document.createElement('img');
	imagen.src=comidas.strMealThumb;
	imagen.width=100;
	body.appendChild(imagen);
	const h3 = document.createElement('h3');
	h3.textContent='Ingredientes y cantidades';
	body.appendChild(h3);
	for(i=1; i<20; i++){
		const nombre = `strIngredient${i}`;
		const cantidad = `strMeasure${i}`;
		if(comidas[nombre]){
			const li = document.createElement('li');
			li.textContent=comidas[nombre] + '-' + comidas[cantidad];
			body.appendChild(li);
		}
	}
	const footer = document.querySelector('.modal-footer');
	limpiarHTML(footer);
	const btnCerrar = document.createElement('button');
	btnCerrar.classList='btn btn-danger';
	btnCerrar.textContent='Cerrar';
	footer.appendChild(btnCerrar);

	modal.show() // terminar
}

function limpiarHTML(selector) {
	while(selector.firstChild){
		selector.removeChild(selector.firstChild);
	}
}