const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Esto no modifica el array original
let meses = [...mes, "Agosto"];
meses = ["Septiembre", ...mes];
console.log(meses);

//Esto si lo modifica
mes.push("Septiembre");
console.log(mes);

let producto = {
    nombre:"Disco duro", precio:300
};

const carrito2 = [...carrito, producto];
console.log(carrito2);


