const btnUp = document.querySelector(".up-button")
const btnDown = document.querySelector(".down-button")
const container = document.querySelector(".container")
let hConteiner = container.clientHeight
window.addEventListener('resize', function(event) {
    hConteiner = container.clientHeight
}, true);
const slideBar = document.querySelector(".sidebar")
const mainSlide = document.querySelector(".main-slide")
const slideCount = mainSlide.querySelectorAll("div").length
let avtiveIndex = 0

slideBar.style.top = `${(slideBar.offsetHeight * -(slideBar.querySelectorAll("div").length - 1))}px`
window.addEventListener('resize', function(event) {
    slideBar.style.top = `${(slideBar.offsetHeight * -(slideBar.querySelectorAll("div").length - 1))}px`
}, true);
slideBar.style.transition = `translateY(-${(slideCount - 1) * hConteiner}px)`

btnUp.addEventListener(("click"), () => {
    roll("up")
})

btnDown.addEventListener(("click"), () => {
    roll("down")
})

function roll(duraction) {
    if (duraction === "up") {
        avtiveIndex--
        if (avtiveIndex == -1) {
            avtiveIndex = slideCount - 1
        }
        mainSlide.style.transform = `translateY(-${avtiveIndex * hConteiner}px)`
        slideBar.style.transform = `translateY(${(avtiveIndex) * hConteiner}px)`
    } else if (duraction === "down") {
        avtiveIndex++
        if (avtiveIndex === slideCount) {
            avtiveIndex = 0
        }
        mainSlide.style.transform = `translateY(-${avtiveIndex * hConteiner}px)`
        slideBar.style.transform = `translateY(${(avtiveIndex) * hConteiner}px)`
    }
}
