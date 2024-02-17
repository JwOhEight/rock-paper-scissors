const choiceOptions = [
    "Rock",
    "Paper",
    "Scissors"
]

function getComputerChoice() {
    console.log(choiceOptions[(Math.floor(Math.random() * choiceOptions.length))]);
}

function playRound(playerSelection, computerSelection) {
    
}
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));