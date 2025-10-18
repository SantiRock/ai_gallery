const title = document.getElementById("title")
const text = document.getElementById("text")
const cmds = document.getElementById("cmds")
const list = document.getElementById("list")
const nav = document.getElementById('nav')
const up = document.getElementById('up')
const down = document.getElementById("down")
const fullscreen = document.getElementById("fullscreen")
const exitfs = document.getElementById("exitfs")

let lang = (navigator.language || navigator.userLanguage).substring(0, 2);
if (!['es','en', 'fr', 'pt'].includes(lang)) lang = 'en'

const texts = {
  en:{
    title : "AI Gallery",
    text : "A selection of images I’ve created using artificial intelligence, as part of various creative explorations. <b>For the best experience, try fullscreen mode (FS) and navigate with your keyboard.</b>",
    cmds: "Shortcuts",
    nav: "<b>&larr; &rarr;</b> : navigation",
    up: "<b>&uarr;</b> : enter / exit fullscreen",
    down: "<b>&darr;</b> : open and close this window",
    fullscreen: "<b>space</b> : random mode",
    exitfs: "<b>esc</b> : exit fullscreen",
    mobile: "Some images I’ve created using artificial intelligence, as part of various creative explorations. <b>I recommend using fullscreen mode.</b><br>You can swipe to move between images.<br>Swipe up to enter or exit fullscreen mode.<br>Swipe down to reveal this menu."
  },
  es:{
    title : "Galeria IA",
    text : "Algunas imágenes que he generado con inteligencia artificial en diversos procesos creativos <b>Recomiendo el modo fullscreen FS y navegar con teclado.</b>",
    cmds: "Comandos de teclado :",
    nav: "<b>&larr; &rarr;</b> : navegación",
    up: "<b>&uarr;</b> : entrar / salir de fullscreen",
    down: "<b>&darr;</b> : abrir y cerrar esta ventana",
    fullscreen: "<b>space</b> : modo random",
    exitfs: "<b>esc</b> : salir de fullscreen",
    mobile: "Algunas imágenes que he generado con inteligencia artificial en diversos procesos creativos. <b>Recomiendo el modo fullscreen.</b> <br> Puedes pasar de imagen con touch.<br> Hacia arriba entras y sales a modo fullscreen. <br> Hacia abajo se muestra este menu."
  },
  fr:{
    title : "Galerie IA",
    text :"Quelques images que j’ai créées avec l’intelligence artificielle, au fil de différentes explorations créatives. <b>Pour une meilleure expérience, je recommande le mode plein écran (FS) et la navigation au clavier.</b>",
    cmds: "Commandes clavier :",
    nav: "<b>&larr; &rarr;</b> : navigation",
    up: "<b>&uarr;</b> : entrer / sortir du plein écran",
    down: "<b>&darr;</b> : abrir Ouvrir et fermer cette fenêtre",
    fullscreen: "<b>space</b> : mode aléatoire",
    exitfs: "quitter le plein écran",
    mobile: "Quelques images que j’ai créées avec l’intelligence artificielle, au fil de différentes explorations créatives. <b>Je recommande le mode plein écran.</b><br>Vous pouvez faire glisser pour passer d’une image à l’autre.<br>Faites glisser vers le haut pour entrer ou sortir du mode plein écran.<br>Faites glisser vers le bas pour afficher ce menu."
  },
  pt:{
    title : "Galeria IA",
    text : "Algumas imagens que criei com inteligência artificial, em diferentes explorações criativas.  <b>Para uma melhor experiência, recomendo o modo tela cheia (FS) e a navegação pelo teclado.</b>",
    cmds: "Comandos de teclado:",
    nav: "<b>&larr; &rarr;</b> : navegação",
    up: "<b>&uarr;</b> : entrar / sair do modo tela cheia",
    down: "<b>&darr;</b> : abrir e fechar esta janela",
    fullscreen: "<b>space</b> : modo aleatório",
    exitfs: "<b>esc</b> : sair do modo tela cheia",
    mobile: "Algumas imagens que criei com inteligência artificial, em diferentes explorações criativas. <b>Recomendo o modo tela cheia.</b><br>Você pode deslizar para mudar de imagem.<br>Deslize para cima para entrar ou sair do modo tela cheia.<br>Deslize para baixo para mostrar este menu."
  }
}

title.innerHTML = texts[lang].title;
text.innerHTML = texts[lang].text;
cmds.innerHTML = texts[lang].cmds;
nav.innerHTML = texts[lang].nav;
up.innerHTML = texts[lang].up;
down.innerHTML = texts[lang].down;
fullscreen.innerHTML = texts[lang].fullscreen;
exitfs.innerHTML = texts[lang].exitfs;

// Mobile

function detectarDispositivo() {
  const esMovil = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (esMovil) {
    text.innerHTML = texts[lang].mobile
    cmds.innerHTML = ""
    list.innerHTML = ""
  }
}

detectarDispositivo();







