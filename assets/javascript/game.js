//---------//
//  Audio  //
//---------//

// Assign background audio element to variable
var audioElement = document.getElementById("audio");

//Background audio plays on load
window.onload = function() {
	audioElement.play();
}

//Toggle background audio
function toggleSound() {
	if (audioElement.paused) {
		audioElement.play();
	}
	else {
		audioElement.pause();
	}
}

//Play keystroke sound when user presses key
document.onkeydown = function() {
	var keystrokeSound = document.getElementById("keystroke");
	keystrokeSound.currentTime = 0;
	keystrokeSound.play();
}

//---------------------------------//
// Initialize Varibles & Functions //
//---------------------------------//

//Create array of alphabet letters for computer to randomly choose from
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//Initialize variables wins, losses, guesses left, and current guesses
var wins = 0;
var losses = 0;
var guessesLeft;
var currentGuesses;
var games = -1;

//Define function to initialize new game
function newGame() {
	//Generate random letter
	computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerGuess);
	//Reset variables
	guessesLeft = 9;
	currentGuesses = [];
	//Update score
	games++;
}

//Call function to initialize new game
newGame();

//------------//
// Game Rules //
//------------//

//When user presses key
document.onkeyup = function(event) {

	//Store key in variable
	var userGuess = event.key.toLowerCase();

	//If user runs out of guesses
	if (guessesLeft === 0) {

		//Increment losses & and ask if user wants to play again
		losses++;
		var loseConfirm = confirm("Uh oh! Time to sharpen those mindreading skills.\nThe letter was \"" + computerGuess + "\". Would you like to play again?");

		//Whether use clicks confirm or cancel
		if (loseConfirm || loseConfirm === false) {
			
			newGame();

		}

	}
	//Else (if user has guesses remaining)
	else {

		//If user did not guess letter
		if (userGuess !== computerGuess) {

			//Decrement number of guesses left & display user's guess
			guessesLeft--;
			currentGuesses.push(" " + event.key);
		}

		//Else (if user guess matches computer guess)
		else {

			//Increment wins & ask if user wants to play again
			wins++;
			var winConfirm = confirm("Psychic in the house!\nThe letter was \"" + computerGuess + "\". Click OK for a new letter.");

			//Whether user clicks confirm or cancel
			if (winConfirm || winConfirm === false) {

				newGame();

			}

		}

	}

	//--------------//
	// HTML Display //
	//--------------//

	//Assign what is displayed to the user to a variable
	var userDisplay = document.getElementById("game-display");

	//Write updated content
	var html =
      "<p>Wins: " +  "<span class='display-effect'>" + wins + "</span><br /><br />" +
      "Losses: " + "<span class='display-effect'>" + losses + "</span><br /><br />" + 
      "Guesses left: " + "<span class='display-effect'>" + guessesLeft + "</span><br /><br />" + 
	  "Your guesses so far: " + "<span class='display-effect'>" + currentGuesses + "</span><br /><br />" +
	  "<b>Score: " + "<span class='display-effect'>" + wins + "/" + games + "</span></b></p>";

	//Update display
    userDisplay.innerHTML = html;
}