'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(number);
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️no number!';
  } else if (score == 0) {
    document.querySelector('.message').textContent = 'GAME OVER!';
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
      document.querySelector('.highscore').textContent = score;
      document.querySelector('.score').textContent = 0;
    }
  }
});
