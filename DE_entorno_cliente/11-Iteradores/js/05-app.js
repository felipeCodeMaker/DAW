
const pendientes = ["estudiar", "limpiaar", "trabajo", "hacer la cama"];


const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
    
];


for(let pendiente of pendientes){   //for itera en arrys simples
    console.log(pendiente);
}


for(let producto of carrito){
    console.log(producto.nombre);   //No itera sobre arrays complejos (que tengan objetos o arrays)
}




