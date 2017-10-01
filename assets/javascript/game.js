//Create array of alphabet letters for computer to randomly choose from
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetArr = Array.from(alphabetString);

//Initialize variables wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses = [];

//Assign HTML that user sees to a variable
var userDisplay = document.getElementById("game-display");

//When key is pressed, compare user guess with computer guess > conditions
document.onkeyup = function(event) {

	//Store key pressed in a variable
	var userGuess = event.key.toLowerCase();

	//Generate computer guess
	var computerGuess = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
	console.log(computerGuess);

	//If guesses left === 0, increment losses and reset current guesses
	if (guessesLeft === 0) {
		losses++;
		guessesLeft = 9;
		currentGuesses = [];
	}

	//If user guess !== computer guess
	else if (userGuess !== computerGuess) {

		//Decrement guesses left & display guess under "guesses so far"
		guessesLeft--;
		currentGuesses.push(" " + event.key);
	}

	//Else (if user guess === computer guess)
	else if (userGuess === computerGuess) {

		//Increment wins & make computer generate another guess
		wins++;
		currentGuesses = [];
	}

	//Update game display
	var html =
      "<p>Wins: " +  wins + "<br /><br />" +
      "Losses: " + losses + "<br /><br />" + 
      "Guesses Left: " + guessesLeft + "<br /><br />" + 
      "Your guesses so far: " + currentGuesses + "</p>";

    userDisplay.innerHTML = html;
}


