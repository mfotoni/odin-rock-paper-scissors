// function getPlayerChoice(playerSelection) {
//   // Convert to lowercase
//   // playerSelection = window.prompt("Rock, paper or scissors?");
//   const choice = playerSelection;
//   document.getElementById("rock").addEventListener("click", function () {
//     playerSelection("rock");
//   });

//   if (choice === "rock" || choice === "paper" || choice === "scissors") {
//     return choice;
//   } else {
//     console.log("Invalid choice. Please choose rock, paper, or scissors");
//   }
// }
let playerSelection;

document.getElementById("rock").addEventListener("click", function () {
  playerSelection = "rock";
});

// const playerChoice = getPlayerChoice();
// const playerSelection = playerChoice;
console.log("Player chose: ", playerSelection);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const computerSelection = getComputerChoice();

// const computerChoice = getComputerChoice();
console.log("Computer chose: ", computerSelection);

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection;
  computerSelection = computerSelection;

  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "DRAW";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "DRAW";
  }
}

// Example usage
// playRound(playerChoice, computerChoice);
console.log(playRound(playerSelection, computerSelection));
