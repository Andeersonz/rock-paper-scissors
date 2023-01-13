let list = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  let randomizer = list[Math.floor(Math.random() * list.length)];

  return randomizer;
}

function playRound(playerSelection, computerSelection) {
  
  /*if (playerSelection.toLowerCase() == list[0].toLowerCase() && computerSelection == list[1].toLowerCase())
    console.log("You lose! Paper beats Rock!");
  else if (playerSelection.toLowerCase() == list[0].toLowerCase() && computerSelection == list[2].toLowerCase())
    console.log("You win! Rock beats Scissors!");
  else if ()*/

  switch (playerSelection.toLowerCase()) { //.toLowerCase() makes input case-insensitive

    //ROCK ALGORITHM
    case list[0].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[2].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      break;

    //PAPER ALGORITHM
    case list[1].toLowerCase():
      if (computerSelection.toLowerCase() == list[0].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[2].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      break;

    //SCISSOR ALGORITHM
    case list[2].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[0].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      break;
  }
}

function game(playRound) {

}

const playerSelection = "PaPer"
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));