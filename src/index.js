clearSection.appendChild(calButton(text="AC", className=["w-full", "bg-red-900/80", "text-white", "font-bold"],(e)=>{
    display.textContent = "0"
}))

// numbers
const numArr = ["7","8","9","4","5","6","1","2","3","0","00","."]
numArr.map(item=>{
    numbers.appendChild(calButton(text=`${item}`,[], (e)=>{
        
        // taking the button's number
        const number = e.target.textContent
        
        // take number not more than 17
        if(display.textContent.length < 17) {
            if(display.textContent=== "0"){
                display.textContent = number
            }else{
                display.textContent += number
            }
        }
    }))
})

//operation
const opArr = ["/", "x", "-", "+"]
opArr.map(item=>operations.appendChild(calButton(text=`${item}`,[],(e)=>{
    
    // take operator from button
    const op = e.target.textContent
    const currentInput = parseFloat(display.textContent)

    // if(previousInput && op){
    //     previousInput += currentInput
    // }

    // if operator already included
    const isOpInclude = ["x", "+", "-", "/"].some(item=> display.textContent.includes(item))
    if(number === 0 || isOpInclude){
        return
    }else{
        display.textContent += op
    }
})))

operations.appendChild(calButton(text="=",[],(event)=>{
    // split disply values with operator
    const displayText = display.textContent.split(/[+\-x/]/);
    if(displayText.length < 2 && parseInt(displayText[0]) > 0){
        return
    }

    // extract oprerator from display
    const operator = display.textContent.match(/[+\-x/]/)[0];
    const num1 = parseFloat(displayText[0])
    const num2 = parseFloat(displayText[1])

    // if any number is not a number display 0
    if(isNaN(num1) || isNaN(num2)) {
        display.textContent = "0"
        return
    }

    // arithmathic operations
    calculate(operator, num1, num2)
}))
