document.addEventListener('DOMContentLoaded' , () => {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit' , async (event) => {
        event.preventDefault(); 

           
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        
     
        const datos ={
            nombre: nombre,

            
            email: email
        };

        try {
            
            const respuesta = await fetch('https://webhook.site/b53ba123-9bf4-4b2f-b6ab-06bc519ca48a', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/jason'
                },
                body: JSON.stringify(datos) 
            });

            
            if (respuesta.ok){
                const datosRespuesta = await respuesta.json();
                document.getElementById('respuesta').innerText = 'Datos enviados correctamente: '
                + JSON.stringify(datosRespuesta);
            }else {
                document.getElementById('respuesta').innerText = 'Error al enviar los datos';
            }
        } catch (error){
      
            console.error('Error: ' , error);
            document.getElementById('respuesta').innerText = 'Error al enviar los datos: ' +
            error.message;

        }
    });
});
