//variables

const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

eventListeners();

//Creamos evento
function eventListeners() {

    document.addEventListener("DOMContentLoaded", preguntarpresupuesto);

    formulario.addEventListener("submit", agregarGasto);

}

//Hacemos un aviso nada mas entrar a la pagina y preguntamos el presupuesto, el usuario lo ungresa
function preguntarpresupuesto() {

    const presupuestoUsuario = prompt('Ingrese presupuesto semanal',)

    //Validamos que el dato introducido sea correcto y no de problemas.
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario < 0) {
        preguntarpresupuesto()
    } else {

        
        presupuesto = new Presupuesto(presupuestoUsuario)//Se crea un nuevo objeto de la clase Presupuesto.
        ui.insertarPresupuesto(presupuesto) //Insertamos el presupuesto en el HTML en los espacios correspondientes.
    }
}




//Clases
    //Clase Presupuesto
class Presupuesto {
    //Hccemos constructor de datos
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }
    //metodo para guardar gasto
    guardarGasto(gastoNuevo) {
        this.gastos = [...this.gastos, gastoNuevo]; //Expandimos el array y añadimos el nuevo gasto
        this.calcularRestante();    //Llamamos al metodo calcular restante para actualizar el restante
    }

    //Metodo para calcular restante despueses de añadir un gasto
    calcularRestante() {
        //Sumamos todos los gastos, y lo guardamos en gastado. El total empieza en 0
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)        
        this.restante = this.presupuesto - gastado  //restamos el gastado al presupuesto inicial

    }

    //Llamamos al metodo eliminar gasto
    eliminarGasto(id) {
        this.gastos = this.gastos.filter(array => array.id !== id); //Filtramos el array y eliminamos el gasto con el id que recibimos como parametro.
        ui.agregarGastoListado(this.gastos) //Actualizamos el listado de gastos en el HTML, mediante el metodo de la clase UI agregarGastoListado.
        this.calcularRestante()     //Actualizamos el restante despues de eliminar el gasto.

    }

}

class UI {
    
    insertarPresupuesto(objeto) {
        const { presupuesto, restante } = objeto;
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante

    }
    imprimirAlerta(mensaje, tipo) {
        const div = document.createElement('div')
        div.classList.add('text-center', 'alert')



        if (tipo === 'error') {
            div.classList.add('alert-danger')


        } else if (tipo === 'alert') {
            div.classList.add('alert-danger')


        }
        div.classList.add('alert-success')

        div.textContent = mensaje
        document.querySelector('.primario').insertBefore(div, formulario)
        setTimeout(() => {
            div.remove()
        }, 2000)

    }

}

const ui = new UI()
let presupuesto;






function agregarGasto() {
    const gasto = document.querySelector("#gasto").value;
    const cantidad = document.querySelector("#cantidad").value;

    //validar


}




