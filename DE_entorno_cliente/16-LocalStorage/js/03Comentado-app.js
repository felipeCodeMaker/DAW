// Comentario general: Operaciones para eliminar y actualizar en localStorage
//Eliminar de localStorage

// Elimina un item específico del localStorage usando su clave
// removeItem() borra solo el item con la clave 'nombre', los demás permanecen
// Si 'nombre' no existe, no hace nada (no genera error)
localStorage.removeItem('nombre');

// Comentario: Procedimiento para actualizar un registro existente
//Actualizar un registro

// Recupera el array de meses almacenado como JSON string y lo convierte a array JavaScript
// localStorage.getItem('meses') devuelve: '["Enero","Febrero","Marzo"]' (string)
// JSON.parse() convierte ese string a array real: ['Enero','Febrero','Marzo']
let mesesArray = JSON.parse(localStorage.getItem('meses'));

// Actualiza el array agregando un nuevo mes 'Abril' usando spread operator
// [...mesesArray] crea una copia del array original
// 'Abril' se agrega al final del nuevo array
// Resultado: ['Enero','Febrero','Marzo','Abril']
mesesArray = [...mesesArray, 'Abril'];

// Muestra en consola el array actualizado
// Output: ['Enero', 'Febrero', 'Marzo', 'Abril']
console.log(mesesArray);

// Comentario: Guardar la actualización del array de meses
//La actualizacion de meses

// Convierte el array actualizado a JSON string y lo guarda en localStorage
// JSON.stringify(mesesArray) convierte: ['Enero','Febrero','Marzo','Abril'] → '["Enero","Febrero","Marzo","Abril"]'
// localStorage.setItem() reemplaza el valor anterior con el nuevo
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Comentario: Limpiar completamente el localStorage
//Para limpiar el localStorage

// Elimina TODOS los items almacenados en localStorage para este dominio
// clear() borra todo: 'producto', 'meses', y cualquier otro item que exista
// localStorage queda completamente vacío después de esta operación
localStorage.clear();