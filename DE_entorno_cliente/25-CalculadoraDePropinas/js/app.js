let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

let categorias = {
    1: "Comida",
    2: "Bebida", 
    3: "Postre"
}

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente)

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value
    
    // Validar campos vacíos
    const camposVacios = [mesa, hora].some(element => element === '')
    if (camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback')
        if (!existeAlerta) {
            const alerta = document.createElement('div')
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center')
            alerta.textContent = 'Todos los campos son obligatorios'
    
            document.querySelector('.modal-body form').appendChild(alerta)
            setTimeout(() => {
                alerta.remove()
            }, 2000);
        }
        return
    }

    // Asignar datos del formulario a cliente
    cliente = {...cliente, mesa, hora}

    // Ocultar modal bootstrap
    const modal = document.querySelector('#formulario');
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    if (bootstrapModal) {
        bootstrapModal.hide();
    } else {
        // Si no existe instancia, crear una nueva
        const newModal = new bootstrap.Modal(modal);
        newModal.hide();
    }
    
    mostrarSecciones()
    obtenerPlatillos()
}

function obtenerPlatillos() {
    const url = "http://localhost:3000/platillos"
    
    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return respuesta.json()
        })
        .then(resultado => {
            console.log('Platillos obtenidos del servidor:', resultado)
            imprimirPlatillos(resultado)
        })
        .catch(error => {
            console.error('Error al obtener platillos:', error)
            // Mostrar mensaje de error al usuario
            const contenido = document.querySelector('#platillos .contenido')
            contenido.innerHTML = `
                <div class="alert alert-danger text-center">
                    <h4>Error de conexión</h4>
                    <p>No se pudieron cargar los platillos. Asegúrate de que el servidor JSON esté ejecutándose.</p>
                    <p><small>Ejecuta: <code>json-server --watch db.json --port 3000</code></small></p>
                </div>
            `
        })
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none')
    seccionesOcultas.forEach(element => element.classList.remove('d-none'))
}

function imprimirPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido')
    
    // Limpiar contenido existente
    contenido.innerHTML = ''
    
    // Verificar si hay platillos
    if (!platillos || platillos.length === 0) {
        contenido.innerHTML = `
            <div class="alert alert-warning text-center">
                No hay platillos disponibles en el menú.
            </div>
        `
        return
    }
    
    // Agrupar platillos por categoría
    const platillosPorCategoria = {};
    platillos.forEach(platillo => {
        const categoria = categorias[platillo.categoria];
        if (!platillosPorCategoria[categoria]) {
            platillosPorCategoria[categoria] = [];
        }
        platillosPorCategoria[categoria].push(platillo);
    });
    
    // Crear secciones por categoría
    Object.keys(platillosPorCategoria).forEach(categoria => {
        const categoriaSection = document.createElement('div');
        categoriaSection.classList.add('categoria-section');
        
        const tituloCategoria = document.createElement('h4');
        tituloCategoria.textContent = categoria;
        tituloCategoria.classList.add('text-primary', 'mb-3', 'pb-2', 'border-bottom');
        categoriaSection.appendChild(tituloCategoria);
        
        platillosPorCategoria[categoria].forEach(platillo => {
            const {id, nombre, precio} = platillo
            const row = document.createElement('div')
            row.classList.add('row', 'py-3', 'border-top', 'platillo-item', 'align-items-center')

            const nomb = document.createElement('div')
            nomb.classList.add('col-md-4')
            nomb.textContent = nombre

            const divPrecio = document.createElement('div')
            divPrecio.classList.add('col-md-3', 'fw-bold', 'text-success')
            divPrecio.textContent = `$${precio}`

            const divCategoria = document.createElement('div')
            divCategoria.classList.add('col-md-3', 'text-muted')
            divCategoria.textContent = categoria

            // Input para cantidad
            const inputCantidad = document.createElement('input')
            inputCantidad.type = 'number'
            inputCantidad.min = 0
            inputCantidad.value = 0
            inputCantidad.classList.add('form-control')
            inputCantidad.id = `producto-${id}`
            inputCantidad.placeholder = 'Cantidad'

            // Función que detecta la cantidad
            inputCantidad.onchange = function() {
                const cantidad = parseInt(inputCantidad.value) || 0
                agregarPlatillo({...platillo, cantidad})
            }

            const agregar = document.createElement('div')
            agregar.classList.add('col-md-2')
            agregar.appendChild(inputCantidad)

            row.appendChild(nomb)
            row.appendChild(divPrecio)
            row.appendChild(divCategoria)
            row.appendChild(agregar)
            categoriaSection.appendChild(row)
        });
        
        contenido.appendChild(categoriaSection);
    });
}

