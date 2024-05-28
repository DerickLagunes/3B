const getParameter = (key) => {
    let address = window.location.search;

    let parameterList = new URLSearchParams(address);

    return parameterList.get(key);
};

let nombrePersona = getParameter("nombrePersona"),
    apellidosPersona = getParameter("apellidosPersona"),
    emailPersona = getParameter("emailPersona"),
    fechaNacimiento = getParameter("fechaNacimiento"),
    numeroTelefono = getParameter("numeroTelefono"),
    usuarioPersona = getParameter("usuarioPersona"),
    contraseniaPersona = getParameter("contraseniaPersona"),
    confirmacioncontra = getParameter("confirmacioncontra");
const $nombres = document.getElementById("nombres"),
    $apellidos = document.getElementById("apellidos"),
    $correo = document.getElementById("correo"),
    $telefono = document.getElementById("numero"),
    $edad = document.getElementById("edad"),
    $contrasenias = document.getElementById("contrasenias");

    console.log(fechaNacimiento);
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();
    let añoNacimiento = parseInt(fechaNacimiento.substring(0, 4));
    let edad = añoActual - añoNacimiento;
 
    console.log("Edad:", edad);
    

$nombres.innerText = `Nombre: ${nombrePersona}`;
$apellidos.innerText = `Apellidos: ${apellidosPersona}`;

$correo.innerText = `Email: ${emailPersona}`;
$correo.setAttribute("href", `mailto:${emailPersona}`);


$telefono.innerText = `Número de teléfono: ${numeroTelefono}`;

$correo.setAttribute("href", `tel:${numeroTelefono}`);

$edad.innerText = `Edad: ${edad} años`;

if (contraseniaPersona !== confirmacioncontra) {
    $contrasenias.innerText = "Sus contraseñas no coinciden";
} else if 
     (contraseniaPersona.length < 5) {
        $contrasenias.innerText =  "Su contraseña es insegura";
    } else {
        $contrasenias.innerText = "Su contraseña es segura :D";
}
