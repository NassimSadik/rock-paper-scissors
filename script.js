function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let value = num === 0 ? 'Rock' : num === 1 ? 'Paper' : 'Scissors';

  return value;
}

function getHumanChoice() {
  let value = prompt('Enter your choice (Rock Paper or Scissors) : ');
  return value;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice.charAt(0).toUpperCase() +
    humanChoice.substring(1).toLowerCase();

  if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    console.log('You won! ' + humanChoice + ' beats ' + computerChoice + '.');
    console.log(
      `Player score = ${(humanScore += 1)} | Computer score = ${computerScore}`
    );
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    console.log('You lose. ' + computerChoice + ' beats ' + humanChoice + '.');
    console.log(
      `Player score = ${humanScore} | Computer score = ${(computerScore += 1)}`
    );
  } else {
    console.log('Its a draw! You and the computer choose ' + humanChoice + '.');
    console.log(
      `Player score = ${humanScore} | Computer score = ${computerScore}`
    );
  }
}

function playGame() {
  let round = 0;
  while (round != 5) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
    round += 1;
    console.log(`Rounds remaining : ${5 - round}`);
  }
}

playGame();
