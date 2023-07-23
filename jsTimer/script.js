const timerList = document.querySelector(".contdecreaseiner-timer")
const containersInput = document.querySelectorAll(".container-input")
const btns = document.querySelector(".btns")
const btnStart = document.querySelector(".btn")
const inputTime = document.querySelectorAll(".input")
let tempTime = 0
let flagBtnExistence = true
let flagColor = false

inputTime.forEach(element => element.onfocus = removeTime)
inputTime.forEach(element => element.onblur = setTime)

function removeTime() {
    this.classList.remove("error")
    tempTime = this.value
    this.value = ""
}

function setTime() {
    if (this.value === "") {
        this.value = tempTime
    }
}

btnStart.addEventListener("click", startTimer)
function startTimer() {
    if (inputTime[1].value > 59) {
        inputTime[1].classList.add("error")
    } else if ((inputTime[2].value > 59)) {
        inputTime[2].classList.add("error")
    } else {
        if (parseInt(inputTime[0].value) == 0 && parseInt(inputTime[1].value) == 0 && parseInt(inputTime[2].value) == 0) {
            btnStart.classList.add("btn-active")
        } else {
            btnStart.classList.remove("btn-error")
            createTimer()
        }
    }
    if (flagColor == false) {
        let stopBtn = document.querySelector(".stop-btn")
        stopBtn.classList.remove("btn-error", "btn-active")
    }
}

function createTimer() {
    disableInput("go")
    if (flagBtnExistence) {
        let stop = document.createElement("div")
        stop.classList.add("btn", "stop-btn")
        stop.innerHTML = "stop"
        btns.append(stop)
    }
    flagBtnExistence = false

    if (parseInt(inputTime[0].value) === 0 && parseInt(inputTime[1].value) == 0) {
        containersInput[0].remove()
        containersInput[1].remove()
        timer = setInterval(decrease, 1000)
    } else if (parseInt(inputTime[0].value) === 0 && parseInt(inputTime[1].value) != 0) {
        containersInput[0].remove()
        timer = setInterval(decrease, 1000)
    } else {
        timer = setInterval(decrease, 1000)
    }

    let stopBtn = document.querySelector(".stop-btn")
    stopBtn.addEventListener("click", () => {
        stopBtn.classList.add("btn-active")
        clearInterval(timer)
        disableInput("stop")
    })
}


function decrease() {
    let times = {
        sec: parseInt(inputTime[2].value),
        min: parseInt(inputTime[1].value),
        hour: parseInt(inputTime[0].value)
    }
    console.log(times)
    if (times.sec >= 1) {
        if (times.hour == 0 && times.min == 0) {
            containersInput[0].remove()
            containersInput[1].remove()
        }
        if (times.hour == 0) {
            containersInput[0].remove()
        }
        --inputTime[2].value
    } else if (times.sec == 0 && times.min >= 1) {
        inputTime[2].value = 59
        --inputTime[1].value
    } else if (times.sec == 0 && times.min == 0 && times.hour >= 1) {
        console.log(times.hour)
        inputTime[1].value = 59
        inputTime[2].value = 59
        --inputTime[0].value
    } else {
        clearInterval(timer)
        alert("Таймер выключился")
    }
}

function decreaseSec(times) {
    console.log(times)
    if (times.sec >= 1) {
        --inputTime[2].value
    } else if (times.sec == 0 && times.min >= 1) {
        console.log(times.sec)
        inputTime[2].value = 59
        --inputTime[1].value
    } else if (((times.sec = 0) && times.min == 0 && times.hous >= 0)) {
        inputTime[1].value = 59
        inputTime[2].value = 59
    }
}

function disableInput(status) {
    if (status == "stop") {
        inputTime.forEach(el => console.log(el))
    } else {
        inputTime.forEach(el => console.log(el))
    }
}