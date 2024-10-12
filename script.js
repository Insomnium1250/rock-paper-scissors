let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

const display = document.querySelector("#display");
const playbtn = document.querySelector("#playbtn");
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let difference = (choices.length + choices.indexOf(playerChoice) - choices.indexOf(computerChoice)) % choices.length;

    switch (difference) {
        case 0:
            display.textContent = `It's a tie! You both chose ${playerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`;
            break;
        case 2:
            computerScore++;
            display.textContent = `You lose! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`;
            break;
        default:
            playerScore++;
            display.textContent = `You win! Computer chose ${computerChoice}. Score is now Player: ${playerScore}, Computer: ${computerScore}.`;
            break;
    }

    setTimeout(() => {
        if (playerScore === 3) {
            display.textContent = "You win the game!";
        } else if (computerScore === 3) {
            display.textContent = "You lose the game!";
        } else {
            promptNextRound();
        }
    }, 1000);  // Delay for 1 second to display results
}

function promptNextRound() {
    display.textContent = "Enter your choice: rock, paper, or scissors";
    rockbtn.disabled = false;
    paperbtn.disabled = false;
    scissorsbtn.disabled = false;
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    promptNextRound();  // Start the game by prompting the first round
}

playbtn.addEventListener("click", () => {
    playGame();
});

rockbtn.addEventListener("click", () => {
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
    playRound("rock");
});

paperbtn.addEventListener("click", () => {
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
    playRound("paper");
});

scissorsbtn.addEventListener("click", () => {
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
    playRound("scissors");
});