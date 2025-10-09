function Sumar(a, b){   //parametros
    return a + b;
};

let resul = Sumar(2, 3);

//Otro ejemplo

let total = 0;
function AgregarCarrito(precio){
    return total+=precio;
};

function CalcularImpuesto(total){
    return total*1.12;
};

total = AgregarCarrito(300);
total = AgregarCarrito(100);

let totalPagar = CalcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);


___________________________________________

///Metodos de propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cacion ${id}`);
    },
    pausar: function(){
        console.log("Pausando. . . . . ");
    }
};

reproductor.reproducir(30);
reproductor.pausar();


reproductor.borrar = function(id){
    console.log(`Borrando cancion ${id}`);
};








