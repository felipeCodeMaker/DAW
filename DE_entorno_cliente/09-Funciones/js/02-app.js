//Por regla general no es posible llamar una funcion hasta que no ha sido definida

Sumar();    //Devuelve 4
function Sumar(){
    console.log(2+2);
};



sumar2();   //No devuelve nada
const sumar2 = function(){
    console.log(3+3);
};

//js mira primero todas las declaraciones y luego las usa


____________________________________________________
//Diferencia entre funcion y metodo

const num = 20;
const num2 = "20";

console.log(parseInt(num2)); //Esto seria una funcion
console.log(num.toString()); //Esto es un metodo


//Parametro --> function algo(parametro){}

//Argumento --> Hola(argumento) --> El argumento suele ser usado como dato usado por un parametro