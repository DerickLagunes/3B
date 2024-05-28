document.addEventListener('DOMContentLoaded', function() {
    const respuestaNombres = document.getElementById('respuestaNombres');
    const respuestaApellidos = document.getElementById('respuestaApellidos');
    const respuestaCorreo = document.getElementById('respuestaCorreo');
    const respuestaTelefono = document.getElementById('respuestaTelefono');
    const respuestaEdad = document.getElementById('respuestaEdad');

    const nombres = localStorage.getItem('nombres');
    const apellidos = localStorage.getItem('apellidos');
    const correo = localStorage.getItem('correo');
    const telefono = localStorage.getItem('telefono');
    const edad = localStorage.getItem('edad');

    respuestaNombres.textContent = nombres;
    respuestaApellidos.textContent = apellidos;
    respuestaCorreo.textContent = correo;
    respuestaCorreo.href = `mailto:${correo}`;
    respuestaTelefono.textContent = telefono;
    respuestaTelefono.href = `tel:${telefono}`;
    respuestaEdad.textContent = `Edad: ${edad} años`;
});