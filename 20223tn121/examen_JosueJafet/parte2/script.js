const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");


function suma() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    resultado.value = num1 + num2;
}


function resta() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    resultado.value = num1 - num2;
}


function multiplicacion() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    resultado.value = num1 * num2;
}

function division() {
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    resultado.value = num1 / num2;
}

document.getElementById("suma").addEventListener("click", suma);
document.getElementById("resta").addEventListener("click", resta);
document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
document.getElementById("division").addEventListener("click", division);