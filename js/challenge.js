document.addEventListener("DOMContentLoaded", () => {
    let myForm = document.getElementById("comment-form")
    let newCounter = 0
    myCounter = window.setInterval(increaseCounter, 1000)
    const counter = document.querySelector("#counter")
    let plusButton = document.querySelector("#plus")
    let minusButton = document.querySelector("#minus")
    let heartButton = document.querySelector("#heart")
    let likesList = document.querySelector(".likes")
    let pauseButton = document.querySelector("#pause")

    myForm.addEventListener("submit", function(event) {
        event.preventDefault()
        let commentInput = document.getElementById("comment-input").value 
        let divElement = document.getElementById("list")
        let paragraph = document.createElement("p")
        paragraph.innerText = commentInput
        divElement.appendChild(paragraph)
        
    });
    
    function increaseCounter() {
        // let counter = document.getElementById("counter").innerHTML
        // let parsedCounter = parseInt(counter, 10)
        // parsedCounter += 1
        // const counter = document.querySelector("#counter")
        newCounter += 1
        counter.innerText = newCounter
    }

    function decreaseCounter() {
        newCounter -= 1 
        counter.innerText = newCounter
    }

    function likeNumber() {
        likesList.innerHTML += `<li>${newCounter} number has been liked!</li>`
    }

    function toggleButton(e) {
        if (e.target.id === "pause") {
            e.target.id = "resume"
            e.target.innerText = "resume"
            clearInterval(myCounter)
            minusButton.disabled = true
            plusButton.disabled = true
        } else {
            e.target.id = "pause"
            e.target.innerText = "pause"
            myCounter = window.setInterval(increaseCounter, 1000)
            minusButton.disabled = false
            plusButton.disabled = false
        }
    }


    minusButton.addEventListener("click", decreaseCounter)
    plusButton.addEventListener("click", increaseCounter)
    heartButton.addEventListener("click", likeNumber)
    pauseButton.addEventListener("click", toggleButton)
});