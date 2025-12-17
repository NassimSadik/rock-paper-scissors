function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let value = num === 0 ? 'Rock' : num === 1 ? 'Paper' : 'Scissors';

  return value;
}

