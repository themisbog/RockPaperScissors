function getComputerChoice(){
    let num=Math.random();
    if(num<1/3){
        return "Rock";
    }
    else if(num<2/3){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}
let humanScore=0;
let computerScore=0;

const btn1 = document.querySelector("#btnRock");
btn1.addEventListener("click", () => {
  playRound("rock",getComputerChoice());    
});

const btn2 = document.querySelector("#btnPaper");
btn2.addEventListener("click", () => {
  playRound("paper",getComputerChoice());
});

const btn3 = document.querySelector("#btnScissors");
btn3.addEventListener("click", () => {
  playRound("scissors",getComputerChoice());
});

function playRound(humanChoice,compChoice){
    const resultsContainer = document.querySelector("#results"); 
    const scoreContainer = document.querySelector("#currentScore");
    const FinalContainer = document.querySelector("#final-announcement");  

  if(humanChoice.toLowerCase()==="paper"){
    if(compChoice.toLowerCase()==="rock"){
      humanScore++;
      resultsContainer.textContent = "You win! Paper beats Rock";}
    else if(compChoice.toLowerCase()==="paper"){
      resultsContainer.textContent ="Same choice!Nobody takes any point."}
    else if(compChoice.toLowerCase()==="scissors"){
      computerScore++;
       resultsContainer.textContent ="You lose! Scissors beats Paper";
    } 
   }
    else if(humanChoice.toLowerCase()==="rock"){
        if(compChoice.toLowerCase()==="paper"){
            computerScore++;
            resultsContainer.textContent ="You lose! Paper beats Rock";}
        else if(compChoice.toLowerCase()==="rock"){
            resultsContainer.textContent ="Same choice!Nobody takes any point";}
         else if(compChoice.toLowerCase()==="scissors"){
             humanScore++;
              resultsContainer.textContent ="You win! Rock beats Scissors";}               
    }
    else{
        if(compChoice.toLowerCase()==="paper"){
             humanScore++;
             resultsContainer.textContent ="You win! Scissors beats Paper";}
        else if(compChoice.toLowerCase()==="rock"){
             computerScore++;
             resultsContainer.textContent ="You lose! Rock beats Scissors";}
         else if(compChoice.toLowerCase()==="scissors"){
             resultsContainer.textContent ="Same choice!Nobody takes any point";
             }   
        }     
        scoreContainer.textContent ="Final Score -> You: " + humanScore + " | Computer: " + computerScore;
        if(humanScore==5 || computerScore==5){
            if (humanScore > computerScore) {
                 FinalContainer.textContent="CONGRATULATIONS! YOU WON THE GAME!";
            } else if (humanScore < computerScore) {
                 FinalContainer.textContent="GAME OVER. THE COMPUTER WON.";
            } else {
                 FinalContainer.textContent="IT'S A DRAW!";
            }

        }
        
        }

