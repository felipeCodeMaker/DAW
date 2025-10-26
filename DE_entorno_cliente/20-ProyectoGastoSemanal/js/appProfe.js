const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

eventListeners();

function eventListeners() {

    document.addEventListener("DOMContentLoaded", preguntarpresupuesto);

    formulario.addEventListener("submit", agregarGasto);

}


class Presupuesto{
    constructor (presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos= []

    }
    NuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto )=>total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id){
       this.gastos = this.gastos.filter(gasto => gasto.id.toString() !== id);
       ui.agregarGastoListado(this.gastos);
       
    }
}

class UI{
    //crear un nuevo metodo que 
    insertarPresupuesto(objeto){
        const {presupuesto, restante} = objeto;
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante 
    }
    imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div')
        div.classList.add('text-center', 'alert')
        if(tipo === 'error'){
            div.classList.add('alert-danger')
        }
        else if(tipo === 'alert'){
            div.classList.add('alert-danger')
        }else{
            div.classList.add('alert-success')
        }
        div.textContent = mensaje
        document.querySelector('.primario').insertBefore(div, formulario)
        setTimeout(() => {
            div.remove()
        }, 3000);
    }   
    agregarGastoListado(gastos){
        this.limpiarHTML(); 
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';     
            nuevoGasto.dataset.id = id;

            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id.toString());
            }
            nuevoGasto.appendChild(btnBorrar);
            gastoListado.appendChild(nuevoGasto);
        });
    }
    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }   
}

const ui = new UI();
let presupuesto;
function agregarGasto(){
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }

    if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }