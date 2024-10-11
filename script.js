let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function playRound () {
    let playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    while (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Invalid choice. Please enter rock, paper, or scissors.").toLowerCase();
    }
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let difference = (choices.length + choices.indexOf(playerChoice) - choices.indexOf(computerChoice)) % choices.length;

    switch(difference){
        case 0:
            roundNumber--;
            alert(`It's a tie! You both chose ${playerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
            break;
        case 2:
            computerScore++;
            alert(`You lose! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
            break;
        default:
            playerScore++;
            alert(`You win! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`);
            break;
    } 
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    
    while (roundNumber < 5) {
        roundNumber++;
        playRound();
        if (playerScore === 3) {
            alert("You win the game!");
            break;
        } else if (computerScore === 3) {
            alert("You lose the game!");
            break;
        }
    }
}