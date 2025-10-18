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
    text.innerHTML = "Algunas de las imágenes que he generado con inteligencia artificial en el marco de diferentes procesos creativos.<b>Puedes pasar de imagen con touch.</b>";
    cmds.innerHTML = ""
    nav.innerHTML = "Puedes pasar de imagen con touch."
    up.innerHTML = "Hacia arriba entras y sales a modo fullscreen."
    down.innerHTML = "Hacia abajo se muestra este menu."
    fullscreen.innerHTML = ""
    exitfs.innerHTML=""
  }
}

detectarDispositivo();







