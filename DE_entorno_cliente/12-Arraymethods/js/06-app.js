const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Todos los elementos de un array deben cumplir la condicion para que devuelva true

//.every necesita que todos los valores cumplan la funcion para retornar un TRUE
const every = carrito.every(every=> every.precio < 1000)
console.log(every)//true
//En casi de que necesitemos que ALGUNO nomas cumpla se usa un .some
const some = carrito.some(some=>some.precio <500)
console.log(some)