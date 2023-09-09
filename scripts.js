//Prompt for user to enter his choice
playerSelection = prompt("Choose: Rock, Paper, Scissors.");
//Check if it's not null, something else or int
//Tell computer to choose random number from 1 to 3 and change it into a string
let computerChoice = 0;
function getComputerChoice(){
    computerChoice = Math.floor(Math.random() * 3 ) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = "Rock";
        break;
        case 2:
            computerChoice = "Paper";
        break;
        case 3:
            computerChoice = "Scissors";
        break;
    }
}
//Check who won

