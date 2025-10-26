//MAPS
//listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, 
//a diferencia de un objeto puede tener la llave de cualquier tipo

//y en cuanto a performance los maps tiene mejor erformance que los objetos, 
// son especialmente diseñados para agregar o quitr elementos así como recorrer,
//también cuando son muy grandes tienen mejor performance que un objeto

//performance = rendimiento

let cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

//acceder a los valores
console.log(cliente.get('nombre'));
console.log(cliente.get('tipo'));
console.log(cliente.get('saldo'));

//Metodos del MAP
//Tamaño del MAP
console.log(cliente.size);

//contiene un valor
console.log(cliente.has('tipo'));
console.log(cliente.get('tipo'));

//Borrar
cliente.delete('nombre');
console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.has('tipo'));
console.log(cliente.size);

//Borrar del map
cliente.clear();
console.log(cliente);

//ambien se puede inicializar en un map con diferentes valores...
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('nombre', 'Antonio');

console.log(paciente);

//Foreach a un map

cliente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
});



