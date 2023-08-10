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

    if(wins > 3){
        const won = document.createElement('h1');
        scoreboard.textContent = "wins: " + "5" + " losses: " + losses;
        won.textContent = "YOU WON YIPPEEE!!!!!";
        winner.appendChild(won);
        
        
        return;
    }
    else if(losses > 3){
        const lost =document.createElement('h1');
        scoreboard.textContent = "wins: " + wins + " losses: " + "5";
        lost.textContent= "You lost NOOOOOOOOOOOO!!!!";
        winner.appendChild(lost);
        
        return;
    }

    if(playerSelection == computerSelection){
        gameResult.textContent = "It's a Tie!";
    }  
    
    else if(playerSelection == "r" && computerSelection == "p"){
        gameResult.textContent = "You Lost This Round ):";
        losses += 1;
    }
  
    else if(playerSelection == "r" && computerSelection == "s"){
        gameResult.textContent = "You Won This Round!!";
        wins += 1;
    }

    else if(playerSelection == "s" && computerSelection == "p"){
        gameResult.textContent = "You Won This Round!!";
        wins += 1;
    }

    else if(playerSelection == "s" && computerSelection == "r"){
        gameResult.textContent = "You Lost This Round ):";
        losses += 1;
    }

    else if(playerSelection == "p" && computerSelection == "s"){
        gameResult.textContent = "You Lost This Round ):";
        losses += 1;
    }

    else if(playerSelection == "p" && computerSelection == "r") {
        gameResult.textContent = "You Won This Round!!";
        wins += 1;
    }
    result.appendChild(gameResult);
    scoreboard.textContent = "wins: " + wins + " losses: " + losses;



    
}

    const result = document.querySelector('.result');
    const gameResult = document.createElement('p');
    const scoreText = document.createElement('p');
    const scoreboard= document.querySelector('.scoreboard');
    const winner = document.querySelector('.winner');
    
    let wins = 0;
    let losses = 0;

    

        

    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => btn.addEventListener('click', () => {
        playRound(btn.id, getComputerChoice())
        }));

 



    
    
    
    
    





























// function playGame(){

//     let playerWins = 0;
//     let computerWins = 0;
//     let draws = 0;

//     for(let i = 1; i <= 5; i++){

//         let comChoice = getComputerChoice();
//         let playerChoice = getPlayerChoice();
//         winner = playRound(playerChoice, comChoice);

//         if (winner == "You Won This Round!!"){
//             playerWins += 1;
//         }
//         else if (winner == "You Lost This Round ):"){
//             computerWins += 1;
//         }
//         else{
//             draws += 1;
//         }

//         console.log(winner)

//         console.log("Player Wins = " + playerWins)
//         console.log("Computer Wins = " + computerWins)
//         console.log("Draws = " + draws)
//         console.log(" ")

       
//     }

//     if(playerWins > computerWins){
//         console.log("YOU WON THE 5 ROUND MATCH!!!!")
//     }
//     else if(playerWins < computerWins){
//         console.log("You lost the 5 round match ):")
//     }
//     else{
//         console.log("You Tied")
//     }

// }


//playGame();

