// // collego i miei elementi del dom
// const jumbo = document.getElementById("jumbo");
// const arrowRight = document.getElementById("arrow-right");
// const arrowLeft = document.getElementById("arrow-left");

// // variabile contatore
// let counter = 1;

// // variabile che salva le immagini stampate
// let pictureHTML = "";

// // array di immagini
// const pictureArray = [];

// // ciclo for che crea le immagini
// for (let i = 0; i < images.length; i++) {
//   const picture = images[i].image;

//   // riempio il mio array di immagini
//   pictureArray.push(picture);

//   // operatore ternario di attivazione immagine
//   let activePicture = i == counter ? "d-block" : "d-none";

//   pictureHTML += `<img class="${activePicture}" src="./${pictureArray[i]}">`;
// }

// jumbo.innerHTML = pictureHTML;

// // pulsnate next
// arrowRight.addEventListener("click", function () {
//   // variabile d-block
//   const allPicture = document.querySelectorAll(".carousel");

//   // recupero le slide con display block e la rimuovo
//   const blockPicture = pictureArray[counter];
//   blockPicture.classList.add("d-none");

//   // incremento la variabile counter
//   counter++;

//   // ciclo infinito alle slide
//   if (counter >= pictureArray.length) {
//     counter = 0;
//   }
// });

// array di immagini
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// elemnti del dom
const containerImmagini = document.getElementById("container-immagini");

const frecciaAvanti = document.getElementById("avanti");
const frecciaIndietro = document.getElementById("indietro");

// variabile che attiva le immagini
let immagineAttiva = 0;

// ciclo infinito del carosello
images.forEach((immagine, indice) => {
  // creo il nodoHTML
  const immagineElemento = document.createElement("div");
  immagineElemento.classList.add("immagine");

  if (indice == immagineAttiva)
    immagineElemento.classList.add("immagine-attiva");

  immagineElemento.innerHTML = `
  <img src="./${immagine.image}" class="" alt="" />

  <div class="presentazione">
    <h2>${immagine.title}</h2>
    <p>${immagine.text}</p>
  </div>`;

  // aggiungo all'array il nodoHTML
  immagine.nodoHTML = immagineElemento;

  // appendo il nodo al container
  containerImmagini.append(immagineElemento);
});

// collego le freccie
// DESTRA AVANTI
frecciaAvanti.addEventListener("click", vaiAvanti);

function vaiAvanti() {
  // rimuovo la classe immagine-attiva
  const vecchiaImmagine = images[immagineAttiva].nodoHTML;
  vecchiaImmagine.classList.remove("immagine-attiva");

  // incremento l'indice
  immagineAttiva++;

  if (immagineAttiva >= images.length) immagineAttiva = 0;

  // riassegno la classe attiva
  const nuovaImmagine = images[immagineAttiva].nodoHTML;
  nuovaImmagine.classList.add("immagine-attiva");
}

// SINISTRA INDIETRO
frecciaIndietro.addEventListener("click", vaiIndietro);

function vaiIndietro() {
  // rimuovo la classe immagine-attiva
  const vecchiaImmagine = images[immagineAttiva].nodoHTML;
  vecchiaImmagine.classList.remove("immagine-attiva");

  // decremento l'indice
  immagineAttiva--;

  if (immagineAttiva < 0) immagineAttiva = images.length - 1;

  // riassegno la classe attiva
  const nuovaImmagine = images[immagineAttiva].nodoHTML;
  nuovaImmagine.classList.add("immagine-attiva");
}
