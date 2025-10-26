//Moments js
const diahoy = new Date();
moment.locale('es');

console.log(  moment().format('MMMMM Do YYYY, h:mm:ss a', diahoy) );    //Los espacios son necesarios

console.log( moment().add(3, 'days').calendar() );


console.log( moment().format('LLLL', diahoy) )