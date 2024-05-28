const urlParams = new URLSearchParams(window.location.search);
const nombrePersona = urlParams.get('nombrePersona');
const apellidos = urlParams.get('apellidos');
const email = urlParams.get('email');
const fechaNacimiento = urlParams.get('fechaNacimiento');
const telefono = urlParams.get('telefono');
const contrasenia = urlParams.get('contrasenia');
const contraseniaRepetida = urlParams.get('contraseniaRepetida');

console.log('Nombre(s):', nombrePersona);
console.log('Apellidos:', apellidos);
console.log('Correo:', email);
console.log('Fecha de Nacimiento:', fechaNacimiento);
console.log('Teléfono:', telefono);
console.log('Contraseña:', contrasenia);
console.log('Repetir Contraseña:', contraseniaRepetida);

if (nombrePersona && apellidos && email && fechaNacimiento && telefono && contrasenia && contraseniaRepetida) {
    document.getElementById('nombrePersona').textContent = nombrePersona;
    document.getElementById('apellidos').textContent = apellidos;
    document.getElementById('email').textContent = email;
    document.getElementById('email').href = `mailto:${email}`;
    document.getElementById('telefono').textContent = telefono;
    document.getElementById('telefono').href = `tel:${telefono}`;

    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    document.getElementById('edad').textContent = `Edad: ${edad} años`;

    const mensajeContrasenia = document.getElementById('mensajeContrasenia');

    if (contrasenia !== contraseniaRepetida && contrasenia.length > 5) {
        mensajeContrasenia.textContent = 'Las contraseñas no coinciden';
    } else if (contrasenia.length < 5 && contrasenia == contraseniaRepetida) {
        mensajeContrasenia.textContent = '¡Su contraseña es insegura!';
    } else if (contrasenia !== contraseniaRepetida && contrasenia.length < 5){
        mensajeContrasenia.textContent = 'Las contraseñas no coinciden y ¡Su contraseña es insegura!';
    } else {
        mensajeContrasenia.textContent = 'Registro exitoso';
    }
    
} else {
    document.getElementById('mensajeContrasenia').textContent = 'Faltan datos en el formulario';
}