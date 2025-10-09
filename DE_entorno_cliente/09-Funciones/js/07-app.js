const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
    
];

const array = carrito.forEach((producto) => {
    return `${producto.nombre} -Precio: ${producto.precio}`;
}); //no crea la variable por lo que array estará vacio

const array2 = carrito.map((producto) => {
    return `${producto.nombre} -Precio: ${producto.precio}`;
});     //Map crea un nuevo array donse mete el resultado

console.log(array);
console.log("");
console.log( array2);
console.log("");
//Podemos quitar los parentesis por que sollo hay un parametro

const array3 = carrito.map(producto => {
    return `${producto.nombre} -Precio: ${producto.precio}`;
});
console.log(array3);
console.log("");

const array4 = carrito.map((producto) => {console.log( `${producto.nombre} -Precio: ${producto.precio}`);
});
console.log(array4);

