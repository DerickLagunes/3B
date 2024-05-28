window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    const nombres = urlParams.get('nombres');
    const apellidos = urlParams.get('apellidos');
    const correo = urlParams.get('correo');
    const fechaNacimiento = urlParams.get('fechaNacimiento');
    const telefono = urlParams.get('telefono');
    const contrasena = urlParams.get('contrasena');
    const repetirContrasena = urlParams.get('repetirContrasena');

    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edad = new Date().getFullYear() - fechaNacimientoDate.getFullYear();
    const pElement = document.getElementById('mensaje');

    if (contrasena !== repetirContrasena) {
        pElement.innerText = "Las contraseñas no coinciden";
    } else if (contrasena.length < 5) {
        pElement.innerText = "La contraseña es insegura";
    } else {
        document.getElementById('nombres').innerText = nombres;
        document.getElementById('apellidos').innerText = apellidos;
        document.getElementById('correo').href = `mailto:${correo}`;
        document.getElementById('correo').innerText = correo;
        document.getElementById('telefono').href = `tel:${telefono}`;
        document.getElementById('telefono').innerText = telefono;
        document.getElementById('edad').innerText = `Edad: ${edad} años`;
    }
}