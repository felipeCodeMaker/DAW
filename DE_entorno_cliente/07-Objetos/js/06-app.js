//Unir objetos

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

const resul = Object.assign(producto.medidas);
console.log(resul);

//spread operador o Rest operator
//Se utiliza mucho en los framewoks de java script

const resul2 = {...producto, ...medidas};
console.log(resul2);






