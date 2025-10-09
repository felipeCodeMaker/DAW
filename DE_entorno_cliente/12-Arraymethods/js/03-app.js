const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//La sumatoria de los valores seria algo similar a:

let total = 0;
carrito.forEach((producto)=>{return total += producto.precio});
console.log(total);


let resul = carrito.reduce((total, producto)=>total + producto.precio, 0); //El cero es el valor con el cual inicia.
console.log(resul);

let resul2 = carrito.reduce((total, producto)=>total + producto.precio, 200); //El 200 es el valor con el cual inicia el total.
console.log(resul2);