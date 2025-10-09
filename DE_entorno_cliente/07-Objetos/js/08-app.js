//objecto literas

const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto ("Tablet", 200);

const producto3 = new Producto("Portatil", 400)



/////////////////////////////////////////////////////////

console.log(Object.keys(producto)); //Devuelve un array con las propiedades del objeto
console.log(Object.values(producto));//Devuelve un array con los valores
console.log(Object.entries(producto));//Devuelve todo, muestra las llaves y los valores del objeto en un array de arrays