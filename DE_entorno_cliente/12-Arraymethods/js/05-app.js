const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Teclado', precio: 700 },
]
//Hacer una busqueda con un forEach
//Con el forEach  devuelve el ultimo que cumpla las condiciones
let imprimir = "";
carrito.forEach((producto, indice)=>{
    if(producto.nombre === "Tablet"){
        imprimir = carrito[indice];
    }
})
console.log(imprimir)


//Hacer la misma busqueda con un .find
//Con el find obtenemos el mismoresultado que en el anterior, pero solo devuelve el primer elemento que cumple la condicion
const resultado = carrito.find(producto=>producto.nombre === 'Teclado');
console.log(resultado)