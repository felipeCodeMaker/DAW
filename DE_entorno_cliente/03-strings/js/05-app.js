const product = 'Monitor 20 pulgadas';
const dni ='02222222H';


//Reemplazar replace
console.log(product.replace('pulgadas', '"'));

console.log(product.replace('Monitor', 'Monitor curvo'));

//slice partir
console.log(product.slice(0,10));   //Da los 10 primeros caracteres
console.log(product.slice(8));      //da del caracter 8 hasta el final

//alternativa a slice
console.log(product.substring(0,10));   //Da los 10 1ºs caracteres

const usuario = "Felipe";
console.log(usuario.charAt(0)); //Da el caracte especifico

//Un ejemplo más completo
let cualquierCadena = "Brave new world";

console.log("El caracter en el indice 0 es '" + cualquierCadena.charAt(0) + "'");
console.log("El caracter en el indice 1 es '" + cualquierCadena.charAt(1) + "'");
console.log("El caracter en el indice 2 es '" + cualquierCadena.charAt(2) + "'");
console.log("El caracter en el indice 3 es '" + cualquierCadena.charAt(3) + "'");
console.log("El caracter en el indice 999 es '" + cualquierCadena.charAt(999) + "'");


