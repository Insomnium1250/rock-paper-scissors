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
}

function playGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;

    function nextRound() {
        if (roundNumber < 5) {
            roundNumber++;
            playRound();
            if (playerScore === 3) {
                display.textContent = "You win the game!";
                return;  // Stop the game
            } else if (computerScore === 3) {
                display.textContent = "You lose the game!";
                return;  // Stop the game
            }
            setTimeout(nextRound, 1000);  // Delay for 1 second between rounds
        }
    }

    nextRound();  // Start the game loop
}

const display = document.querySelector("#display")
const playbtn = document.querySelector("#playbtn");
const rockbtn = document.querySelector("#rockbtn");
const paperbtn = document.querySelector("#paperbtn");
const scissorsbtn = document.querySelector("#scissorsbtn");

playbtn.addEventListener("click", () => {
    playGame();
});

