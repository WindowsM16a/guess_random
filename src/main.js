// 'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
var guess;

// event listener for enter key to submit user guess
const form = document.querySelector('form');
form.addEventListener('keydown', function(event){
    if (event.key === 13) {
        event.preventDefault();
        mainGame();
    }
});

// function to generate random numbers
function caclRandNum(min, max){
    const generatedNum = Math.random() * (max - min) + min;
    return generatedNum.toFixed(2);
}
// checking to see what number was generated and if the fn works
console.log(caclRandNum(min, max));

// main logic for the game
function mainGame(){
    guess = document.getElementById("guess").value;
    console.log(guess);

    guess == caclRandNum(min, max) ? alert("You win!") : alert("You lose!");
}