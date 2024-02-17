const choiceOptions = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}
function playGame() {
    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
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
}

let playerSelection = prompt("Rock, Paper, or Scissors?")
console.log("You chose " + playerSelection + ".");
let computerSelection = getComputerChoice();
console.log("The computer chose " + computerSelection + ".");
playRound(playerSelection, computerSelection);