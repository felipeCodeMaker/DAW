const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
    
const profesor = {
    nom: "Fernando",
    modulo: "DWES",
    horas: 9
}

console.log(producto.nombre)

//forma anterior a ecmascript 6
//const nombre = producto.nombre;
//console.log(nombre);

//Destructurina me crea una constante llamada nombre y le asigna el valor de  producto

const{nombre} = producto;   //le asigno a la variable nombre, el valor de la variable llamada igual que la constante del objeto producto ç
const{precio}= producto;
const {disponible, unidades} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(unidades);



