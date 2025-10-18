const title = document.getElementById("title")
const text = document.getElementById("text")
const cmds = document.getElementById("cmds")
const list = document.getElementById("list")
const nav = document.getElementById('nav')
const up = document.getElementById('up')
const down = document.getElementById("down")
const fullscreen = document.getElementById("fullscreen")
const exitfs = document.getElementById("exitfs")


function detectarDispositivo() {
  const esMovil = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (esMovil) {
    text.innerHTML = "Algunas de las imágenes que he generado con inteligencia artificial en el marco de diferentes procesos creativos. <b>Recomiendo el modo fullscreen.</b> Puedes pasar de imagen con touch. Hacia arriba entras y sales a modo fullscreen. Hacia abajo se muestra este menu.";
    cmds.innerHTML = ""
    list.innerHTML = ""
  }
}

detectarDispositivo();







