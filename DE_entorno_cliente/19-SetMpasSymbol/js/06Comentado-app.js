// Array de ejemplo
const carrito = ['producto 1' , 'producto 2' , 'producto 3']

// Función que crea un iterador personalizado
function creariterador(carrito){
    let i = 0 // Contador interno
    
    return{ // Retorna un objeto con método siguiente
        siguiente:()=>{
            const fin = (i >= carrito.length) // Verifica si llegó al final
            const valor = fin? carrito[i++]: undefined; // Obtiene valor o undefined
            return{
                fin,    // Indica si terminó la iteración
                valor   // Valor actual
            }
        }
    }
}

// Crear el iterador
const iter = creariterador(carrito)

// Usar el iterador
console.log(iter.siguiente()) // {fin: false, valor: "producto 1"}
console.log(iter.siguiente()) // {fin: false, valor: "producto 2"}
console.log(iter.siguiente()) // {fin: false, valor: "producto 3"}
console.log(iter.siguiente()) // {fin: true, valor: undefined}