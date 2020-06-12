const counter = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const likeList = document.querySelector('.likes');
const pauseResumeBtn = document.getElementById('pause');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');
const commentSubmitBtn = document.getElementById('submit');
const allBtns = document.querySelectorAll('button');

minusBtn.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});
plusBtn.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});

heartBtn.addEventListener('click', addLike);

pauseResumeBtn.addEventListener('click', pauseResume);

commentSubmitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let comment = document.createElement('p');
  comment.innerText = commentInput.value;
  commentList.appendChild(comment);
});

let timerVar = setInterval(increaseCounterPerSecond, 1000);

function increaseCounterPerSecond() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function pauseResume() {
  if (pauseResumeBtn.innerText == 'pause') {
    clearInterval(timerVar);
    pauseResumeBtn.innerText = 'resume';
    allBtns.forEach(function (button) {
      if (button.id != 'pause') {
        button.disabled = true;
      }
    });
  } else {
    pauseResumeBtn.innerText = 'pause';

    allBtns.forEach(function (button) {
      button.disabled = false;
    });
  }
}

function addLike() {
  let likeAmount;
  if (likeList.childElementCount > 0) {
    likeList.childNodes.forEach(function (item) {
      if (item.id == counter.innerText) {
        likeAmount += 1;
      } else {
        likeAmount = 1;
        let likeItem = document.createElement('li');
        likeItem.id = counter.innerText;
        likeItem.innerText = `${counter.innerText} has been liked ${likeAmount} time`;
        likeList.appendChild(likeItem);
      }
    });
  } else {
    likeAmount = 1;
    let likeItem = document.createElement('li');
    likeItem.id = counter.innerText;
    likeItem.innerText = `${counter.innerText} has been liked ${likeAmount} time`;
    likeList.appendChild(likeItem);
  }
}
