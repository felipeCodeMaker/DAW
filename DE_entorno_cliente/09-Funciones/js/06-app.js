//Funciones flecha

const aprendiendo = function(){
    console.log("aprendiendo");
};

const aprendiendo2 = function(){
    console.log("aprendiendo 2");
};

//cuando la funcion solo tiene una linea se puede hacer de esta forma, esta implicito el return

const aprendiendo3 = () => console.log("Aprendiendo 3")
console.timeLog(aprendiendo3());

//mas corto aun, tambien esta implicito el return
const aprendiendo4 = () => 'aprendiendo js';
console.log(aprendiendo4());


/////////////////


const aprender = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
};

aprender('JavaScript');

//Cuando la funcion solo tiene una linea se puede hacer de esta forma, esta imp


const aprender2 = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprender2('HTML');

//Cuando la funcion solo tiene una linea se puede hacer de esta forma, esta implicito en el return
const aprender3 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprender3('CSS');

const aprender4 = (tecnologia) => `Aprendiendo ${tecnologia}`;
aprender4('REACT');

//Cuando hay un solo parametro los parentesis son opcionales
const aprender5 = tecnologia => `Aprendiendo ${tecnologia}`;
aprender4('ANGULAR');

