// Recupera el valor almacenado en localStorage bajo la clave 'nombre'
// getItem() devuelve el valor como string o null si no existe
// En este caso, recupera 'Pedro' (almacenado previamente)
const nombre = localStorage.getItem('nombre');

// Muestra en consola el valor recuperado: 'Pedro'
// typeof nombre sería 'string'
console.log(nombre);

// Recupera el valor almacenado en localStorage bajo la clave 'producto'
// Este valor fue almacenado como string JSON: '{"nombre":"Monitor","precio":300}'
// productoJSON contendrá ese string, no un objeto JavaScript
const productoJSON = localStorage.getItem('producto');  // Comentario: Esto devuelve un String

// Convierte el string JSON a un objeto JavaScript usando JSON.parse()
// JSON.parse() toma un string con formato JSON válido y lo convierte a objeto
// Muestra en consola el objeto resultante: {nombre: "Monitor", precio: 300}
// Comentario: La conversión solo funciona si el string tiene formato JSON válido
console.log(JSON.parse(productoJSON));

// Recupera el valor almacenado en localStorage bajo la clave 'meses'
// Este valor fue almacenado como string JSON: '["Enero","Febrero","Marzo"]'
// meses contendrá ese string, no un array JavaScript
const meses = localStorage.getItem('meses');

// Convierte el string JSON a array JavaScript y lo muestra en consola
// Resultado: ['Enero', 'Febrero', 'Marzo']
// JSON.parse() también funciona con arrays en formato JSON
console.log(JSON.parse(meses));

// Convierte el string JSON a array JavaScript y lo almacena en una variable
// mesesArray será un array JavaScript real, no un string
const mesesArray = JSON.parse(meses);

// Muestra en consola el array JavaScript: ['Enero', 'Febrero', 'Marzo']
// Ahora podemos usar métodos de array como mesesArray.length, mesesArray[0], etc.
console.log(mesesArray);
