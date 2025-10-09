localStorage.setItem('nombre', 'Pedro');    //Los valores son clave valor
//De esta forma añadimos un valor, solo almacena String
//el problema son los objetos y los arrays

sessionStorage.setItem('nombre', 'Dolores');

const producto = {
    nombre : 'Monitor',
    precio : 300
};  //Como se almacena este objeto en LocalStorege, ? , hay que pasarlo a JSON

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);