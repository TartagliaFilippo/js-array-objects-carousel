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
const containerMiniature = document.getElementById("container-miniature");

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

  // creazione delle miniature
  const miniaturaElemento = document.createElement("div");
  miniaturaElemento.classList.add("miniatura");
  miniaturaElemento.innerHTML = `<img src="./${immagine.image}" class="" alt="" /> `;
  miniaturaElemento.setAttribute("data-index", indice);

  if (indice == immagineAttiva)
    miniaturaElemento.classList.add("immagine-attiva");

  // gestisco il click
  miniaturaElemento.addEventListener("click", function () {
    // recupero l'incice cliccato
    const indice = this.getAttribute("data-index");

    // attivo l'immagine
    vaiImmagine(indice);
  });

  // della miniatura
  miniaturaElemento.addEventListener("click", function () {
    indice = this.getAttribute("data-index");
  });

  // aggiungola miniatura al nodo html
  immagine.nodoMiniatura = miniaturaElemento;

  // appendo immagini e miniature
  containerImmagini.append(immagineElemento);
  containerMiniature.append(miniaturaElemento);
});

// collego le freccie
// DESTRA AVANTI

function vaiAvanti() {
  // controllo del dell'immagine su l'array
  let prossimoIndice = immagineAttiva + 1;
  if (prossimoIndice >= images.length) prossimoIndice = 0;

  //prossima immagine
  vaiImmagine(prossimoIndice);
}
function vaiIndietro() {
  // controllo dell'immagine che sia nell'array
  let indicePrecedente = immagineAttiva - 1;
  if (indicePrecedente < 0) indicePrecedente = images.length - 1;

  // immagine precendente
  vaiImmagine(indicePrecedente);
}
function vaiImmagine(indice) {
  // tolgo le classi da immagini e miniature
  const vecchiaImmagine = images[immagineAttiva].nodoHTML;
  vecchiaImmagine.classList.remove("immagine-attiva");
  const vecchiaMiniatura = images[immagineAttiva].nodoMiniatura;
  vecchiaMiniatura.classList.remove("immagine-attiva");

  // setto la slide attiva
  immagineAttiva = indice;

  // classe attiva a immagine e miniatura
  const nuovaImmagine = images[immagineAttiva].nodoHTML;
  nuovaImmagine.classList.add("immagine-attiva");
  const nuovaMiniatura = images[immagineAttiva].nodoMiniatura;
  nuovaMiniatura.classList.add("immagine-attiva");
}

// DESTRA AVANTI
frecciaAvanti.addEventListener("click", vaiAvanti);

// SINISTRA INDIETRO
frecciaIndietro.addEventListener("click", vaiIndietro);
