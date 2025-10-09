"use strict";       //esto te obliga a que cumplas ciertas reglas por ejemplo ni deja x = 20 sin declarar


const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


//como podemos hacer para un objeto, realmente se como una constante

Object.freexe(producto);
console.log(Object.isFrozen(producto)); //devuelve true si el objeto esta completo
producto.imagen = "jpg";        //esto ya no deja hacerlo
delete producto.precio;         //no deja
producto.precio = 100;          //no deja


///////////////////////////////////////////
//Con el metodo seal no se puede agregar ni eliminar propiedades solo se puede modificar el contenido de las propiedades

Object.seal(producto);
producto.disponible = false;      
delete producto.precio;        
console.log(Object.isSealed(producto)); 
