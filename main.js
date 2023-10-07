let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const resultDiv = document.querySelector('#result');
const finalResult = document.querySelector('#final-result');

rockBtn.addEventListener('click', () => {
	playerSelection = 'Rock';
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
	playerSelection = 'Paper';
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
	playerSelection = 'Scissors';
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

function getTheRandomNumber() {
	return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
	const number = getTheRandomNumber();
	switch (number) {
		case 0:
			return 'Rock';
		case 1:
			return 'Paper';
		case 2:
			return 'Scissors';
	}
}

function playRound(playerSelection, computerSelection) {
	console.log(playerSelection, computerSelection);
	console.log(playerScore, computerScore);

	if (playerScore >= 5) {
		finalResult.textContent = 'You win!! You reached 5 points.';
	} else if (computerScore >= 5) {
		finalResult.textContent = 'You lose!! Computer reached 5 points.';
	}

	if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		playerScore++;
		resultDiv.textContent = "'You win! Rock beats Scissors'";
	} else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
		resultDiv.textContent = 'Draw! Rock draws Rock';
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		computerScore++;
		resultDiv.textContent = 'You lose! Paper beats Rock';
	} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore++;
		resultDiv.textContent = 'You win! Paper beats Rock';
	} else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
		resultDiv.textContent = 'Draw! Paper draws Paper';
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		computerScore++;
		resultDiv.textContent = 'You lose! Paper beats Scissors';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		playerScore++;
		resultDiv.textContent = 'You win! Scissors beats Paper';
	} else if (
		playerSelection === 'Scissors' &&
		computerSelection === 'Scissors'
	) {
		resultDiv.textContent = 'Draw! Scissors draws Scissors';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		computerScore++;
		resultDiv.textContent = 'You lose! Rock beats Scissors';
	}
}