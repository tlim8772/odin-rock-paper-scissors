let scores = [0, 0];
let options = ["rock", "paper", "scissors"];
let names = ["computer", "player"];

function getComputerChoice() {
    let i = Math.trunc(Math.random() * 3);
    return options[i];
}

function getPlayerChoice() {
    let c = prompt("What's your choice").toLowerCase();
    const idx = options.find(e => e === c);
    if (idx === undefined) {
        alert("Invalid input. Please input: rock paper scissors");
        return getPlayerChoice();
    }
    return c;
}


// returns 0 if computer wins, 1 with player wins, else -1 with no one wins
function whoWins(arr) {
    if (arr[0] === "rock" && arr[1] == "scissors") {
        return 0;
    } else if (arr[0] === 'scissors' && arr[1] == 'rock') {
        return 1;
    } else if (arr[0] === 'scissors' && arr[1] === 'paper') {
        return 0;
    } else if (arr[0] === 'paper' && arr[1] === 'scissors') {
        return 1;
    } else if (arr[0] === 'paper' && arr[1] === 'rock') {
        return 0;
    } else if (arr[0] === 'rock' && arr[1] === 'paper') {
        return 1;
    }
    return -1;
}

function playRound() {
    let com = getComputerChoice();
    let player = getPlayerChoice();
    
    let winner = whoWins([com, player]);
    if (winner != -1) {
        scores[winner]++;
        alert(`Computer input: ${com}, Player's input: ${player}. ${names[winner]} wins`);
    } else {
        alert(`Computer input: ${com}, Player's input: ${player}. It's a draw`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) playRound();
    if (scores[1] > scores[0]) {
        alert("Player wins");
    } else if (scores[0] > scores[1]) {
        alert("Computer wins");
    } else {
        alert("It's a draw");
    }
    
    
    let playAgain = confirm("Do you want to play again");
    if (playAgain) {
        scores = [0, 0];
        playGame();
    } else {
        return;
    }
}

