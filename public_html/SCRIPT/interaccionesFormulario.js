// Función para cancelar solicitud
function cancelarSolicitud() {
    if (confirm('¿Estás seguro de que quieres cancelar la solicitud? Se perderán todos los datos ingresados.')) {
        document.getElementById('formSolicitud').reset();
    }
}

// Redirección al formulario al hacer click en cualquier servicio
document.addEventListener('DOMContentLoaded', function () {
    const servicios = document.querySelectorAll('.servicios');
    servicios.forEach(servicio => {
        servicio.addEventListener('click', function () {
            // Desplazamiento suave al formulario
            document.getElementById('formulario').scrollIntoView({
                behavior: 'smooth'
            });
            // Efecto visual de confirmación
            this.style.background = 'linear-gradient(to right, #008099, #00aaff)';
            setTimeout(() => {
                this.style.background = '';
            }, 1000);
        });
    });
    // Manejo del envío del formulario
    document.getElementById('formSolicitud').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
});

