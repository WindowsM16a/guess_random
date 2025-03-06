'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
var guess;


function randNumGen(min, max){
    let randomNumber = Math.random() * (min - max) + max;
    return randomNumber;
}

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
// TODO: make the reveal button work
// function revealNum(){
//     document.getElementById("revealbtn").childNodes[0].nodeValue=`${randNumDecimals}`;
//     sleep(800).then(() => {
//         document.getElementById("revealbtn").childNodes[0].nodeValue="Reveal";
//     })
// }

// main logic for the game
function mainGame(){

    let randNumDecimals = randNumGen(min, max).toFixed(2);

    console.log(`random number = ${randNumDecimals}`);

    guess = document.getElementById("guess").value;

    console.log(`user guess = ${guess}`);

    guess == randNumDecimals ? alert("You win!") : alert(`You lose! The number was ${randNumDecimals}`);
}