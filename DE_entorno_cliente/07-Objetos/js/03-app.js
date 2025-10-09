const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    unidades: 4, 
    informacion:{
        garantia:'1 año',
        seguro: 60,
        medidas:{
            peso:'6kg',
            alto:'30cm'
        },
        fabricacion:{
            pais:'China',
            año:'2022'
        }
    }
}


//1 const { nombre, informacion:{fabricacion}} = producto;  //No se crea la variable informacion

//2 const  {nombre, informacion, informacion:{fabricacion}} = producto  //Se crea la variable informacion

//3 cosnt {nombre, informacion,:{fabricacion:{pais}}}=producto  //No se cre la variable fabricacion

const {nombre, informacion, informacion:{fabricacion, fabricacion:{pais}}} = producto;
console.log(fabricacion)
console.log(pais)


console.log(producto.informacion.seguro);