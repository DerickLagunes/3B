
let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");
let contenedor = document.querySelector(".carousel-slide");
let img = ["img/alan1.jpg","img/alan2.jpeg","img/alan3.jpg","img/alan4.jpg","img/alan5.jpeg"];

let contador = 0;

img.forEach((arreglo) => {
    let img1 = document.createElement("img");
    img1.src = arreglo;
    img1.alt = "Autos deportivos";
    contenedor.appendChild(img1);
});

anterior.addEventListener("click", () => {
    if (contador >= img.length - 1) return;
    contador++;
    contenedor.style.transform = `translateX(${-contador * 100}%)`;
  });
  
  siguiente.addEventListener("click", () => {
    if (contador <= 0) return;
    contador--;
    contenedor.style.transform = `translateX(${-contador * 100}%)`;
  });