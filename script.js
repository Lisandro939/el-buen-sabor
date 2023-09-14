const abrirModalBtn = document.getElementById('abrirModal');
const modal = document.getElementById('miModal');

const abrirModalMisPedidos = document.getElementById('abrirModalMisPedidos');
const modalMisPedidos = document.getElementById('misPedidos');

// Abrir el modal
abrirModalBtn.addEventListener('click', () => {
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
});

abrirModalMisPedidos.addEventListener('click', () => {
    if (modalMisPedidos.style.display === 'flex') {
        modalMisPedidos.style.display = 'none';
    } else {
        modalMisPedidos.style.display = 'flex';
    }
});

// Cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    } 
    if (e.target === modalMisPedidos) {
        modalMisPedidos.style.display = 'none';
    }
});