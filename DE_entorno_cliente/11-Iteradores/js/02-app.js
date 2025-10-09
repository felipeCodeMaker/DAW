for(let i = 0; i<10; i++){
    if(i ===5) {
        console.log("Este es el 5");
        break;
    }
    console.log(`Número: ${i}`);
}

console.log("Coninua por aqui");

//El primer break rompe la secuencia del for, de modo que cuando llega a 5 se sale del for y
//  continua por la siguiente instruccion despues del for

for(let i = 0; i<10; i++){
    if(i ===5) {
        console.log("Este es el 5");
        continue;
    }
    console.log(`Número: ${i}`);
}
//Cuando i es igual a 5 se ejecuta continue, pero no se ejecutara el siguiente console.log y vuelve
//En este caso no se ejecuta console.log(`Número: ${i}`); en la vuelta del 5

const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
    
];


for(let i = 0; carrito.length; i++){
    if(carrito[i].descuento) {
        console.log(`EL articulo ${carrito.nombre} tien descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}










