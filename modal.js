function detectarDispositivo() {
  const esMovil = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (esMovil) {
    console.log("mobil")
  }
}

detectarDispositivo();







