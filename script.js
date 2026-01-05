function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let value = num === 0 ? 'Rock' : num === 1 ? 'Paper' : 'Scissors';

  return value;
}

let humanScore = 0;
let computerScore = 0;
const scoreToReach = 5;

function playRound(humanChoice, computerChoice) {
  results.textContent = '';

  if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    results.textContent = `You won! ${humanChoice} beats ${computerChoice}.
    Player score = ${(humanScore += 1)} | Computer score = ${computerScore}`;
  } else if (
    (humanChoice === 'Rock' && computerChoice === 'Paper') ||
    (humanChoice === 'Paper' && computerChoice === 'Scissors') ||
    (humanChoice === 'Scissors' && computerChoice === 'Rock')
  ) {
    results.textContent = `You lose. ${computerChoice} beats ${humanChoice}.
    Player score = ${humanScore} | Computer score = ${(computerScore += 1)}`;
  } else {
    results.textContent = `It's a draw! You and the computer choose ${humanChoice}.
    Player score = ${humanScore} | Computer score = ${computerScore}`;
  }

  if (humanScore == scoreToReach) {
    finalResult.textContent = `You have reached 5 points first! You win!`;
    results.appendChild(finalResult);
  } else if (computerScore == scoreToReach) {
    finalResult.textContent = `Computer have reached 5 points first. You lose.`;
    results.appendChild(finalResult);
  }
}

function gameInProgress() {
  if (humanScore == scoreToReach || computerScore == scoreToReach) {
    return false;
  } else return true;
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const results = document.querySelector('.results');
const finalResult = document.createElement('div');

rockButton.addEventListener('click', () => {
  if (gameInProgress()) {
    const computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
  }
});

paperButton.addEventListener('click', () => {
  if (gameInProgress()) {
    const computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
  }
});

scissorsButton.addEventListener('click', () => {
  if (gameInProgress()) {
    const computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
  }
});
