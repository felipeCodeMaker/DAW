const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarinfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};


const producto2 = {
    nombre: "Tablet",
    precio: 250,
    disponible: true,
    mostrarinfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

producto.mostrarinfo;
producto2.mostrarinfo;