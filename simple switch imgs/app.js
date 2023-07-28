const slides = document.querySelectorAll(".slide");
console.log(slides)

for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearClass()
        slide.classList.add("slide-active")
    })
}

function clearClass() {
    slides.forEach((slide) => {
        slide.classList.remove("slide-active")
    })
}