    console.time("INICIO")
    console.warn("CUIDADO")
    console.warn("CUIDADO")
    console.warn("CUIDADO")
    console.warn("CUIDADO")
    console.error("mensaje de error")
    console.timeEnd("INCIO")

    //inicializar variables
    var producto="monitor de 14 pulgadas";

    //reasignar un valor
    producto='ordenador 32 gb'
    console.log(producto);

    //cambiar de tipo de variable, tipado dinámico
    producto = 12;
    console.log(producto);

    //se pueden inicializar sin valor y asignarl después
    var disponible;
    console.log(disponible);
    disponible=true;
    console.log(disponible);

    //inicialización de varias variables a la vez
    var ordenador ="pc",
        pantalla = "14",
        teclado = "numérico";

    //las variables no se pueden inicializar con números
    //01_VAR ="TELESCPIO"

    //CAMELCASE
    var nombreProductoNuevo;
    //SNAKECASE
    var nombre_producto_nuevo;