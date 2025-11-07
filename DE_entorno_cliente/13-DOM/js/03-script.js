// Seleccionar elementos por ID

const formulario = document.getElementById("formulario"); // Obtiene el elemento con ID 'formulario'

const noExiste = document.getElementById("noexiste"); // Intenta obtener elemento con ID 'noexiste' (no existe)

// Si por algún motivo tenemos dos identificadores con el mismo nombre, va a seleccionar el primero que encuentre
// Al segundo lo ignorará