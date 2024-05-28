// Este es el código que me permite obtener los
// valores de los inut registrados en la URL
// los cuales son enviados con el método GET
getParameter = (key) => {
    address = window.location.search; // url de la ventana actual
    // Objeto de tipo URLSearchParams
    parameterList = new URLSearchParams(address);
    // Regresa el valor del parámetro “key”
    return parameterList.get(key);
}