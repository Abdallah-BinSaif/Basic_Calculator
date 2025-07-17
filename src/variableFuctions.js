const clearSection = document.querySelector(".clear")
const numbers = document.querySelector(".numbers")
const operations = document.querySelector(".operations")
const display = document.querySelector(".display")

let currentInput = "0";
let previousInput = null;
let operator = null;
let shouldResetDisplay = false;

function calButton (text,className= [], action){
    const button = document.createElement("button")
    button.classList.add("border", "p-2", "rounded-xl","bg-amber-100", "border-black/50", ...className)
    button.textContent = text
    button.addEventListener("click", action)
    return button
}

function calculate(num1, num2, op) {
    switch(op) {
        case "+":
            display.textContent = (num1, num2)=> num1 + num2;
            break;
        case "-":
            display.textContent = (num1, num2) => num1 - num2;
            break;
        case "x":
            display.textContent = (num1, num2) => num1 * num2;
            break;
        case "/":
            display.textContent = (num1, num2) => {
                if(num2 === 0){
                    return NaN
                }
                return num1 / num2
            };
            break;
        default:
            display.textContent = "0"
    }
}