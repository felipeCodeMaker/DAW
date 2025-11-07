//Variables y Selectores

// Selecciona el formulario para agregar gastos por su ID
const formulario = document.querySelector('#agregar-gasto');

// Selecciona la lista UL donde se mostrarán los gastos
const gastoListado = document.querySelector('#gastos ul');

// Eventos
// Ejecuta la función para configurar event listeners
eventListeners()

// Función que configura todos los event listeners
function eventListeners(){
    // Cuando el DOM termina de cargar, pregunta por el presupuesto
    document.addEventListener('DOMContentLoaded', preguntarpresupuesto)
}

// Agrega event listener al formulario para cuando se envía
formulario.addEventListener('submit',agregarGasto)

//Clases

// Clase para manejar la lógica del presupuesto
class Presupuesto{
    constructor (presupuesto){
        this.presupuesto = Number(presupuesto)  // Presupuesto total
        this.restante = Number(presupuesto)     // Presupuesto restante (inicia igual al total)
        this.gastos= []                         // Array para almacenar gastos
    }
    
    // Método para agregar un nuevo gasto
    guardarGasto(gastoNuevo){
        // Agrega el nuevo gasto al array usando spread operator
        this.gastos = [...this.gastos, gastoNuevo]
        // Recalcula el presupuesto restante
        this.calcularRestante()
    }

    // Método para calcular cuánto presupuesto queda
    calcularRestante(){
        // Suma todas las cantidades de gastos usando reduce
        const gastado = this.gastos.reduce((total, gasto )=>total + gasto.cantidad, 0)
        // Resta lo gastado del presupuesto inicial
        this.restante = this.presupuesto - gastado
    }
    
    // Método para eliminar un gasto por su ID
    eliminarGasto(id){
       // Filtra el array, manteniendo solo los gastos que NO tienen el ID a eliminar
       this.gastos = this.gastos.filter(array => array.id !== id)
       // Actualiza la lista en el HTML
       ui.agregarGastoListado(this.gastos)
       // Recalcula el presupuesto restante
       this.calcularRestante()
    }
}

// Clase para manejar la interfaz de usuario
class UI{
    // Método para mostrar el presupuesto en la interfaz
    insertarPresupuesto(objeto){
        // Extrae presupuesto y restante del objeto
        const {presupuesto, restante} = objeto;
        // Muestra el presupuesto total en el HTML
        document.querySelector('#total').textContent = presupuesto
        // Muestra el presupuesto restante en el HTML
        document.querySelector('#restante').textContent = restante
    }
    
    // Método para mostrar mensajes de alerta
    imprimirAlerta(mensaje, tipo){
        // Crea un elemento div para el mensaje
        const div = document.createElement('div')
        // Añade clases base para el estilo
        div.classList.add('text-center', 'alert')

        // Según el tipo de mensaje, añade clases de color diferentes
        if(tipo === 'error'){
            div.classList.add('alert-danger')  // Rojo para errores
        }else if(tipo === 'alert'){
            div.classList.add('alert-danger')  // Rojo para alertas (parece error)
        }
        // ERROR: Esta línea siempre se ejecuta, sobrescribiendo lo anterior
        div.classList.add('alert-success')     // Verde para éxito
        
        // Establece el texto del mensaje
        div.textContent = mensaje
        // Inserta el mensaje antes del formulario
        document.querySelector('.primario').insertBefore(div, formulario)
        
        // Elimina el mensaje automáticamente después de 2 segundos
        setTimeout(()=>{
            div.remove()
        },2000)
    }

    // Método para mostrar la lista de gastos en el HTML
    agregarGastoListado(gastos){
        // Limpia la lista antes de agregar nuevos elementos
        this.limpiarHTML()

        // Itera sobre cada gasto en el array
        gastos.forEach(element => {
            // Extrae propiedades del gasto
            const {id, gasto, cantidad} = element

            // Crea un elemento li para el gasto
            const crearLista = document.createElement('li')
            // Añade clases de Bootstrap para el estilo
            crearLista.className = 'list-group-item d-flex justify-content-between align-items-center';
            // Añade el ID como atributo data para identificarlo
            crearLista.dataset.id = id
            
            // Crea el HTML interno del li con el gasto y cantidad
            crearLista.innerHTML = `${gasto} <span class="badge badge-primary badge-pill">$ ${cantidad} </span> `

            // Crea botón para eliminar el gasto
            const btn = document.createElement('button')
            // Añade clases de Bootstrap para el estilo del botón
            btn.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btn.textContent="Borrar"
            // Asigna función para eliminar cuando se hace click
            btn.onclick= ()=>{
                eliminarGasto(id)
            }

            // Añade el botón al li
            crearLista.appendChild(btn)

            // Añade el li completo a la lista en el HTML
            gastoListado.appendChild(crearLista)
        });
    }

