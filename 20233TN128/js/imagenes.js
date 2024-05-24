var imagenes = ['img/paisaje1.jpg', 'img/paisaje2.jpg', 'img/paisaje3.jpg', 'img/paisaje4.jpg', 'img/paisaje5.jpg', 'img/paisaje6.jpg'],
cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let anterior = contenedor.querySelector('.anterior'),
        siguiente = contenedor.querySelector('.siguiente'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt == anterior){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            }else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if(tgt == siguiente){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else {
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
});