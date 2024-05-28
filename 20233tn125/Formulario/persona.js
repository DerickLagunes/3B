document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regisForm'); //Mencion a que elemento estamos haciendo referencia.
    const mensajeError = document.getElementById('mensajeError'); //Selecciona el elemento de error.

if (form) {  // Verifica si el formulario está presente
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = form.nombredePersona.value;  // Obtienen  el valor del campo de texto con el ID 
        //Declaración de una variable: const nombre
        //form.nombredePersona: Accede a ese ID especifio del formulario antes referenciado.
        //.value: Especificamos que ingresamos al valor que tiene ese ID
        const apellidos = form.apellidosPersona.value;
        const correo = form.correoPersona.value;
        const fechaNacimiento = new Date(form.fechaPersona.value);
        const telefono = form.telefonoPersona.value;
        const usuario = form.usuarioPersona.value;
        const contraseña = form.contraseñaPersona.value;
        const reContraseña = form.reContraseñaPersona.value;

        mensajeError.textContent = ''; //El mensaje de error se mostrara vacio si no se cumple ninguna condición.

        
        //Si la contraseña y la confirmación de contraseña no son iguales el contenido del error mensaje sera:
        //"Las contraseñas no coinciden"
        if (contraseña !== reContraseña) {
            mensajeError.textContent = 'Las contraseñas no coinciden';
            return;
        }


        //Si la contraseña tiene menos de 5 caracteres el contenido del error del mensaje será:
        // "La contraseña es insegura"
        if (contraseña.length < 5) {
            mensajeError.textContent = 'La contraseña es insegura';
            return;
        }

        
        // Calcula la edad del usuario a partir de su fecha de nacimiento
        const edad = calcularEdad(fechaNacimiento);

       // Crea un objeto con los datos del usuario
        const datosUsuario = {
            nombre,
            apellidos,
            correo,
            telefono,
            edad,
        };

// Llama a la función para mostrar los datos del usuario en una nueva página
        mostrarDatosUsuario(datosUsuario);
    });

    function calcularEdad(fechaNacimiento) {
        const hoy = new Date(); // Obtiene la fecha actual
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); // Calcula la diferencia en años
        const mes = hoy.getMonth() - fechaNacimiento.getMonth(); // Calcula la diferencia en meses
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) { // Si el mes actual es anterior al mes de
        // nacimiento, o es el mismo mes pero el día actual es anterior al día de nacimiento, se resta un año
            edad--;
        }
        //Regresa la edad calculada
        return edad;
    }

// Función para mostrar los datos del usuario en una nueva ventana/página
    function mostrarDatosUsuario(datos) {
        const urlParams = new URLSearchParams(datos).toString();
        window.location.href = `verPersona.html?${urlParams}`;
    }

    } else if (window.location.pathname.endsWith('verPersona.html')) {  // Verifica si estamos en la página verPersona.html
        const urlParams = new URLSearchParams(window.location.search);

        const nombre = urlParams.get('nombre');
        const apellidos = urlParams.get('apellidos');
        const correo = urlParams.get('correo');
        const telefono = urlParams.get('telefono');
        const edad = urlParams.get('edad');

        document.getElementById('nombre').textContent = "Nombre: " + nombre;
        document.getElementById('apellidos').textContent = "Apellidos: " + apellidos;
        document.getElementById('correo').innerHTML = `Correo: <a href="mailto:${correo}">${correo}</a>`;
        document.getElementById('telefono').innerHTML = `Teléfono: <a href="tel:${telefono}">${telefono}</a>`;
        document.getElementById('edad').textContent = "Edad: " + edad;
    }
});
