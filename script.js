let inputNumber = document.getElementById("ipnum")
let msg = document.getElementById("message")
let score = document.getElementById("score")

let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum);
let tot = 10

function check() {
    
    let givenNumber = inputNumber.value
    inputNumber.value = ""
    
        if (givenNumber == randomNum) {

            msg.textContent = "You are Right!"
            alert("You Won...!!")
            location.reload();
        }
        else {
            msg.textContent = "You are Wrong!"
            tot = tot - 1
            score.textContent = "Your score is :" + tot
            if (tot == 0) {
                alert("You Lose..! :(")
                location.reload();
            }
        }
  





}