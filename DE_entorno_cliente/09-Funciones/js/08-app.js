const repro = {
    reproduct: id => console.log(`Reproduciendo canción  ${id}`),
    pausar: () => {
        console.log('Pausando.........')
    }
}

repro.reproduct(30);
repro.pausar();

repro.borrar = function(id){
    console.log(`Borrando cancion ${id}`);
}

repro.borrar(30);

const repro1 = {
    cancion:' ',
    reproduct: id => console.log(`Reproduciendo cacion ${id}`),
    pausar: () => {
        console.log('Pausando........');
    },
    set nuevaCancion(cancion){
        this.cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}