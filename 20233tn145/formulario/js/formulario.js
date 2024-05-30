window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);

    const name = urlParams.get('name');
    const lastName = urlParams.get('lastName');
    const email = urlParams.get('email');
    const birthdate = urlParams.get('birthdate');
    const pNumber = urlParams.get('pNumber');
    const userName = urlParams.get('userName');
    const password = urlParams.get('password');
    const password2 = urlParams.get('password2');

    const birthdateI = new Date(birthdate);
    const age = new Date().getFullYear() - birthdateI.getFullYear();
    const pElement = document.getElementById('mensaje');

    if (password !== password2) {
        pElement.innerText = "Las contraseñas no coinciden";
    } else if (password.length < 5) {
        pElement.innerText = "La contraseña es insegura";
    } else {
        document.getElementById('name').innerText = name;
        document.getElementById('lastName').innerText = lastName;
        document.getElementById('email').href = `email:${email}`;
        document.getElementById('email').innerText = email;
        document.getElementById('pNumber').href = `tel:${pNumber}`;
        document.getElementById('pNumber').innerText = pNumber;
        document.getElementById('age').innerText = `Edad: ${age} años`;
    }
}