// Comentario: Uso de la librería Moment.js para manejo de fechas
//Moments js

// Crea un objeto Date nativo de JavaScript con la fecha y hora actual
const diahoy = new Date();

// Establece el idioma/localización de Moment.js a español
// Esto afecta a todos los formatos de fecha que se muestren después
// Los meses, días, etc. se mostrarán en español
moment.locale('es');

// Formatea la fecha actual usando Moment.js
// moment() sin parámetros crea un objeto con la fecha/hora actual
// .format() define el formato de salida:
// - 'MMMMM': Mes completo (ej: "enero")
// - 'Do': Día del mes con ordinal (ej: "5º")
// - 'YYYY': Año con 4 dígitos (ej: "2024")
// - 'h': Hora en formato 12-horas
// - 'mm': Minutos
// - 'ss': Segundos
// - 'a': AM/PM
// El parámetro 'diahoy' está de más ya que moment() ya usa la fecha actual
// Output ejemplo: "enero 5º 2024, 10:30:25 pm"
console.log(  moment().format('MMMMM Do YYYY, h:mm:ss a', diahoy) );    // Comentario: Los espacios son necesarios

// Crea una fecha 3 días en el futuro y la formatea en formato de calendario
// .add(3, 'days'): Agrega 3 días a la fecha actual
// .calendar(): Muestra la fecha en formato relativo (ej: "dentro de 3 días")
// En español mostraría algo como: "viernes a las 22:30"
console.log( moment().add(3, 'days').calendar() );

// Formatea la fecha actual usando el formato predefinido 'LLLL'
// 'LLLL' es un formato estándar que incluye:
// - Día de la semana completo
// - Día del mes
// - Mes completo
// - Año
// - Hora
// En español mostraría: "viernes, 5 de enero de 2024 22:30"
// El parámetro 'diahoy' no es necesario aquí
console.log( moment().format('LLLL', diahoy) )