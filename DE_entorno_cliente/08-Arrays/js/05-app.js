const producto = {
    nombre : "algo",
    precio : 2
};


//Destructuring
const {nombre} = producto;
console.log(nombre);

//destructuring con arrays

const numeros = [10, 20, 30, 40, 50];

const [primero] = numeros;

console.log(primero);
const [primer, segun, tercer ] = numeros;       //Le da nombres a las posiciones del array, primer = 10, segun = 20, tercer = 30
console.log(segun);
const [, , , cuarto] = numeros;
console.log(segundo, cuar);

const [pri, seg, ...ter] = numeros;     //ter = [30, 40, 50]
console.log(ter);

