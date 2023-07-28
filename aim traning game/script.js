const screens = document.querySelectorAll(".screen")
const start = document.querySelector(".start")
const listTime = document.querySelector(".time-list")
const timer = document.getElementById("time")
const fillTimer = document.querySelector(".full-timer")
const board = document.getElementById("board")
let colors = ["#cc20ee", "#0099FF", "#9966FF", "#FF9933", "#FFFF00", "#ee7320"]

let time = 0
let tempTime = 0
let score = 0

start.addEventListener("click", (event) => {
    event.preventDefault(".up")
    screens[0].classList.add("up")
})

listTime.addEventListener("click", (event) => {
    event.preventDefault(".up")
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"))
        tempTime = parseInt(event.target.getAttribute("data-time"))
    }
    screens[1].classList.add("up")
    startGame()
})

board.addEventListener("click", event => {
    if (event.target.classList.contains("circle")) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    createTime(time)
    setInter = setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function createTime(time) {
    if (time < 10) {
        timer.innerHTML = `00:0${time}`
    } else {
    timer.innerHTML = `00:${time}`
    }
}

function decreaseTime() {
    console.log(Element)
        let count = --time
        if (count > 0) {
            if (count > 10) {
                timer.innerHTML = `00:${count}`
            } else {
                timer.innerHTML = `00:0${count}`
            }
        } else {
            finishGame()
        }
}


function finishGame() {
    clearInterval(setInter)
    document.querySelector(".circle").remove()
    timer.parentNode.classList.add("hide")

    let finalSquare = document.createElement("h1")
    finalSquare.classList.add("finalSquare")

    let returnGameDiv = document.createElement("h2")
    returnGameDiv.classList.add("again-game", "primary")


    board.append(finalSquare, returnGameDiv)
    finalSquare.innerHTML = `Ваш счёт: ${score}`
    returnGameDiv.innerHTML = "Начать заново"
    let restartBtn = document.querySelector(".again-game")

    restartBtn.addEventListener("click", restartGame)
}

function restartGame() {

    let finalSquareDiv = document.querySelector(".finalSquare")
    let restartBtn = document.querySelector(".again-game")

    finalSquareDiv.remove()
    restartBtn.remove()
    score = 0
    time = tempTime
    fillTimer.classList.remove("hide")
    startGame()
}

function createRandomCircle() {
    const circle = document.createElement("div")
    circle.classList.add("circle")
    board.append(circle)

    const {width, height} = board.getBoundingClientRect()
    
    let min = 10
    let max = 50
    let size = randomNum(max,min)

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    circle.style.top = `${randomNum(size, (height - size))}px`
    circle.style.left = `${randomNum(size, (width - size))}px`
    circle.style.background = `${randomColor()}`
}

function randomNum(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

