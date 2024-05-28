document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();

    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var telefono = document.getElementById("telefono").value;
    var user = document.getElementById("user").value;
    var contra = document.getElementById("contra").value;
    var repcontra = document.getElementById("repcontra").value;


    window.location.href = "verPersona.html?" +
        "nombres=" + nombres +
        "&apellidos=" + apellidos +
        "&email=" + email +
        "&nacimiento=" + nacimiento +
        "&telefono=" + telefono +
        "&user=" + user +
        "&contra=" + contra +
        "&repcontra=" + repcontra;
});


