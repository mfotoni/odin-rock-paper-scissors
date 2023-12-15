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
  playRound();
});
document.getElementById("paper").addEventListener("click", function () {
  playerSelection = "paper";
  playRound();
});
document.getElementById("scissors").addEventListener("click", function () {
  playerSelection = "scissors";
  playRound();
});

// const playerChoice = getPlayerChoice();
// const playerSelection = playerChoice;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
const computerSelection = getComputerChoice();

// const computerChoice = getComputerChoice();
console.log("Computer chose: ", computerSelection);

function playRound() {
  // Chama a função playRound com as escolhas do jogador e do computador
  const result = playRound(playerSelection, computerSelection);
  console.log("Player chose: ", playerSelection);
  console.log(result);
}

function playRound(playerSelection, computerSelection) {
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

// document.getElementById("rock").addEventListener("click", function () {
//   playRound(playerSelection, computerSelection);
// });
// Example usage
// playRound(playerChoice, computerChoice);
// console.log(playRound(playerSelection, computerSelection));
