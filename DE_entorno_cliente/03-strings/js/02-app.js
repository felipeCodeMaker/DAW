const producto = 'Monitor 20 pulgadas';

//proppiedades de los strings

//longitud de una cadena
console.log(producto.length);

console.log(producto.indexOf('Monitor'));   //Devuelve 0, posicion comienzo
let variable = producto.lastIndexOf('Monitor');

console.log(producto.indexOf('pulgadas'));//Devuelve 11, posicion en la que comienza la palabra

console.log(producto.indexOf('Tablet'));//Devuelve -1 significa que no la ha encontrado

//si la cadena tiene varias palabras iguales, hará referencia a la orimera encontrada


//para encontrar la última ocurrencia

"Ballena Azul, Ballena, Asesina".lastIndexOf("Ballena");


//Include es case sensitive

console.log(producto.includes('Tablet')); //Devuelve false si no existe en producto la palabra "Tablet"


const hello = "Hola, mundo";
const helloLength = hello.length;
hello[0] = "L"; //no tiene ningún efecto poque las cadenas son inmutables

hello[1];   //Esto devuelve H

var mivar = "Esto es otra variable";
mivar[3] ="H"

console.log(mivar); //EL resultado es --> "Esto es otra variable"







