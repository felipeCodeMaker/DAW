const product1 = "Monitor de 20 pulgadas";
const product2 = String('Monitor 24 pulgadas');
const product3 = new String('Teclado');

console.log(product1);
console.log(product2);
console.log(product3);

const product4 = String('Monitor 24"'); //No da error
//product2 = String('Monitor \20"');
const product5 = "Monitor 20\""  // Con la barra \ podemos distinguir " como texto o como declaracion de string

console.log(product4)
console.log(product5)