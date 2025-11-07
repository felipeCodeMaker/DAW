//Wekmap

// Crear objetos para usar como claves
let key = {userId:1};
let key2 = {userId:2};

// Crear WeakMap vacío
let weakmap = new WeakMap();

// Agregar elementos al WeakMap (solo objetos como claves)
weakmap.set(key, "Alex");

// Verificar si existe una clave
weakmap.has(key);//true

// Obtener valor por clave
weakmap.get(key);//Alex

// Eliminar elemento
weakmap.delete(key);//true

// Verificar que fue eliminado
weakmap.get(key);//undefined

// Agregar otro elemento
weakmap.set(key2, "Vivky");

// weakmap.size; // ERROR: WeakMap no tiene propiedad size

// Liberar la referencia al objeto clave
key2 = undefined;
weakmap.get(key2); //undefined (el garbage collector puede eliminar esta entrada)