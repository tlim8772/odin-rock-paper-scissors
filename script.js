let scores = [0, 0];
let options = ['rock', 'paper', 'scissors'];


const startButton = document.querySelector('.start');
startButton.addEventListener('click', startGame);


// game running props
const scoreBoard = document.createElement('div');
scoreBoard.classList.add('score-board');


const buttons = options.map(c => {
    const img = document.createElement('img');
    img.className = 'choice-img';
    img.dataset.value = c;
    img.src = `${c}.jpeg`;
    img.addEventListener('click', onChoiceClick)
    return img;
})

const choices = document.createElement('div');
choices.append(...buttons);
choices.style.display = 'flex';
choices.style.justifyContent = 'center';
choices.style.gap = '64px';

const outcome = document.createElement('outcome');
outcome.className = 'outcome';


function startGame() {
    startButton.remove();
    scoreBoard.textContent = `Computer: ${scores[0]} Player: ${scores[1]}`;
    outcome.textContent = `Computer: ? Player ?`;
    document.body.append(scoreBoard, choices, outcome);
   
}

function onChoiceClick(e) {
    const playerChoice = e.target.dataset.value;
    const compChoice = options[Math.floor(Math.random() * 2.99)];

    const outcome = document.querySelector('.outcome');
    outcome.textContent = `Computer ${compChoice} Player: ${playerChoice}`;

    const scoreBoard = document.querySelector('.score-board');
    if (playerChoice === 'rock' && compChoice === 'paper') {
        scoreBoard.textContent = `Computer: ${++scores[0]} Player: ${scores[1]}`;
    } else if (playerChoice === 'paper' && compChoice === 'rock') {
        scoreBoard.textContent = `Computer: ${scores[0]} Player: ${++scores[1]}`;
    } else if (playerChoice === 'paper'&& compChoice === 'scissors') {
        scoreBoard.textContent = `Computer: ${++scores[0]} Player: ${scores[1]}`;
    } else if (playerChoice === 'scissors' && compChoice === 'paper') {
        scoreBoard.textContent = `Computer: ${scores[0]} Player: ${++scores[1]}`;
    } else if (playerChoice === 'scissors' && compChoice === 'rock') {
        scoreBoard.textContent = `Computer: ${++scores[0]} Player: ${scores[1]}`;
    } else if (playerChoice === 'rock' && compChoice === 'scissors') {
        scoreBoard.textContent =`Computer: ${scores[0]} Player: ${++scores[1]}`;
    }

    if (scores.includes(5)) endgame();
}

function endgame() {
    Array.from(document.body.children).slice(1).forEach(e => e.remove());

    const div = document.createElement('div');
    div.textContent = `${scores[0] === 5 ? 'Computer wins' : 'Player wins'}`;

    const restartButton = document.createElement('button');
    restartButton.textContent = 'restart';
    restartButton.addEventListener('click', (e) => {
        scores = [0, 0];
        Array.from(document.body.children).slice(1).forEach(e => e.remove());
        document.body.appendChild(startButton);
        startGame();
    });
    restartButton.style.marginLeft = '16px';
    div.appendChild(restartButton);

    document.body.appendChild(div);
}
