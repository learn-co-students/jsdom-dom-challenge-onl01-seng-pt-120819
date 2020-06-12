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
const likes = {};

document.addEventListener('DOMContentLoaded', () => {
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
  setInterval(() => {
    if (isRunning()) {
      increaseCounterPerSecond();
    }
  }, 1000);
});

function isRunning() {
  return pauseResumeBtn.innerText === 'pause' ? true : false;
}

function increaseCounterPerSecond() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function pauseResume() {
  if (pauseResumeBtn.innerText == 'pause') {
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
  let key = parseInt(counter.innerText);
  likes[key] ? (likes[key] += 1) : (likes[key] = 1);

  if (document.getElementById(`${key}`)) {
    document.getElementById(
      `${key}`
    ).innerText = `${key} has been liked ${likes[key]} times`;
  } else {
    let likeItem = document.createElement('li');
    likeItem.id = key;
    likeItem.innerText = `${key} has been liked 1 time`;
    likeList.appendChild(likeItem);
  }
}