    // Método para limpiar la lista de gastos
    limpiarHTML(){
        // Elimina todos los hijos de la lista uno por uno
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }
    
    // Método para actualizar el presupuesto restante y cambiar colores
    actualizarRestante(restante){
        // Actualiza el texto del presupuesto restante
        document.querySelector('#restante').textContent = restante
        
        // Obtiene el presupuesto total
        const total = Number(document.querySelector('#total').textContent)
        
        // Cambia colores según el porcentaje gastado:
        
        // Si queda menos del 25% (muy crítico)
        if((total/4)>=restante){
            document.querySelector('.restante').classList.remove('alert-success','alert-warning')
            document.querySelector('.restante').classList.add('alert-danger') // Rojo
        }
        // Si queda menos del 50% (crítico)
        else if( (total/2)>=restante){
            document.querySelector('.restante').classList.remove('alert-success', 'alert-danger')
            document.querySelector('.restante').classList.add('alert-warning') // Amarillo
        }
        // Si queda más del 50% (saludable)
        else{
            document.querySelector('.restante').classList.remove('alert-warning', 'alert-danger')
            document.querySelector('.restante').classList.add('alert-success') // Verde
        }
        
        // Si no queda presupuesto
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
            // Deshabilita el botón de agregar gastos
            document.querySelector('button[type="submit"]').disabled = true
        }
    }
}

//Instanciar
// Crea una instancia de la clase UI para manejar la interfaz
const ui = new UI()
// Variable para almacenar la instancia de Presupuesto
let presupuesto;

// Funciones

// Función que pregunta al usuario por su presupuesto inicial
function preguntarpresupuesto(){
    // Muestra un prompt para que el usuario ingrese el presupuesto
    const presupuestoUsuario = prompt('Ingrese presupuesto semanal', )

    // Validaciones del presupuesto ingresado
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario < 0){
        // Si es inválido, vuelve a preguntar (recursión)
        preguntarpresupuesto()
    }else{
        // Si es válido, crea una nueva instancia de Presupuesto
        presupuesto = new Presupuesto(presupuestoUsuario)
        // Muestra el presupuesto en la interfaz
        ui.insertarPresupuesto(presupuesto)
    }
}

// Función que se ejecuta al enviar el formulario para agregar gasto
function agregarGasto(e){
    e.preventDefault() // Evita que el formulario se envíe
    
    // Obtiene los valores del formulario
    const gasto = document.querySelector('#gasto').value
    const cantidad = Number(document.querySelector('#cantidad').value)

    // Validaciones de los datos ingresados
    if(gasto === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios.', 'error')
        return // Detiene la ejecución si hay error
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('El valor ingresado debe ser un número y mayor a cero', 'alert')
        return // Detiene la ejecución si hay error
    }else{
        ui.imprimirAlerta('Gasto añadido exitosamente' , 'success')
    }

    // Crea un objeto con los datos del gasto
    const gastoObjeto = {gasto, cantidad, id: Date.now()} // ID único basado en timestamp
    
    // Guarda el gasto en el presupuesto
    presupuesto.guardarGasto(gastoObjeto)

    // Extrae los gastos y restante actualizados
    const { gastos, restante } = presupuesto
    
    // Actualiza la lista de gastos en el HTML
    ui.agregarGastoListado(gastos)

    // Actualiza el presupuesto restante y colores
    ui.actualizarRestante(restante)
    
    // Limpia el formulario
    formulario.reset()
}

// Función para eliminar un gasto
function eliminarGasto(id){
    // Elimina el gasto del presupuesto
    presupuesto.eliminarGasto(id)

    // Extrae datos actualizados
    const { gastos, restante } = presupuesto

    // Actualiza la interfaz
    ui.actualizarRestante(restante)
    ui.insertarPresupuesto(presupuesto)
    ui.agregarGastoListado(gastos)
}