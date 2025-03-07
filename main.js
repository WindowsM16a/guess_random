'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
let guess;
let randomNumber;

// function to generate random number
function randNumGen(min, max){
    randomNumber = (Math.random() * (max - min) + min).toFixed(2);
    return randomNumber;
}

randNumGen(min, max);

// main logic for the game
function mainGame(){

    console.log(`random number = ${randomNumber}`);

    guess = document.getElementById("guess").value;

    console.log(`user guess = ${guess}`);

    guess == randomNumber ? alert("You win!") : alert(`You lose! The number was ${randomNumber}`);

    randNumGen(min, max);
}

// logic to reveal the number and hide after 0.8 seconds
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function revealNum(){
    document.getElementById("revealbtn").childNodes[0].nodeValue=`${randomNumber}`;
    sleep(800).then(() => {
        document.getElementById("revealbtn").childNodes[0].nodeValue="Reveal";
    })
}

// event listener for enter key to submit user guess
const form = document.querySelector('form');

form.addEventListener('keydown', function(event){
    if (event.key === 13) {
        event.preventDefault();
        mainGame();
    }
});