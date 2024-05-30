function validarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var repetirContrasena = document.getElementById("repetirContrasena").value;
    var mensaje = document.getElementById("mensaje");
    
    if (contrasena.length < 5) {
        mensaje.textContent = "La contraseña es insegura. Debe tener al menos 5 caracteres.";
        return false;
    }

    if (contrasena !== repetirContrasena) {
        mensaje.textContent = "Las contraseñas no coinciden";
        return false;
    }

    mensaje.textContent = "";
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("verPersona.html")) {
        const params = new URLSearchParams(window.location.search);
        const nombre = params.get('nombre');
        const apellidos = params.get('apellidos');
        const correo = params.get('correo');
        const fechaNacimiento = params.get('fechaNacimiento');
        const telefono = params.get('telefono');

        const fechaNacimientoDate = new Date(fechaNacimiento);
        const edad = calcularEdad(fechaNacimientoDate);

        document.getElementById("nombre").textContent = nombre;
        document.getElementById("apellidos").textContent = apellidos;
        document.getElementById("correo").textContent = correo;
        document.getElementById("correo").href = "mailto:" + correo;
        document.getElementById("telefono").textContent = telefono;
        document.getElementById("telefono").href = "tel:" + telefono;
        document.getElementById("edad").textContent = "Edad: " + edad + " años";
    }
});

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}
