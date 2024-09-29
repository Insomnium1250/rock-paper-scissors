let playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors.").toLowerCase();
}
let playerChoiceNumber;
if (playerChoice === "rock") {
    playerChoiceNumber = 1;
}
else if (playerChoice === "paper") {
    playerChoiceNumber = 2;
}
else {
    playerChoiceNumber = 3;
}
let computerChoiceNumber = Math.floor(Math.random() * 3) + 1;
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[computerChoiceNumber - 1];
let difference = computerChoiceNumber - playerChoiceNumber;
if (difference === 0) {
    alert(`It's a tie! You both chose ${playerChoice}.`);
}
else if (difference === -1 || difference === 2) {
    alert(`You win! Computer chose ${computerChoice}.`);
}
else if (difference === 1 || difference === -2) {
    alert(`You lose! Computer chose ${computerChoice}.`);
}