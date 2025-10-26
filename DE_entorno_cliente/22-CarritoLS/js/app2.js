//Selector curso
const seleccionElemento = document.querySelector('#lista-cursos')
const carrito = document.querySelector('#lista-carrito tbody')
const borrarElemento = document.querySelector('#lista-carrito')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
let listaElementos = []

//Si selecciona un elemento del listado, se ejecuta la función seleccionarElemento
seleccionElemento.addEventListener('click', seleccionarElemento);

//si se selecciona borrar un elemento del carrito, se ejecuta la función borrar
borrarElemento.addEventListener('click', borrar)

//si se selecciona vaciar el carrito, se vacía el array listaElementos y se limpia el HTML
vaciarCarrito.addEventListener('click', ()=>{
    listaElementos=[]
    limpiarHTML()
})

//AddEventListeners (borrar, agregarcarrito, vaciarCarrito)

document.addEventListener('DOMContentLoaded',()=>{ 
    listaElementos = JSON.parse(localStorage.getItem('productos')) || []//Cuando la página carga, recupera los cursos guardados 
                                                                    //en localStorage. Si no hay datos, usa un array vacío
    iterado(listaElementos)//Ejecuta iterado() para mostrar los cursos en el carrito
})


//LimpiarHTML   --> función que limpia el HTML del carrito, que tambian borra los elementos del carrito


//funcion borrar

//funcion seleccionarElemento --> funcion infoCurso() (comprueba si existe el elemento y su informacion) 
        //--> iterado()(añade el elemento al carrito como una carta)