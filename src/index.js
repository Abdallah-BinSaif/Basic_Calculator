clearSection.appendChild(calButton(text="AC", className=["w-full", "bg-red-900/80", "text-white", "font-bold"],(e)=>{
    currentInput = "0";
    previousInput = null;
    operator = null;
    waitingForNewInput = false;
    updateDisplay()
}))

// numbers
const numArr = ["7","8","9","4","5","6","1","2","3","0","00","."]
numArr.map(item=>{
    numbers.appendChild(calButton(text=`${item}`,[], (e)=>{
        
        if(waitingForNewInput) {
            currentInput = item
            waitingForNewInput = false
        }else{
            if(item === "." && currentInput.includes(".")){
                return;
            }
            if (currentInput === "0" && item != ".") {
                currentInput = item;
            }else{
                currentInput += item;
            }
        }
        updateDisplay();
        
    }))
})

//operation
const opArr = ["/", "x", "-", "+"]
opArr.map(item=>operations.appendChild(calButton(text=`${item}`,[],()=>{

    if(previousInput !== null && operator !== null && !waitingForNewInput){
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator)
        if(isNaN(result)){
            currentInput = "ERROR";
            previousInput = null;
            operator = null;
            waitingForNewInput = true;
            updateDisplay()
            return
        }
        currentInput = result.toString()
        previousInput = currentInput
    }else{
        previousInput = currentInput;
    }
    operator = item;
    waitingForNewInput = true
    updateDisplay()
})))

operations.appendChild(calButton(text="=",[],(event)=>{

    currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator).toString()
    previousInput = currentInput;
    operator = null;
    waitingForNewInput = true;
    updateDisplay()
}))
