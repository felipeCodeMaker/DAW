    console.time("INICIO")    // Inicia un temporizador llamado "INICIO"
    console.warn("CUIDADO")     // Muestra mensaje de advertencia (amarillo)
    console.warn("CUIDADO")
    console.warn("CUIDADO")
    console.warn("CUIDADO")
    console.error("mensaje de error")   // Muestra mensaje de error (rojo)
    console.timeEnd("INICIO")        // Correcto - cierra el temporizador "INICIO"

    //inicializar variables
    var producto="monitor de 14 pulgadas";  // Declaración inicial

    //reasignar un valor
    producto='ordenador 32 gb'      // Reasignación
    console.log(producto);       // Muestra: "ordenador 32 gb"

    //cambiar de tipo de variable, tipado dinámico
    producto = 12;      // ¡Cambia de string a number!
    console.log(producto);

    //se pueden inicializar sin valor y asignarl después
    var disponible;          // Declarada sin valor → undefined  
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