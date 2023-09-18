const abrirModalBtn = document.getElementById('button');
const abrirModalMisDatosPersonales = document.getElementById('abrirModalMisDatosPersonales');
const buttonNuevo = document.getElementById('nuevo');

const modal = document.getElementById('miModal');
const modalMisDatosPersonales = document.getElementById('misDatosPersonales');
const modalNuevoProducto = document.getElementById('nuevoProducto');
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
    if (modalNuevoProducto.style.display === 'flex') {
        modalNuevoProducto.style.display = 'none';
    } else {
        modalNuevoProducto.style.display = 'flex';
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
    if (e.target === modalNuevoProducto) {
        modalNuevoProducto.style.display = 'none';
    }
    
});