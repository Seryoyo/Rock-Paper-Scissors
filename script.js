function getComputerChoice(){
    let rps = ["Rock", "Paper", "Scissors"];

    let comChoice = Math.floor(Math.random() * rps.length);

    comChoice = rps[comChoice]

    comChoice = comChoice.charAt(0);

    comChoice = comChoice.toLowerCase()

    return comChoice;
}


function getPlayerChoice(){
    let playerChoice = prompt("What is your Rock Paper Scissors Choice?");

    playerChoice = playerChoice.charAt(0);

    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "It's a Tie!"
    }  
    
    else if(playerSelection == "r" && computerSelection == "p"){
        return "You Lost This Round ):"
    }
  
    else if(playerSelection == "r" && computerSelection == "s"){
        return "You Won This Round!!"
    }

    else if(playerSelection == "s" && computerSelection == "p"){
        return "You Won This Round!!"
    }

    else if(playerSelection == "s" && computerSelection == "r"){
        return "You Lost This Round ):"
    }

    else if(playerSelection == "p" && computerSelection == "s"){
        return "You Lost This Round ):"
    }

    else if(playerSelection == "p" && computerSelection == "r") {
        return "You Won This Round!!"
    }
}

function playGame(){

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    for(let i = 1; i <= 5; i++){

        let comChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        winner = playRound(playerChoice, comChoice);

        if (winner == "You Won This Round!!"){
            playerWins += 1;
        }
        else if (winner == "You Lost This Round ):"){
            computerWins += 1;
        }
        else{
            draws += 1;
        }

        console.log(winner)

        console.log("Player Wins = " + playerWins)
        console.log("Computer Wins = " + computerWins)
        console.log("Draws = " + draws)
        console.log(" ")

       
    }

    if(playerWins > computerWins){
        console.log("YOU WON THE 5 ROUND MATCH!!!!")
    }
    else if(playerWins < computerWins){
        console.log("You lost the 5 round match ):")
    }
    else{
        console.log("You Tied")
    }

}


playGame();

