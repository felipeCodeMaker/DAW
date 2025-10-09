const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;

let estudiante = {
    nombre:"Pablo",
    apellidos:"Nogales",
    edad:28,
    estado :"soltero"
    
}

console.log(estudiante.apellidos);

//En el objeto podemos tener un posible conflicto, por ejempl

delete producto.precio;     //borra precio del objeto

//Esto hay que prevenirlo





