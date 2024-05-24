const Urls = [
    'img/1159327.jpg',
    'img/alter.png',
    'img/fondo4.jpg',
    'img/598969.jpg',
    'img/d0d703b801204e9cab28713f316fb217.png'
];

let currentIndex = 0;

const slide = document.getElementById('slide');

    function showImage(index) {
        slide.src = Urls[index];
    }
    function showPreviousImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : Urls.length - 1;
        showImage(currentIndex);
    }
    function showNextImage() {
        currentIndex = (currentIndex < Urls.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

showImage(currentIndex);