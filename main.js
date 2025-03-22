"use strict";

// min and max value thresholds for the random numbers
const min = 1;
const max = 10;
let guesses = [];
let randomNumber;
let tries = 3;
let triesParagraph;
let previousGuess;

// Wait for DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("guessForm");

	// function to generate random number
	function randNumGen(min, max) {
		randomNumber = (Math.random() * (max - min) + min).toFixed(2);
		tries = 3;
		guesses = [];
		return randomNumber;
	}

	// initial call to generate random number
	randomNumber = randNumGen(min, max);
	// console.log("Game started with random number:", randomNumber);

	// event listener for enter key to submit user guess
	form?.addEventListener("keydown", function (event) {
		if (event.key === "Enter" || event.keyCode === 13) {
			event.preventDefault(); // Prevents form submission
			mainGame();
		}
	});

	// Make these functions global
	window.validateInput = function (input) {
		const regex = /^([1-9](\.\d{2})?|10(\.00)?)$/;
		return regex.test(input);
	};

	window.sleep = function (ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	window.revealNum = function () {
		const button = document.getElementById("revealbtn");

		button.innerText = `${randomNumber}`;
		sleep(800).then(() => {
			button.innerText = "Reveal";
		});
	};

	window.mainGame = function () {
		const revealButton = document.getElementById("revealbtn");
		if (tries == 2) {
			revealButton.style.display = "inline-block";
		}

		let currentGuess = document.getElementById("guess").value;
		triesParagraph = document.getElementById("tries");
		previousGuess = document.getElementById("previousGuess");

		// validate user input
		if (!validateInput(currentGuess)) {
			alert(
				"Please enter a decimal number from 1.00 to 10.00 with 2 decimal places."
			);
			return;
		}

		if (currentGuess == randomNumber) {
			alert(`You win!`);
			document.getElementById("guess").value = "";
			revealButton.style.display = "none";

			// call to generate a new random number after every correct guess
			randomNumber = randNumGen(min, max);
			previousGuess.innerText = "";
			triesParagraph.innerText = `3 tries left`;
		} else if (tries > 1 && tries <= 3) {
			--tries;

			guesses.push(currentGuess);

			alert(`Wrong guess! ${tries} ${tries == 1 ? "try" : "tries"} left`);
			triesParagraph.innerText = `${tries} ${
				tries == 1 ? "try" : "tries"
			} left`;
			previousGuess.innerText = `Previous ${
				guesses.length > 1 ? "guesses" : "guess"
			}: ${guesses.join(", ")}`;
		} else {
			alert(`Game Over! The number was ${randomNumber}`);
			alert("New game starting");
			randomNumber = randNumGen(min, max);
			revealButton.style.display = "none";
			document.getElementById("guess").value = "";
			previousGuess.innerText = "";
			triesParagraph.innerText = `3 tries left`;
		}
	};
});
