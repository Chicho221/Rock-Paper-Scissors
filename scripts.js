let playerChoice;
let computerChoice;
let scorePlayer = 0;
let scoreComputer = 0;
//Prompt for user to enter his choice
function getPlayerChoice(){
    playerChoice = prompt("Choose: Rock, Paper, Scissors.");
    playerChoice = playerChoice.toLowerCase();
}
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
//Play a round and check who won
function playRound(){
    getPlayerChoice();
    getComputerChoice();
//Check IF player choice is rock
    if(playerChoice === "rock"){
//Check what computer picked
        switch(computerChoice){
            case "rock":
                alert("Looks like a draw!");
                scoreComputer++;
                scorePlayer++;
            break;
            case "paper":
                alert("Looks that you lost.");
                scoreComputer++;
            break;
            case "scissors":
                alert("Looks like you won!");
                scorePlayer++;
            break;
        }
//Check IF player choice is paper
    } else if(playerChoice === "paper"){
//Check what computer picked
        switch(computerChoice){
            case "paper":
                alert("Looks like a draw!");
                scoreComputer++;
                scorePlayer++;
            break;
            case "scissors":
                alert("Looks that you lost.");
                scoreComputer++;
            break;
            case "rock":
                alert("Looks like you won!");
                scorePlayer++;
            break;
        }
//Check IF player choice is scissors
    }else{
//Check what computer picked
        switch(computerChoice){
            case "scissors":
                alert("Looks like a draw!");
                scoreComputer++;
                scorePlayer++;
            break;
            case "rock":
                alert("Looks that you lost.");
                scoreComputer++;
            break;
            case "paper":
                alert("Looks like you won!");
                scorePlayer++;
            break;
        }
    }
}
//Create function that plays 5 times, keeps a score and reports a winner

function game(){
    resetScore()
    for (let i = 0;i <= 4; i++) {
        playRound();
    }
    alert("Player " + scorePlayer + ":" + scoreComputer + " Computer");
    console.log("Player " + scorePlayer + ":" + scoreComputer + " Computer");
}
//Resets the score

function resetScore(){
    scoreComputer = 0;
    scorePlayer = 0;
}
