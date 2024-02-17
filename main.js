const choiceOptions = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}

getComputerChoice();