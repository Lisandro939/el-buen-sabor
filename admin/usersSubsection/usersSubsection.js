const abrirModalBtn = document.getElementById('button');
const abrirModalMisDatosPersonales = document.getElementById('abrirModalMisDatosPersonales');
const buttonNuevo = document.getElementById('nuevo');
const buttonNuevoEmpleado = document.getElementsByClassName('buttons');

const modal = document.getElementById('miModal');
const modalMisDatosPersonales = document.getElementById('misDatosPersonales');
const modalNuevoIngrediente = document.getElementById('nuevoIngrediente');
const modalNuevoEmpleado = document.getElementById('modalNuevoEmpleado');
// Abrir el modal
abrirModalBtn.addEventListener('click', () => {
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
});

abrirModalMisDatosPersonales.addEventListener('click', () => {
    if (modalMisDatosPersonales.style.display === 'flex') {
        modalMisDatosPersonales.style.display = 'none';
    } else {
        modalMisDatosPersonales.style.display = 'flex';
    }
});

buttonNuevo.addEventListener('click', () => {
    if (modalNuevoIngrediente.style.display === 'flex') {
        modalNuevoIngrediente.style.display = 'none';
    } else {
        modalNuevoIngrediente.style.display = 'flex';
    }
});

buttonNuevoEmpleado.addEventListener('click', () => {
    console.log('Hola')
    if (modalNuevoEmpleado.style.display === 'flex') {
        modalNuevoEmpleado.style.display = 'none';
    } else {
        modalNuevoEmpleado.style.display = 'flex';
    }
});

// Cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === modalMisDatosPersonales) {
        alert('hola');
        modalMisDatosPersonales.style.display = 'none';
    } 
    if (e.target === modalNuevoIngrediente) {
        modalNuevoIngrediente.style.display = 'none';
    }
});