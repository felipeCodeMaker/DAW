//weak se

// Crea un nuevo WeakSet
var ws  = new WeakSet();

// Objeto cliente 1
const cliente = {
    nombre: 'Juan',
    saldo : 3000
};

// Objeto cliente 2
const cliente2 = {
    nombre: 'Paul',
    saldo : 3000
};

// Variable string (no objeto)
const nombre = 'Pedro';

// ws.add(nombre) solo se pueden agregar objetos (comentario correcto)
ws.add(cliente); // Agrega el objeto cliente al WeakSet
ws.add(cliente2); // Agrega el objeto cliente2 al WeakSet

// Verificar si existen los objetos en el WeakSet
console.log( ws.has(cliente)); // Output: true
console.log( ws.has(cliente2)); // Output: true
//console.log( ws.has(nombre)); // Error: no se puede usar con primitivos

// Eliminar objetos del WeakSet
console.log( ws.delete(cliente)); // Output: true (eliminado exitosamente)
console.log( ws.has(cliente) ); // Output: false (ya no existe)

// Comentario sobre limitaciones de WeakSet:
//No tienen la propiedad size aunque si tienen length
//Tampoco son iterables ni tienen keys, values entries etc.