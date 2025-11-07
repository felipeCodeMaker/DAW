// Selectores
const formulario = document.querySelector('#nueva-cita');
const registro = document.querySelector('#citas');

// Clase UI - DEFINIR PRIMERO
class UI {
    imprimirAlerta(mensaje, tipo) {
        // Crear div de alerta
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        } else {
            divAlerta.classList.add('alert-success');
        }
        
        divAlerta.textContent = mensaje;

        // Agregar al DOM - antes del formulario
        const formularioDiv = document.querySelector('.agregar-cita');
        formularioDiv.insertBefore(divAlerta, formularioDiv.firstChild);

        // Quitar después de 3 segundos
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

    agregarListado(listado) {
        this.limpiarHTML();
        
        if (listado.length === 0) {
            const mensaje = document.createElement('p');
            mensaje.textContent = 'No hay citas programadas';
            mensaje.classList.add('text-center', 'text-muted');
            registro.appendChild(mensaje);
            return;
        }

        listado.forEach(paciente => {
            const { nombre, propietario, tlf, fecha, hora, sintomas } = paciente;
            
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'mb-3');
            li.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text mb-1"><strong>Propietario:</strong> ${propietario}</p>
                        <p class="card-text mb-1"><strong>Teléfono:</strong> ${tlf}</p>
                        <p class="card-text mb-1"><strong>Fecha:</strong> ${fecha}</p>
                        <p class="card-text mb-1"><strong>Hora:</strong> ${hora}</p>
                        <p class="card-text mb-3"><strong>Síntomas:</strong> ${sintomas}</p>
                        <button class="btn btn-danger btn-sm eliminar" data-nombre="${nombre}">Eliminar</button>
                    </div>
                </div>
            `;

            registro.appendChild(li);
        });

        // Agregar event listeners a los botones eliminar
        this.agregarEventListenersEliminar();
    }

    agregarEventListenersEliminar() {
        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const nombre = e.target.getAttribute('data-nombre');
                veterinaria.eliminarMascota(nombre);
            });
        });
    }

    limpiarHTML() {
        while (registro.firstChild) {
            registro.removeChild(registro.firstChild);
        }
    }
}

// Clase Veterinaria - DEFINIR SEGUNDO
class Veterinaria {
    constructor() {
        this.listado = [];
    }

    guardar(paciente) {
        this.listado = [...this.listado, paciente];
        console.log('Paciente guardado:', paciente);
    }

    eliminarMascota(nombre) {
        this.listado = this.listado.filter(paciente => paciente.nombre !== nombre);
        ui.agregarListado(this.listado);
    }
}

// INSTANCIAR DESPUÉS de definir las clases
const ui = new UI();
const veterinaria = new Veterinaria();

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', agregarMascota);
});

// Función principal para agregar mascota
function agregarMascota(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.querySelector('#mascota').value;
    const propietario = document.querySelector('#propietario').value;
    const tlf = document.querySelector('#telefono').value;
    const fecha = document.querySelector('#fecha').value;
    const hora = document.querySelector('#hora').value;
    const sintomas = document.querySelector('#sintomas').value;

    console.log('Valores del formulario:', { nombre, propietario, tlf, fecha, hora, sintomas });

    // Validación
    if (nombre === '' || propietario === '' || tlf === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    // Crear objeto paciente
    const paciente = {
        nombre,
        propietario, 
        tlf,
        fecha,
        hora,
        sintomas
    };

    // Guardar y actualizar UI
    veterinaria.guardar(paciente);
    ui.imprimirAlerta('Cita agregada correctamente', 'success');
    ui.agregarListado(veterinaria.listado);

    // Reiniciar formulario
    formulario.reset();
}