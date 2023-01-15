function getComputerChoice() {
  let randomizer = list[Math.floor(Math.random() * list.length)];

  return randomizer;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) { //.toLowerCase() makes input case-insensitive

    //ROCK ALGORITHM
    case list[0].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase()){
        botScore += 1;
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == list[2].toLowerCase()){
        playerScore += 1;
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase()){
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      }

    //PAPER ALGORITHM
    case list[1].toLowerCase():
      if (computerSelection.toLowerCase() == list[0].toLowerCase()){
        playerScore += 1;
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == list[2].toLowerCase()){
        botScore += 1;
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase()){
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      }

    //SCISSOR ALGORITHM
    case list[2].toLowerCase():
      if (computerSelection.toLowerCase() == list[1].toLowerCase()){
        playerScore += 1;
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == list[0].toLowerCase()){
        botScore += 1;
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
      }
      else if (computerSelection.toLowerCase() == playerSelection.toLowerCase()){
        return "It's a tie! Both players chose " + computerSelection.toUpperCase() + "!";
      }
  }
}

function game(){
  for (let i=1; i < 6; i++){
    playerSelection = prompt("Enter your move (Rock, Paper, or Scissor): ");
    computerSelection = getComputerChoice();
    console.log("Round " + i + ": " + playRound(playerSelection, computerSelection));
    }
}

const list = ['Rock', 'Paper', 'Scissor'];

let computerSelection;
let playerSelection = '';

var playerScore = 0;
var botScore = 0;

game(playRound(playerSelection, computerSelection));

if (playerScore > botScore)
  console.log("Player Total Score: " + playerScore + "\nComputer Total Score: " + botScore + "\nYOU WIN!");
else if (playerScore < botScore)
  console.log("Computer Total Score: " + botScore + "\nPlayer Total Score: " + playerScore + "\nYOU LOSE!");
else 
  console.log("It's... a tie... Impossible... How can it be..?")
