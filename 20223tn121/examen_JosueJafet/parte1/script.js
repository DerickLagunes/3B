const img = [
    'img/img1.jpg', 
    'img/img2.jpg', 
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg'
            
];

const imgElement1 = document.getElementById('img_id1');
const imgElement2 = document.getElementById('img_id2');
const juegoBtn = document.getElementById('juego');
const resultadoElement = document.getElementById('resultado');
// (opcion1 === 'img/img1.jpg' && opcion2 === 'img/img2.jpg') ||
function jugarPiedraPapelTijera(opcion1, opcion2) {
    if (opcion1 === opcion2) {
        return "Empate";
    } else if (
        //gana 2
        (opcion1 === 'img/img2.jpg' && opcion2 === 'img/img1.jpg') ||
        //gana 3 
        (opcion1 === 'img/img3.jpg' && opcion2 === 'img/img2.jpg') ||
        (opcion1 === 'img/img3.jpg' && opcion2 === 'img/img1.jpg') ||
        //gana 4
        (opcion1 === 'img/img4.jpg' && opcion2 === 'img/img1.jpg') ||
        (opcion1 === 'img/img4.jpg' && opcion2 === 'img/img2.jpg') ||
        (opcion1 === 'img/img4.jpg' && opcion2 === 'img/img3.jpg') ||
        // gana 5
      (opcion1 === 'img/img5.jpg' && opcion2 === 'img/img1.jpg') ||
      (opcion1 === 'img/img5.jpg' && opcion2 === 'img/img2.jpg') ||
      (opcion1 === 'img/img5.jpg' && opcion2 === 'img/img3.jpg') ||
      (opcion1 === 'img/img5.jpg' && opcion2 === 'img/img4.jpg') ||
      //gana 6
      (opcion1 === 'img/img6.jpg' && opcion2 === 'img/img1.jpg') ||
      (opcion1 === 'img/img6.jpg' && opcion2 === 'img/img2.jpg') ||
      (opcion1 === 'img/img6.jpg' && opcion2 === 'img/img3.jpg') ||
      (opcion1 === 'img/img6.jpg' && opcion2 === 'img/img4.jpg') ||
      (opcion1 === 'img/img6.jpg' && opcion2 === 'img/img5.jpg') 
   
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}



function mostrarImagenesAleatorias() {
    const indice1 = Math.floor(Math.random() * img.length);
    let indice2;
    do {
        indice2 = Math.floor(Math.random() * img.length);
    } while (indice2 === indice1);

    const opcion1 = img[indice1];
    const opcion2 = img[indice2];

    imgElement1.src = opcion1;
    imgElement2.src = opcion2;

    const resultado = jugarPiedraPapelTijera(opcion1, opcion2);
    resultadoElement.textContent = resultado;
}

juegoBtn.addEventListener('click', mostrarImagenesAleatorias);

// Mostrar imágenes aleatorias al cargar la página
mostrarImagenesAleatorias();