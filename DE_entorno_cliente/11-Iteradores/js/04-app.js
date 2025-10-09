const pendientes = ["limpiar la cocina", "3Estudiar", "HTML", "hacer cama", "ducharse"];

pendientes.forEach((pendi) => {
    console.log(pendi);
})

//como solo tiene una linea se puede poner:
pendientes.forEach((pendiente) => console.log(pendiente))

pendientes.forEach(pendiente => console.log(pendiente))

//El foreach va a devolver en indice, el valor del indice del array
pendientes.forEach((pendiente, indice) => console.log(`${indice}: ${pendiente}`));

const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
    
];

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto => console.log(producto.nombre));

const array = carrito.forEach(producto => producto.nombre);
const array2 = carrito.map(producto => producto.nombre);
console.log(array);
console.log(array2);
