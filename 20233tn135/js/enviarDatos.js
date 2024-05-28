
document.addEventListener("DOMContentLoaded", () => {

  const getParameter = (key) => {
    const address = window.location.search;
    const parameterList = new URLSearchParams(address);
    return parameterList.get(key);
  }

  // elementos de la pagina de registro
  const nombres = getParameter("nombres");
  const apellidos = getParameter("apellidos");
  const correo = getParameter("correo");
  const fechaNacimiento = getParameter("fechaNacimiento");
  const telefono = getParameter("telefono");
  const contraseña = getParameter("contraseña");
  const repetirContraseña = getParameter("repetirContraseña");

  // elementos de la pagina resultados
  const verNombre = document.getElementById("verNombre");
  const verApellido = document.getElementById("verApellido");
  const verCorreo = document.getElementById("verCorreo");
  const verTelefono = document.getElementById("verTelefono");
  const verEdad = document.getElementById("verEdad");
  const coincidenciaContra = document.getElementById("coincidenciaContra");
  const contraSegura = document.getElementById("contraSegura");

  verNombre.innerText = nombres;
  verApellido.innerText = apellidos;
  verCorreo.innerText = correo;
  verCorreo.setAttribute("href", `mailto:${correo}`);
  verTelefono.innerText = telefono;
  verTelefono.setAttribute("href", `tel:${telefono}`);
  coincidenciaContra.innerText = contraseña;
  contraSegura.innerText = repetirContraseña;  

  if (contraseña === repetirContraseña) {
    coincidenciaContra.innerText = "Contraseña igual";
  } else {
    coincidenciaContra.innerText = "Contraseña no igual";
  }
  if (contraseña.length > 5 && repetirContraseña.length > 5) {
    contraSegura.innerText = "Contraseña segura";
  } else {
    contraSegura.innerText = "Contraseña insegura";
  }

  const fechaUsuario = new Date(fechaNacimiento);
  const fechaActual = new Date();
  const diferencia = fechaActual.getFullYear() - fechaUsuario.getFullYear();
  verEdad.innerText = `Su edad: ${diferencia} años.`;
}); 