const choiceOptions = [
    "Rock",
    "Paper",
    "Scissors"
]

function getComputerChoice() {
    console.log(choiceOptions[(Math.floor(Math.random() * choiceOptions.length))]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection = computerSelection) {
        console.log("It's a tie!")
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
    ) {
        console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection + "!");
    }
}
  
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));