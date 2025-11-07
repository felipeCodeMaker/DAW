// // Un generador es una funcion que retorna un iterador

// function *crearGenerador (){ //El asterisco en el nombre de la funcion significa que es un generador
// yield 1;
// yield 'Juan'
// yield 3+3
// yield true

// }

// const iterador =  crearGenerador()

// console.log(iterador)
// console.log(iterador.next())//Va iterando uno a uno
// console.log(iterador.next().value)
// console.log(iterador.next().value)
// console.log(iterador.next())//Este ultimo le da el done: true y cierra en la proxima vuelta
// console.log(iterador.next())

// Array de productos
const carrito = ['producto1','producto2','producto3 ']

// Generador para iterar sobre el carrito
function *generadorCarrito (carrito){
    for(let i =0; i < carrito.length;i++){
        yield carrito[i]; // Pausa la ejecución y devuelve el valor
    }
}

// Crear instancia del generador
const carritox = generadorCarrito(carrito)

console.log(carritox) // Muestra el objeto generador
console.log(carritox.next()) // {value: "producto1", done: false}
console.log(carritox.next()) // {value: "producto2", done: false}
console.log(carritox.next()) // {value: "producto3 ", done: false}
console.log(carritox.next()) // {value: undefined, done: true}