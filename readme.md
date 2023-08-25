# TRACCIA

Dato un array di oggetti letterali con:

- url dell'immagine
- titolo
- descrizione
  Creare un carosello come nella foto allegata.

## Milestone 0:

Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Consiglio: gestite bene il tempo. si può sempre tornare in seguito a migliorare la grafica, ma dedicargli molto tempo da subito può farvi rimanere indietro.

## SVOLGIMENTO

- creo un container
- inserisco un div principale dove scorrono le immagini
- bonus: inserisco un div laterale dove si vedranno tutte le immagini caricate
- creo 2 sliders

## Milestone 1:

Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

## SVOLGIMENTO

- creo un ciclo for che:
  - mi crea l'immagine utilizzando le informazioni del mio array
- aggiungo 2 _addEventListener_ che:
  - uno mi farà andare all'immagine sucessiva
  - l'altro all'immagine precedente

## Milestone 2:

Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

## SVOLGIMENTO

- creo una variabile che da una posizione alle immagini
- aggiungo delle consizioni _if_ che mi riporteranno il contatore delle immagini al punto di partenza quando finirà il ciclo

## BONUS 1:

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l'immagine corrispondente.

## BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

## BONUS 3:

Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
