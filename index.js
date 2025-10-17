const totalimgs = 97;
const rute = "./img/img_";
const extension = ".jpg"

let imgs = Array.from({length: totalimgs}, (_, i) => `${rute}${i + 1}${extension}`)
imgs.sort(() => Math.random() - 0.5)
//console.log(imgs)

const img = document.getElementById('img')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const imgContainer = document.getElementById('img_c')
const footer = document.getElementById('footer')

const ai = document.getElementById("ai")
const exitBtn = document.getElementById("mcbtn")
const modal = document.getElementById("modal")
const fs_btn = document.getElementById("fs_btn")
const navBtns = document.getElementById("nav_btns")
const exitFs = document.getElementById("exit_fs")

let index = 0

function showImage(newIndex) {
    if (newIndex < 0 ) newIndex = imgs.length - 1
    if (newIndex >= imgs.length) newIndex = 0
    index = newIndex

    img.src = imgs[index];
    //console.log(index)
}

showImage(0)

btnPrev.addEventListener('click', () => showImage(index - 1))
btnNext.addEventListener('click', () => showImage(index + 1))

fs_btn.addEventListener('click', () => document.documentElement.requestFullscreen())
exitFs.addEventListener('click', () => document.exitFullscreen())

document.addEventListener('keydown', (e) => {
    if (['ArrowLeft', "ArrowRight", "ArrowUp", "ArrowDown", "F", "f", "Escape", "x", "X"].includes(e.key)) {
        e.preventDefault();
    }

    switch (e.key) {
        case "ArrowRight":
            showImage(index + 1);
            break;
        case "ArrowLeft":
            showImage(index - 1);
            break;
        case "ArrowUp":
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen()
            }
            break;
        case "ArrowDown":
            modal.classList.toggle("hidden")
            break;
        case " ":
        case " ":
            imgs.sort(() => Math.random() - 0.5);
            showImage(0);
            break;
        case "Escape":
            document.exitFullscreen()
            break;
    }
})

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
            footer.style.display = "none"
            btnNext.style.visibility = "hidden"
            btnPrev.style.visibility = "hidden"
            navBtns.style.display = "none"
            exitFs.style.display = "block"
    } else {
            footer.style.display = "block"
            btnNext.style.visibility = "visible"
            btnPrev.style.visibility = "visible"
            navBtns.style.display = "block"
            exitFs.style.display = "none"
    }
})

let timeout

function showExitButton() {
    if (document.fullscreenElement) {
        exitFs.style.opacity = 1
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            exitFs.style.opacity = 0
        }, 2000)
    }
}

document.addEventListener('mousemove', showExitButton)
document.addEventListener('touchstart', showExitButton)


// Modal
exitBtn.addEventListener("click", () => {
    modal.classList.toggle("hidden")

})

ai.addEventListener("click", () => {
    modal.classList.toggle("hidden")
})


// Mobile Touch

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

document.addEventListener("touchmove", (e) => e.preventDefault(), {passive: false})

let lastTouchTime = 0;
const DOUBLE_TAP_DELAY = 300; 

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

    if (timeDiff < DOUBLE_TAP_DELAY && timeDiff > 0) {
            imgs.sort(() => Math.random() - 0.5);
            showImage(0);
  }

  lastTouchTime = currentTime;
})

document.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    handleSwipe()
})

function handleSwipe() {
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) {
            showImage(index - 1);
        } else if (diffX < -50) {
            showImage(index + 1);
        }
    } else {
        if (diffY > 50) {
            modal.classList.toggle("hidden")
            document.exitFullscreen()
        } else if (diffY < -50) {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                document.documentElement.requestFullscreen()
                exitFs.style.display = "none"
            }
        }
    }
}


