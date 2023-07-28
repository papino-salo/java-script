const board = document.querySelector("#board")
const num = 399
let colors = ["#cc20ee", "#0099FF", "#9966FF", "#FF9933", "#FFFF00", "#ee7320"]

for (let i = 0; i < num; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    board.append(square)

    square.addEventListener("mouseover", () => {
        setColor(square)
    })
    square.addEventListener("mouseleave", () => {
        removeColor(square)
    })

    function setColor(element) {
        element.style.backgroundColor = getRandomColor()
    }

    function removeColor(element) {
        element.style.backgroundColor = "#828282"
    }

    function getRandomColor() {
        let color = colors[Math.floor(Math.random() * colors.length)]
        return color
    }
}