
let anterior = document.getElementById("siguiente");
let siguiente = document.getElementById("anterior");
let contenedor = document.querySelector(".carousel-slide");

let img = ["jsc/img/alan1.jpg","jsc/img/alan2.jpg","jsc/img/alan3.jpg","jsc/img/alan4.jpg","jsc/img/ala51.jpg"];

img.forEach((arreglo) => {
    let img = document.createElement("img");
    img.src = arreglo;
    img.alt = "Autos deportivos";
    contenedor = img.appendChild(img);
});

let contador = 0; 

anterior.addEventListener("click", () => {
    if (contador >= img.length - 1) return;
    contador++;
    contenedor.style.transform = `translateX(${-contador * 100}%)`;
  });
  
  prevBtn.addEventListener("click", () => {
    if (contador <= 0) return;
    contador--;
    contenedor.style.transform = `translateX(${-contador * 100}%)`;
  });
  