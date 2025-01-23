function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "камень";
  } else if (choice === 1) {
    return "ножницы";
  } else if (choice === 2) {
    return "бумага";
  }
}

function playRound(playerSelection, computerSelection) {
  let compChoice = computerSelection.toLowerCase();
  let playerText = playerSelection.toLowerCase();

  if (playerText === compChoice) {
    return `Ничья! Выбор соперника: ${compChoice}`;
  } else if (
    (playerText === "камень" && compChoice === "ножницы") ||
    (playerText === "ножницы" && compChoice === "бумага") ||
    (playerText === "бумага" && compChoice === "камень")
  ) {
    return `Вы выиграли! Выбор соперника: ${compChoice}`;
  } else if (
    (compChoice === "камень" && playerText === "ножницы") ||
    (compChoice === "ножницы" && playerText === "бумага") ||
    (compChoice === "бумага" && playerText === "камень")
  ) {
    return `Вы проиграли! Выбор соперника: ${compChoice}`;
  }
  else {
    return " Неверно, Вы должны ввести: Камень Ножницы или Бумага"
  }
};


let playerSelection = prompt("выберите : камень ножницы или бумага");
let computerSelection = getComputerChoice();
let result = playRound(playerSelection, computerSelection);
alert(result);
