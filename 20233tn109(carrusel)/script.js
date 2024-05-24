// Arreglo con las URLs de las imágenes
const Urls = [
    'img/1159327.jpg',
    'img/alter.png',
    'img/fondo4.jpg',
    'img/598969.jpg',
    'img/d0d703b801204e9cab28713f316fb217.png'
];

// Índice actual de la imagen
let currentIndex = 0;

// Referencia a la etiqueta img
const slide = document.getElementById('slide');

// Función para mostrar la imagen en el índice actual
function showImage(index) {
    slide.src = Urls[index];
}

// Función para mostrar la imagen anterior
function showPreviousImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : Urls.length - 1;
    showImage(currentIndex);
}

// Función para mostrar la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex < Urls.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Agregar event listeners a los botones
document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

// Mostrar la primera imagen al cargar la página
showImage(currentIndex);
