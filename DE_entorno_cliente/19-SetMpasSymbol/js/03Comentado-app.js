//MAPS
//listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, 
//a diferencia de un objeto puede tener la llave de cualquier tipo

//y en cuanto a performance los maps tiene mejor performance que los objetos, 
// son especialmente diseñados para agregar o quitar elementos así como recorrer,
//también cuando son muy grandes tienen mejor performance que un objeto

//performance = rendimiento

// Crea un nuevo Map vacío
let cliente = new Map();

// Agregar elementos al Map (clave, valor)
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente); // Muestra el Map completo

//acceder a los valores usando get()
console.log(cliente.get('nombre')); // Output: 'Karen'
console.log(cliente.get('tipo')); // Output: 'Premium'
console.log(cliente.get('saldo')); // Output: 3000

//Metodos del MAP
//Tamaño del MAP
console.log(cliente.size); // Output: 3

//contiene un valor (verifica si existe la clave)
console.log(cliente.has('tipo')); // Output: true
console.log(cliente.get('tipo')); // Output: 'Premium'

//Borrar elemento por clave
cliente.delete('nombre');
console.log(cliente.has('nombre')); // Output: false
console.log(cliente.get('nombre')); // Output: undefined
console.log(cliente.has('tipo')); // Output: true
console.log(cliente.size); // Output: 2

//Borrar todo el Map
cliente.clear();
console.log(cliente); // Output: Map(0) {}

//Inicializar Map con valores desde un array
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

// Sobrescribir valor existente
paciente.set('nombre', 'Antonio');

console.log(paciente); // Muestra el Map actualizado

//Recorrer Map con forEach
cliente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});