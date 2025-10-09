const producto = 'Monitor 20 pulgadas';
const precio = '70 euuros';


//unir dos cadenas
console.log(producto.concat(precio));   //no la cambia sigue el mismo valor

console.log(producto.concat('20% descuento'));

console.log(producto + " con un precio de " + precio);
console.log(producto, " con un precio de ", precio);

//lo que hemos visto hasta ahora es la versión antigua de concadenar

//Litterals

console.log(`El producto ${producto} tiene un precio de ${precio}`);


const cesta = "cesta de la compra";
const precio_c = "precios un 10%";

const cest = (`Hoy en dia el precio de la ${cesta} ha subido los ${precio_c}`);
console.log(cest);