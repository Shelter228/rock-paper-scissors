function getComputerChoice ()  {

let choice =  Math.floor(Math.random() * 3);
if  (choice === 0) {
    return "камень"
}
else if (choice === 1) {
    return "ножницы"
}
else if (choice === 2) {
    return "бумага"
}
}

function playRound(playerSelection, computerSelection) {
    let compChoice = computerSelection.toLowerCase();
    let playerText = playerSelection.toLowerCase();


    if (playerText === compChoice) {
      return ("ничья");
    }

    else if  (
        (playerText === "камень" && compChoice === "ножницы") ||
        (playerText === "ножницы" && compChoice === "бумага") ||
        (playerText === "бумага" && compChoice === "камень")
    ) {
        return ("вы выиграли");
    }
    else {
        return ("вы проиграли");
    }
 }
 let playerSelection = prompt("выберите : камень ножницы или бумага");
let computerSelection = getComputerChoice();
console.log("Выбор игрока:", playerSelection);
console.log("Выбор компьютера:", computerSelection);
let result = playRound(playerSelection, computerSelection);
alert(result);
