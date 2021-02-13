'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {
        displayMessage('No number');
    } else if (guess === secretNumber) {
        displayMessage('You Guessed It Right');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
})