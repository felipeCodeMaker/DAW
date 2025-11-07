// Almacena un valor en el localStorage del navegador
// localStorage persiste los datos incluso después de cerrar el navegador
// Parámetros: clave ('nombre'), valor ('Pedro')
localStorage.setItem('nombre', 'Pedro');    // Comentario: Los valores son clave-valor

// Comentario explicativo: localStorage solo puede almacenar strings
// Comentario sobre limitación: El problema principal son los objetos y arrays
//De esta forma añadimos un valor, solo almacena String
//el problema son los objetos y los arrays

// Almacena un valor en el sessionStorage del navegador
// sessionStorage solo persiste los datos durante la sesión actual del navegador
// Los datos se eliminan al cerrar la pestaña/ventana
// Parámetros: clave ('nombre'), valor ('Dolores')
sessionStorage.setItem('nombre', 'Dolores');

// Crea un objeto JavaScript con propiedades nombre y precio
// Este es un objeto regular de JavaScript que no se puede almacenar directamente
const producto = {
    nombre: 'Monitor',  // Propiedad string
    precio: 300         // Propiedad numérica
};  // Comentario: ¿Cómo almacenar este objeto en localStorage?
    // Respuesta: Hay que convertirlo a formato JSON

// Convierte el objeto JavaScript a una cadena JSON
// JSON.stringify() toma un objeto/array y lo convierte a string
// Resultado: '{"nombre":"Monitor","precio":300}'
const productoString = JSON.stringify(producto);

// Almacena el string JSON en localStorage bajo la clave 'producto'
// Ahora el objeto está correctamente almacenado como string
localStorage.setItem('producto', productoString);

// Crea un array de strings con nombres de meses
const meses = ['Enero', 'Febrero', 'Marzo'];

// Convierte el array JavaScript a una cadena JSON
// JSON.stringify() funciona igual con arrays que con objetos
// Resultado: '["Enero","Febrero","Marzo"]'
const mesesString = JSON.stringify(meses);

// Almacena el array convertido a string en localStorage bajo la clave 'meses'
localStorage.setItem('meses', mesesString);