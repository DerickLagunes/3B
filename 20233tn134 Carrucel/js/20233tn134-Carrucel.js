document.addEventListener('DOMContentLoaded', (event) => {
    const imagenes = [
        'img/Democracy-1.jpg',
        'img/Democracy-2.jpg',
        'img/Democracy-3.jpg',
        'img/Democracy-4.jpg',
        'img/Democracy-5.jpg',

    ];

    let imagenCarrucel = 0;

    const carouselImagen = document.getElementById('carouselImagen');
    const anteriorBoton = document.getElementById('anteriorBoton');
    const siguienteBoton = document.getElementById('siguienteBoton');

    const updateImage = () => {
        carouselImagen.src = imagenes[imagenCarrucel];
    };

    anteriorBoton.addEventListener('click', () => {
        imagenCarrucel = (imagenCarrucel === 0) ? imagenes.length - 1 : imagenCarrucel - 1;
        updateImage();
    });

    siguienteBoton.addEventListener('click', () => {
        imagenCarrucel = (imagenCarrucel === imagenes.length - 1) ? 0 : imagenCarrucel + 1;
        updateImage();
    });

    updateImage();
});