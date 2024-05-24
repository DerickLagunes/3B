const d = document, c = console;
const imgArr = [
  "https://i.redd.it/iris-haxorus-vs-cynthias-garchomp-an-analysis-on-why-it-v0-898564ijgnjb1.jpg?width=1908&format=pjpg&auto=webp&s=e4feecddcad40bb4a1cde9d1445c481009190aa6",
  "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2020/02/pokemon_anime_10.jpg?resize=740%2C389&ssl=1",
  "https://cdn.alfabetajuega.com/alfabetajuega/2021/06/Ash-VS-Corelia-Pikachu-VS-Mega-Lucario-2.jpg",
  "https://pbs.twimg.com/media/Ef8IOJhWoAAMpct.jpg",
  "https://areajugones.sport.es/wp-content/uploads/2020/11/Anime-de-Pokemon-Copa-Junior-Dragonite-Iris-vs-Krookodile-Ash.jpg"
];

const $img = d.getElementById("img_carrusel");

$img.setAttribute("src",imgArr[0]); 

const $posteriorBtn = d.getElementById("posterior");
const $anteriorBtn = d.getElementById("anterior");

let positionImg=0; 

function posterior(){
  if(positionImg == imgArr.length-1){
    positionImg=0;
  }
  positionImg++;  
  $img.setAttribute("src",imgArr[positionImg]);
}

function anterior(){
  if(positionImg==0){
    positionImg=imgArr.length;
  }
  positionImg--;
  $img.setAttribute("src",imgArr[positionImg]);  
}

$posteriorBtn.addEventListener("click",posterior);
$anteriorBtn.addEventListener("click",anterior);