//Creando un Set
//Un set te permite crear una lista de valores sin duplicados.
//Pocos veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados,
//pero seria mas sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opcion que un arreglo o un objeto....

// Crea un nuevo Set vacío
let carrito = new Set();

// Agrega elementos al Set (los duplicados son ignorados)
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3'); // Este duplicado será ignorado

// Muestra el tamaño del Set (cantidad de elementos únicos)
console.log(carrito.size); // Output: 4 (no 5, porque 'Disco #3' se repite)

// Crea un Set a partir de un array existente
let numeros = new Set([1,2,3,4,5,6,7,8]);
console.log(numeros.size); // Output: 8

// Comprobando que un valor existe en el set.
console.log(carrito.has('Camisa') ); // Output: true

// Eliminando del set (devuelve true si existía y fue eliminado)
console.log( carrito.delete('Camisa') ); // Output: true
console.log( carrito.has('Camisa') ); // Output: false
console.log(carrito); // Muestra el Set sin 'Camisa'

// Limpiar todo el Set (elimina todos los elementos)
carrito.clear();
console.log(carrito) // Output: Set(0) {}

// Recorrer un Set con forEach
carrito.forEach(producto => {
    console.log(producto); // Itera sobre cada elemento
})

// ForEach con parámetros adicionales (indexedDB está mal escrito)
carrito.forEach((producto, indexedDB, pertenece) => {
    console.log(`${index} : ${producto}`); // ERROR: 'index' no definido
    console.log(pertenece === carrito); // Siempre true
})

// Convertir un Set a un arreglo usando spread operator
const arregloCliente = [...carrito];
console.log(arregloCliente) // Array con los elementos del Set