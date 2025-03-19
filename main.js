'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
const form = document.getElementById('guessForm');
let guesses = [];
let randomNumber;
let tries = 3;
let triesParagraph;
let previousGuess;

// function to generate random number
function randNumGen(min, max){
    randomNumber = (Math.random() * (max - min) + min).toFixed(2);
    tries = 3;
    guesses = [];
    return randomNumber;
}

// initial call to generate random number
randNumGen(min, max);

// event listener for enter key to submit user guess
form?.addEventListener('keydown', function(event){
    if (event.key === 13 || event.key == 'Enter') {
        event.preventDefault();
        mainGame();
    }
});

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
    // console.log('hello')
    const button = document.getElementById('revealbtn');
    
    button.innerText = `${randomNumber}`;
    sleep(800).then(() => {
        button.innerText="Reveal";
    })
}

// main logic for the game
function mainGame(){

    const revealButton = document.getElementById('revealbtn')

    if (tries == 2){
        revealButton.style.display = 'inline-block'
    }

    // console.log(`random number = ${randomNumber}`);

    let currentGuess = document.getElementById("guess").value;
    triesParagraph = document.getElementById('tries');
    previousGuess = document.getElementById('previousGuess');


    // validate user input
    if(!validateInput(currentGuess)){
        alert("Please enter a decimal number from 1.00 to 10.00 with 2 decimal places.");
        return;
    }

    if (currentGuess == randomNumber){
        alert(`You win!`)
        document.getElementById("guess").value = ''
        revealButton.style.display = 'none'

        // call to generate a new random number after every correct guess
        randNumGen(min, max);
        previousGuess.innerText = ''

    } else if (tries > 1 && tries <= 3 ){
        --tries;
        
        guesses.push(currentGuess)
        
        alert(`Wrong guess! ${tries} ${tries == 1 ? 'try' : 'tries'} left`)

        triesParagraph.innerText = `${tries} ${tries == 1? 'try': 'tries'} left`;

        
        previousGuess.innerText = `Previous ${guesses.length == 1? 'guess' : 'guesses'}: ${guesses.join(', ')}`;
        
    } else {
        alert('Game Over')
        randNumGen(min, max)
        revealButton.style.display = 'none'
        previousGuess.innerText = ''
    }
}