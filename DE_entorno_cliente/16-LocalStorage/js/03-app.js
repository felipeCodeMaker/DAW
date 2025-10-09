//Eliminar de localStorage

localStorage.removeItem('nombre');

//Actualizar un registro

let mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray = [...mesesArray, 'Abril'];
console.log(mesesArray);

//La actualizacion de meses
localStorage.setItem('meses', JSON.stringify(mesesArray));

//Para limpiar el localStorage
localStorage.clear();