'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
var guess;

//TODO: make this dynamic so i get new values each submit button
const randNum = Math.random() * (min - max) + max;
const randNumDecimals = randNum.toFixed(2);

// event listener for enter key to submit user guess
const form = document.querySelector('form');
form.addEventListener('keydown', function(event){
    if (event.key === 13) {
        event.preventDefault();
        mainGame();
    }
});

// logic to reveal the number and hide after 0.8 seconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function revealNum(){
    document.getElementById("revealbtn").childNodes[0].nodeValue=`${randNumDecimals}`;
    sleep(800).then(() => {
        document.getElementById("revealbtn").childNodes[0].nodeValue="Reveal";
    })
    
}

// main logic for the game
function mainGame(){

    console.log(randNumDecimals);

    guess = document.getElementById("guess").value;
    console.log(guess);

    guess == randNumDecimals ? alert("You win!") : alert(`You lose! The number was ${randNumDecimals}`);

}