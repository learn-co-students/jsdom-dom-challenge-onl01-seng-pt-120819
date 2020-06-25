const counter = document.getElementById('counter');



document.getElementById('pause').addEventListener("click", stop)
document.getElementById('heart').addEventListener("click", like)
document.getElementById('minus').addEventListener("click", minus)
document.getElementById('plus').addEventListener("click", plus)
document.getElementById('comment-form').addEventListener("submit", comment)

let intervalID = setInterval(function timerCounter(){
   let i = parseInt(counter.innerText)
    i ++ 
    counter.innerText = i
}, 1000);

function minus(){
   let i = parseInt(counter.innerText)
    i --
    counter.innerText = i
}

function plus(){
   let i = parseInt(counter.innerText)
   i ++
   counter.innerText = i
 
}

function like(){
   listItem = document.createElement('li')
   listItem.innerText = `You liked at this ${counter.innerText}`
   const list = document.querySelector('.likes')
   list.appendChild(listItem)
}

function stop(){
   clearInterval(intervalID)
   document.getElementById('pause').innerText = "resume"
   document.getElementById('pause').addEventListener("click", resume)
   document.getElementById("minus").disabled = true;
   document.getElementById("plus").disabled = true;
   document.getElementById("heart").disabled = true;
}

function resume(){
    setInterval(function timerCounter(){
        i =parseInt(counter.innerText)
        i ++ 
        counter.innerText = i
    }, 1000);
    document.getElementById('pause').innerText = "pause"
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    }

    function comment(){
        event.preventDefault()
        text = document.getElementById('comment-input').value
        commentParagraph = document.createElement('p')
        commentParagraph.innerText = text
        div = document.getElementById('list')
        div.appendChild(commentParagraph)
        document.forms['comment-form'].reset()
    }
