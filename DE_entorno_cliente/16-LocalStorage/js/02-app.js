const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');  //Esto devuelve un String

//Convertit un string a un objeto, SIEMPRE QUE TENGA LA FORMA ADECUADA
console.log(JSON.parse(productoJSON));


const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));
const mesesArray = JSON.parse(meses);
console.log(mesesArray);

