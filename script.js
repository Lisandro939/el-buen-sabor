const abrirModalBtn = document.getElementById('abrirModal');
const cerrarModalBtn = document.getElementById('RegistrarseButton');
const modal = document.getElementById('miModal');

// Abrir el modal
abrirModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar el modal
cerrarModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal haciendo clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
}
});