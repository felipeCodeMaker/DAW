// Crea un nuevo objeto Date que representa la fecha y hora actual
// new Date() sin parámetros devuelve la fecha/hora del momento de ejecución
const diahoy = new Date();

// Declara una variable 'valor' sin inicializar (undefined)
let valor;

// Date.now() devuelve el timestamp actual en milisegundos desde el 1 de enero de 1970
// PERO no se asigna a ninguna variable, por lo que este valor se pierde
Date.now();

// Crea un objeto Date para una fecha específica (5 de enero de 1987)
// El formato "1-5-1987" interpreta: mes-día-año (enero 5, 1987)
let cumple = new Date("1-5-1987");

// ERROR TIPOGRÁFICO: 'cumole' debería ser 'cumple'
// Esta línea crea una nueva variable 'cumole' en lugar de reasignar 'cumple'
// Crea otra fecha para el 5 de enero de 1987 pero con formato diferente
cumple = new Date('January 5 1987');

// Muestra en consola el tipo de dato de 'valor'
// En este punto, valor sigue siendo undefined
console.log(typeof valor) // Output: "undefined"

// Asigna el objeto Date 'cumple' a la variable 'valor'
// Ahora valor contiene la fecha 5 de enero de 1987
valor = cumple;

// Comentario: Métodos para el objeto de fecha
//Metdodos para el objeto de fecha

// Obtiene el año actual (4 dígitos) de 'diahoy'
// Ejemplo: si es 2024, devuelve 2024
valor = diahoy.getFullYear()

// Obtiene el mes actual (0-11, donde 0 = enero, 11 = diciembre)
valor = diahoy.getMonth()

// Obtiene el día de la semana (0-6, donde 0 = domingo, 6 = sábado)
valor = diahoy.getDay()

// Obtiene el timestamp en milisegundos desde el 1 de enero de 1970
// Esto se usa comúnmente para cálculos y comparaciones de fechas
valor = diahoy.getTime()// Comentario: son los milisegundos desde 1 ene 1970

// Comentario explicativo: 
// Get sirve para extraer el valor, SET para establecer el valor
//Get sirve para extraer el valor, SET para establecer el valor

// ESTE BLOQUE MODIFICA LA FECHA ORIGINAL 'diahoy'

// Cambia el año de 'diahoy' a 1989 y devuelve el timestamp resultante
// ⚠️ ADVERTENCIA: Esto MODIFICA el objeto Date original
valor = diahoy.setFullYear(1989)

// Cambia el mes de 'diahoy' a diciembre (11) y devuelve el timestamp
valor = diahoy.setMonth(11)

// Cambia el día del mes de 'diahoy' a 27 y devuelve el timestamp
valor = diahoy.setDate(27)

// Ahora obtenemos valores de la fecha MODIFICADA:

// Obtiene el mes actual de 'diahoy' (que ahora es diciembre - 11)
valor = diahoy.getMonth();

// Obtiene la hora actual (0-23)
valor = diahoy.getHours();

// Obtiene los minutos actuales (0-59)
valor = diahoy.getMinutes();