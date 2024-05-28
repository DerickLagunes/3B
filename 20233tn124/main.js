function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
  }
  return edad;
}

function procesarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const correo = document.getElementById('correo').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const telefono = document.getElementById('telefono').value;
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;
  const confirmacionContrasena = document.getElementById('confirmacionContrasena').value;
  const mensaje = document.getElementById('mensaje');
  const resultado = document.getElementById('resultado');

  // Resetear el mensaje y resultado
  mensaje.textContent = '';
  resultado.innerHTML = '';

  // Validaciones de contraseña
  if (contrasena !== confirmacionContrasena) {
      mensaje.textContent = 'Las contraseñas no coinciden.';
      return;
  }

  if (contrasena.length < 5) {
      mensaje.textContent = 'La contraseña es insegura. Debe tener al menos 5 caracteres.';
      return;
  }

  // Calcular la edad
  const edad = calcularEdad(fechaNacimiento);

  // Mostrar los resultados
  resultado.innerHTML = `
      <h1>${nombre}</h1>
      <h2>${apellido}</h2>
      <p>Correo: <a href="mailto:${correo}">${correo}</a></p>
      <p>Teléfono: <a href="tel:${telefono}">${telefono}</a></p>
      <p>Edad: ${edad} años</p>
  `;

  // Ocultar el formulario y mostrar los resultados
  document.getElementById('questionnaire').style.display = 'none';
  resultado.style.display = 'block';
}