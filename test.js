'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(number);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = 10;
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️no number!';
  } else if (score == 0) {
    document.querySelector('.message').textContent = 'GAME OVER!';
    document.querySelector('body').style.backgroundColor = '#FF0000';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'choose a number between 0  and 20!';
  } else {
    if (guess < number) {
      document.querySelector('.message').textContent = 'try a bigger number';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'try a smaller number';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess == number) {
      document.querySelector('.message').textContent = 'correct number!👍🏻';
      document.querySelector('body').style.backgroundColor = '#60b374';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = number;
    }
  }
});
