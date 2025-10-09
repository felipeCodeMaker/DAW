function Sumar(a, b){   //parametros
    console.log(2+2);
};

Sumar(2, 3);    //argumentos


function saludar (nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);

};

saludar("Felipe", "García");

//Parametros por defecto

function saludar2 (nombre = "Desconocido", apellido = "No tiene apellido"){
    console.log(`Hola ${nombre} ${apellido}`);

};

saludar2("Felipe");
saludar2(undefined, "García");

____________________________________________________


function iniciarApp(){
    console.log("Iniciando app ...");
    SegundaFuncion();
};

iniciarApp();


function SegundaFuncion(){
    console.log("Desde la segunda funcion");
    UsuarioAutentificacion("Felipe");
};

function UsuarioAutentificacion(nombre){
    console.log("Autentificando usuario . . . . . .");
    console.log(`Usuario ${nombre} autentificado correctamente`);
}






