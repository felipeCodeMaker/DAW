// Iteradores  "Nuevos" EC7-8

// Diferentes estructuras de datos
const ciudades = ['londres','New york','Paris'] //Llave, valor
const ordenes = new Set([132,123 , 564, 'pepe']) //Ingresa unicamente valores
const datos = new Map()
datos.set('Nombre', 'Emma')
datos.set('Profesion', 'gilaso')

// -----------------------Valores por default-----------------------------------------------------
// Iterador por defecto para arrays
for (let ciudad of ciudades){
    console.log(ciudad)// Este iterador devuelve los valores de el array
}

// Iterador por defecto para Sets
for (let orden of ordenes){
    console.log(orden)//Este tambien devuelve los valores
}

// Iterador por defecto para Maps
for(let dato of datos){
    console.log(dato)//Este devuelve llave y valor del mismo
}

// -----------------------Entries iterator-----------------------------------------------------
// Éste nos va a agregar llave en caso de que no exista y nos va a retornar llave y valor

// entries() para arrays devuelve [índice, valor]
for(let entry of ciudades.entries()){
    // console.log(entry)
    //Expected output:
    // (2) [0, 'londres']
    // (2) [1, 'New york']
    // (2) [2, 'Paris']
}

// entries() para Sets devuelve [valor, valor] (clave y valor iguales)
for(let entry of ordenes.entries()){
    // console.log(entry)
    // Expected output
    // (2) [132, 132]
    // (2) [123, 123]
    // (2) [564, 564]
    // (2) [987, 987]
}

// entries() para Maps devuelve [clave, valor]
for (let entry of datos.entries()){
    // console.log(entry)
    // Expec. output:
    // (2) ['Nombre', 'Emma']
    // (2) ['Profesion', 'gilaso']
}

// -----------------------Values iterator-----------------------------------------------------
// Imprime unicamente los valores

// values() para arrays devuelve solo los valores
for(let value of ciudades.values()){
    // console.log(value)
    //E.Output
    // londres
    // New york
    // paris
}

// values() para Sets devuelve los valores
for (let value of ordenes.values()){
    // console.log(value)
    // 132
    // 123
    // 564
    // pepe
}

// values() para Maps devuelve solo los valores
for(let value of datos.values()){
    // console.log(value)
    // Valor de salida
    // Emma
    // gilaso
}

// -----------------------Keys iterator-----------------------------------------------------
// Esta de mas decir que devuelve el valor de las llaves

// keys() para arrays devuelve los índices
for(let key of ciudades.keys()){
    // console.log(key) // Este devuelve las posiciones o llaves de los valores 
}

// keys() para Sets devuelve los valores (como claves)
for(let key of ordenes.keys()){
    // console.log(key)//Este devuelve los mismos valores como llaves
}

// keys() para Maps devuelve las claves
for(let key of datos.keys()){
    // console.log(key)
}