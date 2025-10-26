const cargarJSON = document.querySelector('#cargarJSON')
cargarJSON.addEventListener("click", obtenerDatos)

function obtenerDatos(){
    //url = 'data/empleado.json'
    //fetch(url )
    fetch('data/empleado.json')
    .then(resu => resu.json())
    .then(resultado => mostrarHTML(resultado))
}


function mostrarHTML({empresa, nombre, id, trabajo}){
    const conten = document.querySelector('.contenido')
    
    conten.innerHTML= `
    <p>Empresa: ${empresa}</p>
    <p>ID: ${id}</p>
    <p>Nombre: ${nombre}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}