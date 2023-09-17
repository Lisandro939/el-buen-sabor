const abrirModalBtn = document.getElementById('button');
const abrirModalMisDatosPersonales = document.getElementById('abrirModalMisDatosPersonales');
const buttonNuevo = document.getElementById('nuevo');
const buttonRegistrar = document.getElementById('registrar');

const modal = document.getElementById('miModal');
const modalMisDatosPersonales = document.getElementById('misDatosPersonales');
const modalIngrediente = document.getElementById('nuevoIngrediente');
const modalRegistrarCompra = document.getElementById('registrarCompra');
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
    if (modalIngrediente.style.display === 'flex') {
        modalIngrediente.style.display = 'none';
    } else {
        modalIngrediente.style.display = 'flex';
    }
});

buttonRegistrar.addEventListener('click', () => {
    if (modalRegistrarCompra.style.display === 'flex') {
        modalRegistrarCompra.style.display = 'none';
    } else {
        modalRegistrarCompra.style.display = 'flex';
    }
});

// Cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === modalMisDatosPersonales) {
        modalMisDatosPersonales.style.display = 'none';
    } 
    if (e.target === modalIngrediente) {
        modalIngrediente.style.display = 'none';
    }
    if (e.target === modalRegistrarCompra) {
        modalRegistrarCompra.style.display = 'none';
    }
    
});