//Prompt for user to enter his choice
let playerChoice;
function getPlayerChoice(){
    playerChoice = prompt("Choose: Rock, Paper, Scissors.");
}
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
//Play a round and check who won
function playRound(){
    getPlayerChoice();
    getComputerChoice();
//Check IF player choice is rock
    if(playerChoice === "Rock"){
//Check what computer picked
        switch(computerChoice){
            case "Rock":
                alert("Looks like a draw!");
            break;
            case "Paper":
                alert("Looks that you lost.");
            break;
            case "Scissors":
                alert("Looks like you won!");
            break;
        }
//Check IF player choice is paper
    } else if(playerChoice === "Paper"){
//Check what computer picked
        switch(computerChoice){
            case "Rock":
                alert("Looks like a draw!");
            break;
            case "Paper":
                alert("Looks that you lost.");
            break;
            case "Scissors":
                alert("Looks like you won!");
            break;
        }
//Check IF player choice is scissors
    }else{
//Check what computer picked
        switch(computerChoice){
            case "Rock":
                alert("Looks like a draw!");
            break;
            case "Paper":
                alert("Looks that you lost.");
            break;
            case "Scissors":
                alert("Looks like you won!");
            break;
        }
    }
}
