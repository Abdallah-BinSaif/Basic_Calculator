const clearSection = document.querySelector(".clear")
const numbers = document.querySelector(".numbers")
const operations = document.querySelector(".operations")
const display = document.querySelector(".display")

let currentInput = "0";
let previousInput = null;
let operator = null;
let waitingForNewInput = false;

function calButton (text,className= [], action){
    const button = document.createElement("button")
    button.classList.add("border", "p-2", "rounded-xl","bg-amber-100", "border-black/50", ...className)
    button.textContent = text
    button.addEventListener("click", action)
    return button
}

function updateDisplay() {
    display.textContent = currentInput;
}

function calculate(num1, num2, op) {
    switch(op) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
            
        case "x":
            return num1 * num2;
            
        case "/":
            if(num2 === 0){
                return NaN
            }
            return num1 / num2;
            
        default:
            return 0
    }
}