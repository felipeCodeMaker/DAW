localStorage.clear();


const texto = document.querySelector('#lista-tweets');
let tweets= [];

// Escuchar el evento submit del formulario
document.querySelector('#formulario').addEventListener('submit', agregarTweet);


registrarEventListeners()
function registrarEventListeners(){
    listaCursos.addEventListener('submit',agregarTweet)  //Mete un curso en el carrito, una vez hecho volver a pintar

    //Elimina cursos del carrito
    texto.addEventListener('submit', eliminarTweet)

    //Vaciar el carrito
    vaciarTweet.addEventListener('submit', ()=>{
        tweets=[]

        limpiarHTML()
    })
}



function agregarTweet(e) {
    e.preventDefault(); // Evita recargar la página
    // Obtener el texto del textarea
    const texto = document.querySelector('#tweet').value;
    console.log('Texto del usuario:', texto);
    // Guardar el texto en localStorage
    localStorage.setItem('nombre', JSON.stringify(texto));
    // (opcional) limpiar el textarea
    document.querySelector('#tweet').value = '';
}



function agregartweet(e){
    e.preventDefault()
    if(e.target.classList.contains('lista-tweets')){
        console.log(e.target)
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

function leerDatosTweet(curso){
    //Crear un objeco con los valores del curso
    const infotweet =texto = document.querySelector('#tweet').value;
         

    //Revisa si un elemento ya existe en el array
    const existe = tweets.some(curso =>curso.id === infotweet.id)


    if(existe){
        //actuailzamos la cantidad
        const cursos = tweets.map(curso =>{
            if (curso.id === infotweet.id){
                curso.cantidad++
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos tal cual
            }
        })
        articulotweetssCarrito=[...cursos]

    }else{
        //Agregar elementos al array de carrito
        tweets = [...tweets, infotweet]
         }


    //agrega elementos a carrito
    console.log(tweets);
    
    carritoHTML()
}

function tweetHTML(){
    //limpia el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    tweets.forEach(curso=>{
        const {texto} = curso
        const row = document.createElement('tr')

        row.innerHTML=`
            <td><a href="#" class ="borrar-curso" data-id="${nombre}"> x </a></td>
        `;
        //Agrega el HTML del carrito en el Tbody
        contenedorCarrito.appendChild(row)
    })
}

function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            //crear boton de eliminar
            const botonBorrar = document.createElement('X');
            botonBorrar.classList = 'borrar-tweet';
            botonBorrar.innerText = 'X';

            //Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');

            //Añade el texto
            li.innerText = tweet.texto;

            //Añade el boton de borrar tweet
            li.appendChild(botonBorrar);

            //Añade un atributo unico....
            li.dataset.tweetId = tweet.id;

        })
    }
}
