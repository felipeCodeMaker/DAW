//repeater te va a permitir una cadena de texto

const prod = 'Monito de 20 pulgadas';
const prods = "ordenador, tablet, disco, pantalla, teclado";
const texto = ' en promocion'. repeat(3);
console.log(texto);

console.log(`${prod} ${texto}!!!`);


//split divide un string

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" ")); //divide la cadena por los espacios en blanco

const act = "Estoy, aprendiendo ,JavaScript, moderno";
console.log(actividad);
console.log(actividad.split(" "));

const hobbies = "leer, escuchar musica, escribir, pintar";

console.log(hobbies.split(","));

//cadena = "Pedro esta con su amigo Pedro Maria y Pedro Jose"
//regex = /Pedro/g
//total= cadena.match(regex);
//console.log(total.length);


//cadena = "profesor.sebastioanrv@ies-azarquiel.es"
//cadena2 = cadena.split("@");
//console.log(cadena2[1]); 






