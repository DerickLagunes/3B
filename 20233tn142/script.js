const images = [
    "https://img.freepik.com/fotos-premium/conejo-dibujos-animados-grandes-ojos-sentado-suelo-generativo-ai_900814-6582.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaMbahaZQvQVfK3tX2pNW-nJE0NYbeNe4sQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw2UI2kqWihTtChmqyFTJDGcwQ_X7vUPuww&usqp=CAU",
    "https://www.shutterstock.com/image-vector/cheerful-dog-sitting-cartoon-character-260nw-2324794031.jpg",
    "https://media.istockphoto.com/id/1189892499/es/vector/lindo-le%C3%B3n-caricatura-dando-pulgar-hacia-arriba.jpg?s=612x612&w=0&k=20&c=kS0Cmkry9TgVUIGmWI7ddveO8_g9gFHlVXj39GQTaDI="
  ];
  
  const imageElement = document.getElementById("imagen");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  
  let currentIndex = 0;
  
  function showImage() {
    imageElement.src = images[currentIndex];
  }
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage();
  });
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage();
  });
  
  showImage();
  