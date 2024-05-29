// Arreglo de URLs de las imágenes
const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg'
];

// Índice de la imagen actual
let currentIndex = 0;

// Referencias a elementos del DOM
const imgElement = document.getElementById('slideshow');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para actualizar la imagen mostrada
function updateImage() {
    imgElement.src = images[currentIndex];
}

// EventListeners para los botones
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Inicializar la presentación con la primera imagen
updateImage();