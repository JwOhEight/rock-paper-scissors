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
            return "It's a tie!";
        } else if (
            (playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Scissors" && computerSelection === "Paper") ||
            (playerSelection === "Paper" && computerSelection === "Rock")
        ) {
            return "You win! " + playerSelection + " beats " + computerSelection + "!";
        } else {
            return "You Lose! " + computerSelection + " beats " + playerSelection + "!";
        }
    }

    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Round " + round + ": Rock, Paper, or Scissors?");
        
        if (!playerSelection) {
            console.log("You cancelled the game.");
            return;
        }

        console.log("You chose " + playerSelection + ".");
        let computerSelection = getComputerChoice();
        console.log("The computer chose " + computerSelection + ".");

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();