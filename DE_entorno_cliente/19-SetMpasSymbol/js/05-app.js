// Symbols
// te permiten crear una propiedad unica

//Symbol es creado y se agrega a una propiedad del objeto.
//new Symbol enviaria un error.



const sym = Symbol('symbol')
const sym2 = Symbol('symbol')

//Los symbolos  siempre son diferentes


if(sym === sym2){
    console.log('Son iguales')

}else{
    console.log('Son diferentes') //A pesar de que son iguales son unicos y va a dar éste resultado
}

//Llaves de objetos unicas

const nombre = Symbol();
const apellido = Symbol();

//Crear un objeto vacio

const persona = {}//Esto no va a servir

//debe tener corchetes
persona[nombre]= "Ema";
persona[apellido] = "Tulian" //De esta forma se modifican los valores
persona.tipoCliente= 'Premium' //De esta manera se le agregan valores  los objetos
persona.saldo = 3000;

console.log(persona)
console.log(persona[nombre]) //Para acceder al valor del symbol

//Los symbol NO SON ITERABLES, no se pueden acceder con un for
for(let i in persona){//Esto nos va a devolver los valores que no sean symbol
    console.log(i)
    console.log(`${i} : ${persona[i]}`);
}
// Definir descripcion del symbol

//Tambien se puede crear UNA DESCRIPCION DEL SYMBOL
/*
const nombreCliente = Symbol('Nombre del cliente')
const cliente = {}
cliente[nombreCliente] = 'pedro'
console.log(cliente)
console.log(cliente[nombreCliente])

probar:
console.log(cliente)

console.log(cliente[nombreCliente] )
console.log(cliente)
*/

const nombreCliente = Symbol('Nombre del cliente')
const cliente = {}
cliente[nombreCliente] = 'pedro'
console.log(cliente)
console.log(cliente[nombreCliente])//Para acceder directamente al valor seria asi