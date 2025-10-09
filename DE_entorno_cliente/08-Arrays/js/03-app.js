const mes = ["Enero", "febrero", "marzo", "abril", "mayo", "junio"];


//agregar al final del arreglo, estructura de cola

mes.push("Julio");
mes.unshift("EnJul");
console.log(mes);
const pila1 = mes.pop();
const cola2 = mes.shift();
console.log(pila1);
console.log(cola2);

console.table(mes);


const carrito =  [];
const producto = {
    nombre : "algo",
    precio : 2
}

//carrito.push(producto);
producto.nombre = "aceite";
producto.precio = 4;
carrito.push(producto);     //al modificar producto tambien los del contenido en el indice anterior
                            //push actua de puntero, no estamos guardando los datos de producto, 
                            // estamos guardando la direccion de producto. Si modifico producto modifico carrito
console.table(carrito);
const producto1 = {
    nombre: "lentejas 300gr",
    precio: 2
};

carrito.push(producto1);
console.table("carrito:", carrito);

const producto2 = {
    nombre: "lata atun",
    precio: 1
};

console.table(carrito);

let resul;

resul = [...carrito, producto];     //utilizando el spread operator, programacion funcional

resul = [...resul, producto1];      //lo coloca al final del array

resul = [producto2, ...resul];      //Se coloca al principio del array

console.table(resul);





