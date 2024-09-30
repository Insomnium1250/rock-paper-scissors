function playRound () {
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
        roundNumber--;
        alert(`It's a tie! You both chose ${playerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
    }
    else if (difference === -1 || difference === 2) {
        playerScore++;
        alert(`You win! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
    }
    else if (difference === 1 || difference === -2) {
        computerScore++;
        alert(`You lose! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
    }
}
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
while (roundNumber < 5) {
    playRound();
    roundNumber++;
    if (playerScore === 3) {
        alert("You win the game!");
        break;
    }
    else if (computerScore === 3) {
        alert("You lose the game!");
        break;
    }
}