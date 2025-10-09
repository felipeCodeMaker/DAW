const num1 = "20";
const num2 ="20.2";
const num3 = "uno";
const num4 =20;

console.log(typeof num1);
console.log(Number.parseInt(num1));
console.log(Number.parseInt(num2));//lo convierte a entero
console.log(Number.parseFloat(num1));//lo convierte a float
console.log(Number.parseInt(num3));//Devuelve NaN,  no es numero

//revisar si un numero es entero o no

console.log(Number.isInteger(num4));    //true
console.log(Number.isInteger(num3));    //false

console.log(Number.parseFloat(num2).toFixed(2));





