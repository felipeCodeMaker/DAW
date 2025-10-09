const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
    
];

for(let i = 0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
    console.log(`${carrito[i].nombre} - Precio : ${carrito[i].precio}`);
}
let total = 0;
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
    total = total + producto.precio;
    
});
console.log(total)
//producto recoge de uno en uno los registros del carrito por cada vuelta del bucle


carrito.forEach(function(producto){

})

carrito.map(function(producto){

}); //Devuelve un array

const array = carrito.forEach(function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;

});//no crea un nuevo aaray

const array2 = carrito.map(function(producto){
    return `${producto.nombre} - Precio ${producto.precio}`;

});//crea un nuevo array donde mete el resultado

console.log(array)

console.log(array2)



