let computerScore = 0
let playerScore = 0
let playerSelection = ''
const computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase()
    playerSelection = playerSelection
    console.log('PC', computerSelection)
    console.log('P1', playerSelection)
    if(playerSelection === computerSelection) {
        results('Tie')
    } else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        playerScore++
        playerPoint();
        results('Player 1 Wins!')
    } else if(computerSelection === 'rock' && playerSelection === 'scissors' ||
    computerSelection === 'paper' && playerSelection === 'rock' ||
    computerSelection === 'scissors' && playerSelection === 'paper'       
    ){
        computerScore++
        computerPoint();
        results('Computer Wins!')
    }
}

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3)
    switch(x){
        case 0: 
            return 'rock';
        case 1:  
            return 'paper';
        case 2:  
            return 'scissors';
    }
}
function playerPoint() {
    let playerScoreBox = document.querySelector('.playerCounter')
    playerScoreBox.textContent = playerScore
}

function computerPoint() {
    let computerScoreBox = document.querySelector('.computerCounter')
    computerScoreBox.textContent = computerScore
}

function results(string) {
    let details = document.querySelector('.results')
    details.textContent = string
}

// const selectionButtons = document.querySelectorAll('[data-selection]')

// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButton.dataset.selection
//         makeSelection(selectionName)
//     })
// })

// function makeSelection(selection) {
//     console.log(selection)
// }

document.querySelector('.rock').addEventListener('click', userSelectRock)
document.querySelector('.paper').addEventListener('click', userSelectPaper)
document.querySelector('.scissors').addEventListener('click', userSelectScissors)

function userSelectRock() {
    playerSelection = 'rock'
    console.log(playerSelection)
    playRound(playerSelection, computerSelection)
}

function userSelectPaper() {
    playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
}

function userSelectScissors() {
    playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
}