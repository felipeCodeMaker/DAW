const meses = ["Enero", "febrero", "marzo"];

const carrito = [
    {nombre: "Monitor", precio:500},
    {nombre: "tv", precio:100},
    {nombre: "movil", precio:200},
    {nombre: "tablet", precio:300},
    {nombre: "cascos", precio:100},
    {nombre: "teclado", precio:700},
];


//comprobar si un valor existe en un array

meses.forEach((mes)=>{return console.log(mes)})
meses.forEach(mes=>console.log(mes))//El codigo al ser de una linea puede quedar asi
meses.forEach(mes=>{
    if(mes === "Junio"){
        console.log(`Si existe ${mes}`)
    }
})
//Otra forma con el metodo .includes (devuelve boolean)
//Includes solo funcione en un array simpl, no funciona en array de objetos
//Devuelve verdadero o false
const comprobar = meses.includes("Febrero")
console.log(comprobar)

const comprobar2 = meses.includes("Diciembre")
console.log(comprobar2)


//Para consultar datos en un array de objetos (boolean)
const existe = carrito.some(producto=>{return producto.nombre === "Tablet"})
console.log(`Existe: ${existe}`)


const existe2 = carrito.some(producto=>producto.precio === 300) // El return esta implicito)
console.log(existe2)

