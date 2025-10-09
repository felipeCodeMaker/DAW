//object literal
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
    
console.log(producto);
console.log(producto.nombre)
console.log(producto['nombre']);

//vamos a agregar una nueva propiedad sin acceder a la declaracion del objeto
producto.imagen="imagen.jpg";

//borrar una propiedad de un objeto
delete producto.disponible;
console.log(producto);


