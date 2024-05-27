"use strict";
const d = document, c = console,w=window;

const getParameter = (key)=>{
    let address = w.location.search;

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
contra2 = getParameter("contra2");

const $nombres = d.getElementById("nombres"),
$apellidos = d.getElementById("apellidos"),
$correo = d.getElementById("correo"),
$telefono = d.getElementById("telefono"),
$edad = d.getElementById("edad"),
$contras = d.getElementById("contras");

c.log(fechaNacimiento);

let fechaNacimientoDate = new Date(fechaNacimiento);
fechaNacimientoDate = fechaNacimientoDate.getTime();

let fechaActual = new Date();
fechaActual = fechaActual.getTime();
let diferencia = fechaActual - fechaNacimientoDate;
// c.log(diferencia);
let edad = Math.floor(diferencia / ((1000 * 60 * 60 * 24 * 365.25)));
// c.log(edad);

$nombres.innerText = `Nombre(s): ${nombrePersona}`;
$apellidos.innerText = `Apellidos: ${apellidosPersona}`;

$correo.innerText = `Email: ${emailPersona}`;
$correo.setAttribute("href",`mailto:${emailPersona}`);


$telefono.innerText = `Teléfono: ${numeroTelefono}`;
$correo.setAttribute("href",`tel:${numeroTelefono}`);

$edad.innerText = `Edad: ${edad}`;

let mensajeContrasenia = "Contraseña: ";
if (contraseniaPersona != contra2){
    $contras.innerText =mensajeContrasenia + "Sus contraseñas no coinciden";
}else{
    if(contraseniaPersona.length < 5){
        $contras.innerText = mensajeContrasenia + "Su contraseña es insegura";
    }else{
        $contras.innerText = mensajeContrasenia + "Su contraseña es válida";
    }
}




