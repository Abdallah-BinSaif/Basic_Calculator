const clearSection = document.querySelector(".clear")
const numbers = document.querySelector(".numbers")
const operations = document.querySelector(".operations")
console.log(operations)

function calButton (text,className= [], action){
    const button = document.createElement("button")
    button.classList.add("border", "p-2", "rounded-xl","bg-amber-100", "border-black/50", ...className)
    button.textContent = text
    button.addEventListener("click", action)
    return button
}

clearSection.appendChild(calButton(text="AC", className=["w-full", "bg-red-900/80", "text-white", "font-bold"]))

// numbers
const numArr = ["7","8","9","4","5","6","1","2","3","0","00","."]
numArr.map(item=>{
    numbers.appendChild(calButton(text=`${item}`))
})

//operation
const opArr = ["/", "x", "-", "+", "="]
opArr.map(item=>operations.appendChild(calButton(text=`${item}`)))
