function guessingGame() {
	const randNum = Math.floor(Math.random() * 100);
  let tries = 0;
  let won = false;
  const game = function(guess){
  	if(won) return "The game is over, you already won!";
    
  	tries++;
  	if(guess < randNum) return guess + " is too low!";
    if(guess > randNum) return guess + " is too high!";
    if(guess === randNum) return "You win! You found " + randNum + " in " + tries + " guesses.";
  };
  
  return game;
}

module.exports = { guessingGame };
