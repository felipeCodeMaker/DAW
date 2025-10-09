////////////////////////////////////////////////

const mes = ["Enero", "febrero", "marzo", "abril"];
console.table(mes);

console.log(mes.length);

for(let i = 0; i<mes.length; i++){
    console.log(mes[i]);
}


mes[0] = "Enesto";  //Nuevo mes

mes[7] = "Agosto";  //He creado un nuevo elemento en el array

mes[10] = "Septiembre"; //No crea las posiciones que hay entre medias, es motivo de muchos errores