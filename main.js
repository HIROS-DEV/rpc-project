let playerScore = 0;
let computerScore = 0;

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

function getPlayerChoice() {
	const playerChoice = prompt('Rock, Paper, Scissors', '');

	if (playerChoice === undefined || playerChoice === null) return;

	if (playerChoice.toLowerCase() === 'rock') {
		return 'Rock';
	} else if (playerChoice.toLowerCase() === 'paper') {
		return 'Paper';
	} else if (playerChoice.toLowerCase() === 'scissors') {
		return 'Scissors';
	} else {
		return getPlayerChoice();
	}
}

function playRound(playerSelection, computerSelection) {
	console.log(playerSelection, computerSelection);
	if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		playerScore++;
		return 'You win! Rock beats Scissors';
	} else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
		return 'Draw! Rock draws Rock';
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		computerScore++;
		return 'You lose! Paper beats Rock';
	} else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore++;
		return 'You win! Paper beats Rock';
	} else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
		return 'Draw! Paper draws Paper';
	} else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		computerScore++;
		return 'You lose! Paper beats Scissors';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		playerScore++;
		return 'You win! Scissors beats Paper';
	} else if (
		playerSelection === 'Scissors' &&
		computerSelection === 'Scissors'
	) {
		return 'Draw! Scissors draws Scissors';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		computerScore++;
		return 'You lose! Rock beats Scissors';
	}
}

function game() {
	for (let i = 1; i <= 5; i++) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}

	if (playerScore > computerScore) {
		return "You win!!"
	} else if (playerScore < computerScore) {
		return "You lose!!"
	} else {
		return "You draw!!"
	}
}

console.log(game());
