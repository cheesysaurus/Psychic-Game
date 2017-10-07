//Background audio
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "../audio/hypnotic-effect.mp3");
var isPlaying = false;

window.onload = function() {
	audioElement.play();
}

//Toggle background audio
$("#play-pause").on("click", function() {
	if (isPlaying) {
		audioElement.pause();
	} else {
		audioElement.play();
	}
	audioElement.onplaying = function() {
		isPlaying = true;
	};
	audioElement.onpause = function() {
		isPlaying = false;
	};
});



//Create array of alphabet letters for computer to randomly choose from
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
var alphabetArr = Array.from(alphabetString);

//Initialize variables wins, losses, guesses left, and current guesses
var wins = 0;
var losses = 0;
var guessesLeft;
var currentGuesses;
var games = -1;

//Assign what is displayed to the user to a variable
var userDisplay = document.getElementById("game-display");

//Functions to initialize new game
function newGame() {
	//Generate random letter
	computerGuess = alphabetArr[Math.floor(Math.random() * alphabetArr.length)];
	console.log(computerGuess);
	//Reset variables
	guessesLeft = 9;
	currentGuesses = [];
	//Update score
	games++;
}

//Initialize new game
newGame();

//When user presses key
document.onkeyup = function(event) {

	//Store key in variable
	var userGuess = event.key.toLowerCase();

	//If user runs out of guesses
	if (guessesLeft === 0) {

		//Increment losses & and ask if user wants to play again
		losses++;
		var loseConfirm = confirm("Oh no! Time to sharpen those mindreading skills.\nThe letter was \"" + computerGuess + "\". Would you like to play again?");

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

	//Update game display
	var html =
      "<p>Wins: " +  "<span class='display-effect'>" + wins + "</span><br /><br />" +
      "Losses: " + "<span class='display-effect'>" + losses + "</span><br /><br />" + 
      "Guesses left: " + "<span class='display-effect'>" + guessesLeft + "</span><br /><br />" + 
	  "Your guesses so far: " + "<span class='display-effect'>" + currentGuesses + "</span><br /><br />" +
	  "<b>Score: " + "<span class='display-effect'>" + wins + "/" + games + "</span></b></p>";

    userDisplay.innerHTML = html;
}