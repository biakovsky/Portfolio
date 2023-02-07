const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  
  if (randomNumber === 1) {
	computerChoice = 'kamień'
  }
  if (randomNumber === 2) {
	computerChoice = 'papier'
  }
  if (randomNumber === 3) {
	computerChoice = 'nożyce'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
	result = 'remis'
  }
  if (computerChoice === 'kamień' && userChoice === 'papier') {
	result = 'wygrana'
  }
  if (computerChoice === 'kamień' && userChoice === 'nożyce') {
	result = 'przegrana'
  }
  if (computerChoice === 'nożyce' && userChoice === 'papier') {
	result = 'przegrana'
  }
  if (computerChoice === 'nożyce' && userChoice === 'kamień') {
	result = 'wygrana'
  }
  if (computerChoice === 'papier' && userChoice === 'kamień') {
	result = 'przegrana'
  }	   
  if (computerChoice === 'papier' && userChoice === 'nożyce') {
	result = 'wygrana'
  }	 
  resultDisplay.innerHTML = result
}  
  
  

