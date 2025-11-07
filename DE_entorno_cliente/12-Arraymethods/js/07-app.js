const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['agosto','Septiembre', 'Octubre']
const meses3 = ['Noviembre', 'Diciembre']

//concatenar arrays
const resultado = meses.concat(meses2,meses3)
console.log(resultado)

//spread operador

//spread operator en array de indices
// El orden importa, si se le agrega string no hay que anteponer los puntos suspensivos ya que te genera un valor por cada letra
const resul = ['Diciembre', ...meses];
console.log(resul);

let resul1 = [meses, ...meses2];
console.log(resul1);

let resul2 = [meses, ...meses2, ...meses3];
console.log(resul2);

resul1 = [...meses, ...meses2, ...meses3, "Cardulio"];
console.log(resul1);
resul2 = [...meses, ...meses2, ...meses3, ..."Cardulio"];
console.log(resul1);











