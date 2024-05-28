document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('miformulario');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const correo = document.getElementById('correo').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const telefono = document.getElementById('telefono').value;
        const contrasenia = document.getElementById('contrasenia').value;
        const validarContra = document.getElementById('validarContra').value;

        if (contrasenia !== validarContra) {
            mensaje.textContent = "Las contraseñas no coinciden";
            return;
        } else if (contrasenia.length < 5) {
            mensaje.textContent = "Su contraseña es insegura";
            return;
        } else {
            mensaje.textContent = "";
        }

        const fechaHoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = fechaHoy.getFullYear() - fechaNac.getFullYear();
        const DiferenciaMes = fechaHoy.getMonth() - fechaNac.getMonth();
        if (DiferenciaMes < 0 || (DiferenciaMes === 0 && fechaHoy.getDate() < fechaNac.getDate())) {
            edad--;
        }

        localStorage.setItem('nombres', nombres);
        localStorage.setItem('apellidos', apellidos);
        localStorage.setItem('correo', correo);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('edad', edad);

        window.location.href = 'Respuestas.html';
    });
});