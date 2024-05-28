document.addEventListener("DOMContentLoaded", function () {
  const contraseña = document.getElementById("contraseña");
  const repetir = document.getElementById("repetirContraseña");
  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (contraseña.value === repetir.value) {
      alert("Tu contraseña es igual.");
      formulario.submit();
    } else {
      alert("Tu contraseña no es igual.");
    }
  });
});