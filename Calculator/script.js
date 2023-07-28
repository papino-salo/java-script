const items = document.querySelectorAll(".operation"),
    historyDisplay = document.querySelector(".history"),
    display = document.querySelector(".display"),
    equal = document.querySelector(".equal"),
    clear = document.querySelector(".clear"),
    logic = document.querySelectorAll(".logic")
let tempNum = "",
    flagEqual = false,
    z = [],
    countClickEqual = 0
countClickMinus = 0

items.forEach(el => (el.addEventListener(("click"), createNum)))
function createNum() {
    if (!this.classList.contains("logic")) {
        tempNum = tempNum + this.innerHTML
        display.innerHTML = tempNum
    } else {
        flagEqual = false
        countClickEqual = 0
        firstCalculation(this.innerHTML)
        ++countClickMinus
    }
    if (this.classList.contains("equal")) {
        ++countClickEqual
        calculationEquel(this.innerHTML)
    }
}

function firstCalculation(znak) {
    if (tempNum == "" && znak == "-" && countClickMinus == 0) {
        tempNum = znak
        display.innerHTML = znak
    } else {
        if (tempNum != "") {
            z.push(parseFloat(tempNum))
            z.push(znak)
            tempNum = ""
            display.innerHTML = ""
            calculation()
        } else {
            if (z.length < 2) {
                z.push(parseFloat(display.innerHTML))
                z.push(znak)
                historyDisplay.innerHTML = display.innerHTML + znak
                display.innerHTML = ""
                console.log(z)
            } else {
                z[1] = znak
                historyDisplay.innerHTML = z.join("")
            }
        }
    }
}

let numAfterClickedEquael
function calculationEquel() {
    if (countClickEqual < 2) {
        if (typeof (z[0]) == NaN) {
            z.shift()
        }
        z.push(parseFloat(tempNum))
        historyDisplay.innerHTML = ""
        if (Number.isInteger(math.eval(z.join("")))) {
            display.innerHTML = math.eval(z.join(""))
        } else {
            display.innerHTML = math.eval(z.join("")).toFixed(2)
        }
        if (Number.isInteger(math.eval(z.join("")))) {
            numAfterClickedEquael = math.eval(z.join(""))
        } else {
            numAfterClickedEquael = math.eval(z.join("")).toFixed(2)
        }
        console.log(z)
        z = []
        tempNum = ""
        flagEqual = true
    } else {
        tempNum = numAfterClickedEquael
        display.innerHTML = numAfterClickedEquael
    }
}

let tempZnak
function calculation() {
    if (z.length > 2) {
        if (!flagEqual) {
            tempZnak = z[z.length - 1]
            display.innerHTML = "0"
            z.pop()
            historyDisplay.innerHTML = math.eval(z.join("")) + tempZnak
            z = [math.eval(z.join("")), tempZnak]
            flagEqual = false
        }
    } else {
        historyDisplay.innerHTML = z.join("")
    }
}
clear.addEventListener("click", clearNum)
function clearNum() {
    tempNum = ""
    z = []
    display.innerHTML = "0"
    historyDisplay.innerHTML = ""
    countClickMinus = 0
    flagEqual = false
}