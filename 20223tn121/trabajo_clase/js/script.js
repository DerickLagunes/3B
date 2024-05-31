

        // Función que se ejecuta cuando se hace clic en el botón para mostrar datos
        function mostrarDatos() {
          const params = new URLSearchParams(window.location.search);
          const nombres = params.get('nombres');
          const apellidos = params.get('apellidos');
          const matricula = params.get('maticula');

          document.getElementById('nombres').textContent= datos.nombre ;
          document.getElementById('apellidos').textContent= datos.apellido;
          document.getElementById('matricula').textContent= datos.matricula;
        }