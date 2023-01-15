const list = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice() {
  let randomizer = list[Math.floor(Math.random() * list.length)];

  return randomizer;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) { //.toLowerCase() makes input case-insensitive

    //ROCK ALGORITHM
    case list[0].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[2].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase())
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      break;

    //PAPER ALGORITHM
    case list[1].toLowerCase():
      if (computerSelection.toLowerCase() == list[0].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[2].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase())
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      break;

    //SCISSOR ALGORITHM
    case list[2].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase())
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == list[0].toLowerCase())
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase())
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      break;
  }
}

function game(){
  let playerScore = 0;
  let botScore = 0;

  for (let i=1; i < 6; i++){
    playerSelection = prompt("Enter your move (Rock, Paper, or Scissor): ");
    computerSelection = getComputerChoice();
    console.log("Round " + i + ": " + playRound(playerSelection, computerSelection));
  }
}

let computerSelection = getComputerChoice();
let playerSelection = '';

console.log(game(playRound(playerSelection, computerSelection)));
