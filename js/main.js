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

// collego i miei elementi del dom
const jumbo = document.getElementById("jumbo");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

// variabile contatore
let conut = 0;

// variabile che salva le immagini stampate
let pictureHTML = "";

// ciclo for che crea le immagini
for (let i = 0; i < images.length; i++) {
  const picture = images[i].image;

  // operatore ternario di attivazione immagine
  let activePicture = i == conut ? "d-block" : "d-none";

  pictureHTML += `<img class="${activePicture}" src="${picture}">`;
}

jumbo.innerHTML = pictureHTML;
