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

// initial call to generate random number
randNumGen(min, max);

// main logic for the game
function mainGame(){

    console.log(`random number = ${randomNumber}`);

    guess = document.getElementById("guess").value;

    console.log(`user guess = ${guess}`);

    // validate user input
    if(!validateInput(guess)){
        alert("Please enter a decimal number from 1.00 to 10.00 with 2 decimal places.");
        return;
    }

    guess == randomNumber ? alert("You win!") : alert(`You lose! The number was ${randomNumber}`);

    // call to generate a new random number after every instance of the main game function
    randNumGen(min, max);
}

// logic to validate the user input
function validateInput(input){
    const regex = /^([1-9](\.\d{2})?|10(\.00)?)$/;
    return regex.test(input);
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