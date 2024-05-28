const getParameter = (key)=>{ // Toma un parámetro de la URL y lo devuelve.
    let address = window.location.search;
    let parameterList = new URLSearchParams(address); // Obtiene los parámetros de la URL.
    return parameterList.get(key);
};

// Obtiene los valores de los parámetros.
let nombres = getParameter("nombres");
let apellidos = getParameter("apellidos");
let email = getParameter("email");
let fechaNacimiento = getParameter("fechaNacimiento");
let telefono = getParameter("telefono");
let usuario = getParameter("usuario");
let password = getParameter("password");
let password2 = getParameter("password2");

// Obtiene las referencias de los elementos HTML.
const $nombresP = document.getElementById("nombresP");
const $apellidosP = document.getElementById("apellidosP");
const $emailP = document.getElementById("emailP");
const $telefonoP = document.getElementById("telefonoP");
const $usuarioP = document.getElementById("usuarioP");
const $passwordsP = document.getElementById("passwordsP");
const $edad = document.getElementById("edad");

// Valida las contraseñas
if (password == password2 && password.length > 5){
    $passwordsP.innerText = "Las contraseñas coinciden :)";
}else if(password.length < 5 && password == password2){
    $passwordsP.innerText = "Las contraseñas coinciden pero son inseguras, menos de 5 caracteres";
}else {
    $passwordsP.innerText = "Las contraseñas son diferentes :(";
}

// Se calcula la edad a partir de la fecha de nacimiento.
let fecha = new Date(fechaNacimiento); // Se crea objeto 'Date' llamado 'fecha'.
fecha = fecha.getTime(); // 'getTime()' devuelve el número en milisegundos.
let nuevaFecha = new Date();
nuevaFecha = nuevaFecha.getTime(); 
let resta = nuevaFecha - fecha;
let edad = Math.floor(resta / (1000 * 60 * 60 * 24 * 365.25));
// Se convierten los milisegundos en años. Y se divide la diferencia por el número de milisegundos en un año.
// 'Math.floor()' redondea hacia bajo para no tener decimales.

// Se actualizan los textos de las etiquetas, con la información obtenida.
$nombresP.innerText = `Nombres: ${nombres}`;
$apellidosP.innerText = `Apellidos: ${apellidos}`;
$edad.innerText = `Edad: ${edad} años`;
$emailP.innerText = `Mailto: Email: ${email}`;
$telefonoP.innerText = `tel: Teléfono: ${telefono}`;