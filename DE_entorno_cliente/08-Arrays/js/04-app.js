const producto2 = {
    nombre: "lata atun",
    precio: 1
};

const producto1 = {
    nombre: "lentejas 300gr",
    precio: 4
};

const producto = {
    nombre : "algo",
    precio : 2
};

const producto3 = {
    nombre : "ensalada",
    precio : 3
};

const carrito = [];



carrito.push(producto);     //Encolar posicion 0
carrito.push(producto1);    //Encolar posicion 1

console.table(carrito);

carrito.push(producto2);    //Encolar posicion 2

console.table(carrito);

carrito.shift();        //Desencola

console.table(carrito);

carrito.shift();

console.table(carrito);

carrito.shift();

console.table(carrito);


console.log("PILA");



carrito.unshift(producto);      //apila

console.table(carrito);

carrito.unshift(producto1);

console.table(carrito);

carrito.unshift(producto2);
carrito.unshift(producto3);

console.table(carrito);


carrito.pop();      //desapila
console.table(carrito);

//carrito.push(producto);
//carrito.push(producto1);
//carrito.push(producto3);

//console.table(carrito);

//carrito.splice(0,1);      //Elimina a partir de la posicion 0, un elemento
//carrito.splice(carrito.length-1,1);       //Elimina a partir de la posicion final, un elemento

//console.table(carrito);



