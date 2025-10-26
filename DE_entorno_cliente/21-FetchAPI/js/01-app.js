const cargarTxtBtn = document.querySelector('#cargarTxt')
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url   =   'data/datos.txt'    //definimos la url del recurso a obtener
    fetch(url)      //fetch es una promesa que recibe como parametro la url del recurso a obtener.
                    //Tambien puede recibir datos de una url de internet.

            .then(respuesta => { //El primer .then nos da el resultado  de la promesa fetch

                console.log(respuesta)      //El objeto Response que nos devuelve fetch tiene mucha informacion

                console.log(respuesta.ok)       //El ok nos devuelve true o false dependiendo de si la request ha ido bien o no

                console.log(respuesta.status)   //El status es el que nos define justamente el status de la request

                console.log(respuesta.statusText)//El status es el que nos define justamente el status de la request

                console.log(respuesta.url)//La url desde donde se ha hecho la peticion

                console.log(respuesta.type)//El tipo de respuesta que es

                return respuesta.text() //con la respuesta ok le hacemos retornar el valor al proximo .then

            })
            .then(datos => {//el segundo .then con el return del anterior devuelve el valor del archivo
                console.log(datos)
            })
            .catch (error => console.log(error))
}