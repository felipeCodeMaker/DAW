let elemento;
elemento =document; //asignar document como valor, es lo mismo que dar acceso a todo el html
console.log(elemento);

elemento = document.head;
console.log(elemento);

let elemento1 = document.body;
console.log(elemento1);

let elemento3 = document.forms;

//Se es llama html collections
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;
elemento = document.images;
elemento = document.scripts;