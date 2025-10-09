const autenticado = true;
const puedePagar = true;
console.log(autenticado?'Si esta autenticado': 'No esta autenticado');  //si es verdadero haara la primera, sino la segunda
console.log(autenticado && puedePagar? 'Paga':'No puede pagar');    
console.log(autenticado ? puedePagar ? 'Si puede pagar' : 'No puede pagar' : 'If anidado'); 
//Si las dos son verdaderas se cumple la primera, si una es verdadera la segundo, si no lo es ninguna la ultima