function agregarPlatillo(producto) {
    let {pedido} = cliente

    if (producto.cantidad > 0) {
        if (pedido.some(articulo => articulo.id === producto.id)) {
            const pedidoActualizado = pedido.map(articulo => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad
                }
                return articulo
            })
            cliente.pedido = [...pedidoActualizado]
        } else {
            cliente.pedido = [...pedido, producto]
        }
    } else {
        const resultado = pedido.filter(articulo => articulo.id !== producto.id)
        cliente.pedido = [...resultado]
    }

    limpiarHTML()
    
    if (cliente.pedido.length) {
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido')

    const resumen = document.createElement('div')
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow')

    const mesa = document.createElement('p')
    mesa.textContent = 'Mesa: '
    mesa.classList.add('fw-bold')
    const mesaSpan = document.createElement('span')
    mesaSpan.textContent = cliente.mesa
    mesaSpan.classList.add('fw-normal')

    const hora = document.createElement('p')
    hora.textContent = 'Hora: '
    hora.classList.add('fw-bold')
    const horaSpan = document.createElement('span')
    horaSpan.textContent = cliente.hora
    horaSpan.classList.add('fw-normal')

    mesa.appendChild(mesaSpan)
    hora.appendChild(horaSpan)

    const heading = document.createElement('h3')
    heading.textContent = "Platillos consumidos"
    heading.classList.add('my-4', 'text-center')

    const grupo = document.createElement('ul')
    grupo.classList.add('list-group')
    const {pedido} = cliente
    
    pedido.forEach(articulo => {
        const {nombre, cantidad, precio, id} = articulo
        const lista = document.createElement('li')
        lista.classList.add('list-group-item')

        const nombreEl = document.createElement('h4')
        nombreEl.classList.add('my-4', 'text-primary')
        nombreEl.textContent = nombre

        const cantidadEL = document.createElement('p')
        cantidadEL.classList.add('fw-bold')
        cantidadEL.textContent = 'Cantidad: '
        const cantidadValor = document.createElement('span')
        cantidadValor.classList.add('fw-normal')
        cantidadValor.textContent = cantidad

        const precioEL = document.createElement('p')
        precioEL.classList.add('fw-bold')
        precioEL.textContent = 'Precio: '
        const precioValor = document.createElement('span')
        precioValor.classList.add('fw-normal')
        precioValor.textContent = `$${precio}`

        const subtotalEL = document.createElement('p')
        subtotalEL.classList.add('fw-bold')
        subtotalEL.textContent = 'Subtotal: '
        const subtotalValor = document.createElement('span')
        subtotalValor.classList.add('fw-normal')
        subtotalValor.textContent = calcularSubtotal(precio, cantidad)

        const btnEliminar = document.createElement('button')
        btnEliminar.classList.add('btn', 'btn-danger', 'mt-2')
        btnEliminar.textContent = 'Eliminar pedido'
        btnEliminar.onclick = function() {
            eliminarProducto(id)
        }

        cantidadEL.appendChild(cantidadValor)
        precioEL.appendChild(precioValor)
        subtotalEL.appendChild(subtotalValor)

        lista.appendChild(nombreEl)
        lista.appendChild(cantidadEL)
        lista.appendChild(precioEL)
        lista.appendChild(subtotalEL)
        lista.appendChild(btnEliminar)

        grupo.appendChild(lista)
    })

    resumen.appendChild(heading)
    resumen.appendChild(mesa)
    resumen.appendChild(hora)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

    formularioPropinas()
}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido')
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild)
    }
}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`
}

function eliminarProducto(id) {
    let {pedido} = cliente
    const resultado = pedido.filter(articulo => articulo.id !== id)
    cliente.pedido = [...resultado]

    limpiarHTML()

    if (cliente.pedido.length) {
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }

    const productoEliminado = `#producto-${id}`
    const inputEliminado = document.querySelector(productoEliminado)
    if (inputEliminado) {
        inputEliminado.value = 0
    }
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido')
    const texto = document.createElement('p')
    texto.classList.add('text-center')
    texto.textContent = "Añade los elementos del pedido"
    contenido.appendChild(texto)
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido')
    const formulario = document.createElement('div')
    formulario.classList.add('col-md-6', 'formulario')
    
    const divFormulario = document.createElement('div')
    divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow')
    
    const heading = document.createElement('h3')
    heading.classList.add('my-4', 'text-center')
    heading.textContent = 'Propina'

    // Crear opciones de propina
    const porcentajes = [10, 25, 50]
    
    porcentajes.forEach(porcentaje => {
        const radioDiv = document.createElement('div')
        radioDiv.classList.add('form-check')
        
        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'propina'
        radio.value = porcentaje
        radio.classList.add('form-check-input')
        radio.onclick = function() {
            calcularPropina(porcentaje)
        }

        const radioLabel = document.createElement('label')
        radioLabel.textContent = `${porcentaje}%`
        radioLabel.classList.add('form-check-label', 'mb-2')

        radioDiv.appendChild(radio)
        radioDiv.appendChild(radioLabel)
        divFormulario.appendChild(radioDiv)
    })

    formulario.appendChild(divFormulario)
    contenido.appendChild(formulario)
}

