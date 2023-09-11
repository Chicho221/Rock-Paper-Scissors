let playerChoice;
let computerChoice;
let scorePlayer = 0;
let scoreComputer = 0;

//Tell computer to choose random number from 1 to 3 and change it into a string
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3 ) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = "rock";
        break;
        case 2:
            computerChoice = "paper";
        break;
        case 3:
            computerChoice = "scissors";
        break;
    }
}
const roundScore = document.createElement('p');
function playRound(){ //Play a round and check who won
    getComputerChoice();
    if(playerChoice === "rock"){
        switch(computerChoice){
            case "rock":
                roundScore.textContent= 'Looks like a draw!';
                result.appendChild(roundScore);
            break;
            case "paper":
                roundScore.textContent= 'Looks that you lost.';
                result.appendChild(roundScore);
                scoreComputer++;
            break;
            case "scissors":
                roundScore.textContent= 'Looks like you won!';
                result.appendChild(roundScore);
                scorePlayer++;
            break;
        }
    } else if(playerChoice === "paper"){
        switch(computerChoice){
            case "paper":
                roundScore.textContent= 'Looks like a draw!';
                result.appendChild(roundScore);
            break;
            case "scissors":
                roundScore.textContent= 'Looks that you lost.';
                result.appendChild(roundScore);
                scoreComputer++;
            break;
            case "rock":
                roundScore.textContent= 'Looks like you won!';
                result.appendChild(roundScore);
                scorePlayer++;
            break;
        }
    }else{
        switch(computerChoice){
            case "scissors":
                roundScore.textContent= 'Looks like a draw!';
                result.appendChild(roundScore);
            break;
            case "rock":
                roundScore.textContent= 'Looks that you lost.';
                result.appendChild(roundScore);
                scoreComputer++;
            break;
            case "paper":
                roundScore.textContent= 'Looks like you won!';
                result.appendChild(roundScore);
                scorePlayer++;
            break;
        }
    }
}

const result = document.querySelector('#result');
const sumScore = document.createElement('p');

function game(){
    playRound();

    sumScore.textContent = `Player ${scorePlayer} : ${scoreComputer} Computer`;
    result.appendChild(sumScore);
    console.log(sumScore);
    annouceWinner();
}

function resetScore(){ //Resets the score
        scoreComputer = 0;
        scorePlayer = 0;
}

const winner = document.createElement('p');
function annouceWinner(){ //Checks if anyone got 5 points
    if(scorePlayer == 5){
        winner.textContent = ('The winner is The Player!');
        result.appendChild(winner)
        resetScore();
    }else if (scoreComputer == 5){
        winner.textContent = ('The winner is The Computer!');
        result.appendChild(winner)
        resetScore();
    }else{
        winner.textContent = ('')
    }  
}


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', () =>{
    playerChoice = btnRock.id;
    game();
}); // onclick runs game function with value rock
btnPaper.addEventListener('click', () =>{
    playerChoice = btnPaper.id;
    game();
}); // onclick runs game function with value paper
btnScissors.addEventListener('click', () =>{
    playerChoice = btnScissors.id;
    game();
}); // onclick runs game function with value scissors