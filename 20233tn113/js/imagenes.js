var imagenesDisney = ['img/laura1.jpeg', 'img/laura2.jpeg', 'img/laura3.jpeg', 'img/laura4.jpg', 'img/laura5.jpg'],
cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click', e => {
        let anterior = contenedor.querySelector('.anterior'),
        siguiente = contenedor.querySelector('.siguiente'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt == anterior){
            if(cont > 0){
                img.src = imagenesDisney[cont - 1];
                cont--;
            }else {
                img.src = imagenesDisney[imagenesDisney.length - 1];
                cont = imagenesDisney.length - 1;
            }
        }else if(tgt == siguiente){
            if(cont < imagenesDisney.length - 1){
                img.src = imagenesDisney[cont + 1];
                cont++;
            }else {
                img.src = imagenesDisney[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
});