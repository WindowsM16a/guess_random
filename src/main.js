'use strict'

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;

// function to generate random numbers
function caclRandNum(min, max){
    const generatedNum = Math.random() * (max - min) + min;
    return generatedNum;
}

console.log(caclRandNum(min, max));

prompt("bitch")