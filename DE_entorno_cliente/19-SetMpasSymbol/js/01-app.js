//Creando un Set
//Un set te permite crear una lista de valores sin duplicados.
//Pocos veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados,
//pero seria mas sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opcion que un arreglo o un objeto....

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
console.log(carrito.size);


//En un array
let numeros = new Set([1,2,3,4,5,6,7,8]);
console.log(numeros.size);

//Comprobando que un valor existe en el set.

console.log(carrito.has('Camisa') );

//Eliminando del set
console.log( carrito.delete('Camisa') );
console.log( carrito.has('Camisa') );
console.log(carrito);


//Limpiar de un set
carrito.clear();
console.log(carrito)

//Foreach a un set
carrito.forEach(producto => {
    console.log(producto);
})

//Foreacha a un set
carrito.forEach((producto, indexedDB, pertenece) => {
    console.log(`${index} : ${producto}`);
    console.log(pertenece === carrito); //nombre de la variable
})

//Convertir un set a un arreglo...
const arregloCliente = [...carrito];
console.log(arregloCliente)

