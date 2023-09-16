const abrirModalBtn = document.getElementById('abrirModal');
const abrirModalMisDatosPersonales = document.getElementById('abrirModalMisDatosPersonales');
const abrirModalRegister = document.getElementById('abrirModalRegister');
const abrirModalMisPedidos = document.getElementById('abrirModalMisPedidos');
const registrarButton = document.getElementById('registrarButton');
const ingresarButton = document.getElementById('ingresarButton');

const modal = document.getElementById('miModal');
const modalMisDatosPersonales = document.getElementById('misDatosPersonales');
const modalMisPedidos = document.getElementById('misPedidos');
const modalRegister = document.getElementById('miModalRegister');
const modalLogin = document.getElementById('miModalLogin');

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

abrirModalMisPedidos.addEventListener('click', () => {
    if (modalMisPedidos.style.display === 'flex') {
        modalMisPedidos.style.display = 'none';
    } else {
        modalMisPedidos.style.display = 'flex';
    }
});

abrirModalRegister.addEventListener('click', () => {
    if (modalLogin.style.display === 'flex') {
        modalLogin.style.display = 'none';
    } else {
        modalLogin.style.display = 'flex';
    }
});

registrarButton.addEventListener('click', () => {
    if (modalLogin.style.display === 'flex') {
        modalLogin.style.display = 'none';
        modalRegister.style.display = 'flex';
    } else {
        modalLogin.style.display = 'flex';
    }
});

ingresarButton.addEventListener('click', () => {
    if (modalRegister.style.display === 'flex') {
        modalRegister.style.display = 'none';
        modalLogin.style.display = 'flex';
    } else {
        modalRegister.style.display = 'flex';
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
    if (e.target === modalMisPedidos) {
        modalMisPedidos.style.display = 'none';
    }
    if (e.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
    if (e.target === modalRegister) {
        modalRegister.style.display = 'none';
    }
});