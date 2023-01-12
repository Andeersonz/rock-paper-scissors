function getComputerChoice() {
  let list = ['Rock', 'Paper', 'Scissors'];
  let randomizer = list[Math.floor(Math.random() * list.length)];

  return randomizer;
}



console.log(getComputerChoice())