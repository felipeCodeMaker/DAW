//ejercicio que se añadan dos metodos
//uno para crear una playlist junto con su nombre y otro para reproducir una playlist

let playlist = []


const canciones =   [["Tu jardin con enanitos", 4],
                    [ "Al-andalus", 3],
                    [ "Jueves", 4],
                    ["La taberna de buda", 5]];



function crearPlaylist(){

    for(let i=0; i<canciones.length; i++){
        playlist.push({nombre: canciones[i][0], duracion: canciones[i][1]})
    }

};

crearPlaylist();
console.table(playlist);

function reproducir(id){
    console.log(`Reproduciendo cancion: ${canciones[id-1][0]}`)
}
reproducir(1);



var playlist2 = [];

let cancion1={nombre:"Tu jardin con enanitos",duracion:4};
let cancion2={nombre : "Al-andalus", duracion : 3};
let cancion3={nombre : "Jueves", duracion : 5};
let cancion4={nombre : "La taberna de buda", duracion : 4}





playlist2.push(cancion1, cancion2, cancion3, cancion4);
console.table(playlist2);



    playlist2.forEach(function(cancion){
        console.log(`Reproduciendo la cancion: ${cancion.nombre} - Duracion: ${cancion.duracion}`)
    });


