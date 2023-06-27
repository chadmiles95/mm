// javascript
let userInput = document.getElementById("userInput")
let answer = document.getElementById("answer")
let getNumbers = document.getElementById("getNumbers")
let randomNumber1 = document.getElementById("randomNumber1")
let randomNumber2 = document.getElementById("randomNumber2")
let check = document.getElementById("results")
let realAnswer = 0
let userInputNumber = 0

getNumbers.addEventListener("click", function(){

    
    let randomNumber1answer = Math.floor(Math.random()*12)+1 
    let randomNumber2answer  = Math.floor(Math.random()*12)+1
    randomNumber1.innerHTML = randomNumber1answer
    randomNumber2.innerHTML = randomNumber2answer
    realAnswer = randomNumber1answer * randomNumber2answer
    check.innerText = ""
    answer.innerHTML =""
    userInput.focus()
    
    
    
})


function checkAnswer(){
    if (realAnswer === userInputNumber){
        check.innerText = "you are correct"
    }
    else {
        check.innerText ="you are incorrect"
    }
}


userInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        
        let userInputValue = userInput.value 
        userInputNumber = Number(userInputValue)
        let userInputNumberAnswer = userInputNumber
        answer.innerHTML = userInputNumberAnswer
        checkAnswer()
    
        userInput.value = ""
        userInput.innerText = ""
    }
    
    
})