function calcularPropina(porcentaje) {
    const {pedido} = cliente
    let subtotal = 0

    // Calcular el subtotal a pagar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio
    })

    const propina = (subtotal * parseInt(porcentaje)) / 100
    const total = subtotal + propina

    mostrarTotalHTML(subtotal, total, propina)
}

function mostrarTotalHTML(subtotal, total, propina) {
    const divTotales = document.createElement('div')
    divTotales.classList.add('total-pagar', 'mt-4')

    // Subtotal
    const subtotalParrafo = document.createElement('p')
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
    subtotalParrafo.textContent = 'Subtotal consumido: '
    const subtotalSpan = document.createElement('span')
    subtotalSpan.classList.add('fw-normal')
    subtotalSpan.textContent = `$${subtotal}`
    subtotalParrafo.appendChild(subtotalSpan)

    // Propina
    const propinaParrafo = document.createElement('p')
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
    propinaParrafo.textContent = 'Propina: '
    const propinaSpan = document.createElement('span')
    propinaSpan.classList.add('fw-normal')
    propinaSpan.textContent = `$${propina}`
    propinaParrafo.appendChild(propinaSpan)

    // Total
    const totalParrafo = document.createElement('p')
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2')
    totalParrafo.textContent = 'Total a pagar: '
    const totalSpan = document.createElement('span')
    totalSpan.classList.add('fw-normal')
    totalSpan.textContent = `$${total}`
    totalParrafo.appendChild(totalSpan)

    // Eliminar el último resultado si existe
    const totalPagarDiv = document.querySelector('.total-pagar')
    if (totalPagarDiv) {
        totalPagarDiv.remove()
    }

    divTotales.appendChild(subtotalParrafo)
    divTotales.appendChild(propinaParrafo)
    divTotales.appendChild(totalParrafo)

    const formulario = document.querySelector('.formulario > div')
    if (formulario) {
        formulario.appendChild(divTotales)
    }
}