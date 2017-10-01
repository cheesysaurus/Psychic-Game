//Create array of alphabet letters for computer to randomly choose from
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetArr = Array.from(alphabetString);

//Initialize variables wins, losses, guesses left, and current guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentGuesses = [];

//Assign what is displayed to the user to a variable
var userDisplay = document.getElementById("game-display");

//When key is pressed, compare user guess with computer guess --> conditions
document.onkeyup = function(event) {

	//Store key that user presses in a variable
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
	else {
		//If user guess doesn't match computer guess
		if (userGuess !== computerGuess) {

			//Decrement number of guesses left & display user's guess
			guessesLeft--;
			currentGuesses.push(" " + event.key);
		}

		//Else (if user guess matches computer guess)
		else {

			//Increment wins & make computer generate another guess
			wins++;
			currentGuesses = [];
		}

	}

	//Update game display
	var html =
      "<p>Wins: " +  wins + "<br /><br />" +
      "Losses: " + losses + "<br /><br />" + 
      "Guesses Left: " + guessesLeft + "<br /><br />" + 
      "Your guesses so far: " + currentGuesses + "</p>";

    userDisplay.innerHTML = html;
}


