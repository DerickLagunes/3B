document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");
    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const correo = document.getElementById("correo").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const telefono = document.getElementById("telefono").value;
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        const repetirContrasena = document.getElementById("repetirContrasena").value;

        if (contrasena !== repetirContrasena) { // AAAA :OOO :3 xd no se q 
            alert("La contraseña no coincide");
            return;
        }

        if (contrasena.length < 5) {
            alert("Oye, tu contraseña no es segura :p");
            return;
        }

        const queryParams = new URLSearchParams({
            nombres,
            apellidos,
            correo,
            fechaNacimiento,
            telefono,
            usuario,
            contrasena,
            repetirContrasena
        });

        window.location.href = `verPersona.html?${queryParams}`;
    });
});
// el dom dun doom
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const nombres = params.get("nombres");
    const apellidos = params.get("apellidos");
    const correo = params.get("correo");
    const telefono = params.get("telefono");
    const fechaNacimiento = params.get("fechaNacimiento");
    const usuario = params.get("usuario");
    const contrasena = params.get("contrasena");

    const userInfo = document.getElementById("userInfo");

    if (contrasena !== params.get("repetirContrasena")) {
        userInfo.innerHTML = "<p>Las contraseña no coincide</p>";
    } else if (contrasena.length < 5) {
        userInfo.innerHTML = "<p>Oye, tu contraseña no es segura :p</p>";
    } else {
        userInfo.innerHTML = `
            <h1>${nombres}</h1>

            <h2>${apellidos}</h2>

            <p>Correo: ${correo}</a></p>

            <p>Teléfono: ${telefono}</p>

            <p id="edad">Edad actual: ${calcularEdad(fechaNacimiento)}</p>
        `;
    }
});

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}
