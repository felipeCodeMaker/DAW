
//Eliminar los espacios en blanco al inicio y final de una cadena
//Los espacios en blanco forman parte de la longitud de la cadena
const producto = '      Monitor 20 pulgadas         ';
console.log(producto.length);

//Eliminar al inicio
console.log(producto.trimStart());  //Eliminda los espacios del principio
console.log(producto.trimEnd());    //Eliminda los espacios del final

//Una dorma de haer las dos instrucciones en una sola linea
console.log(producto.trimStart().trimEnd());

//Una version antigua
console.log(producto.trim());






