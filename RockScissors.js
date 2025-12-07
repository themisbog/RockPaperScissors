function getComputerChoice(){
    let num=Math.random;
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
function getHumanChoice() {
  // 1. Ζητάμε την επιλογή του χρήστη κατευθείαν με prompt
  let choice = prompt("Please enter your choice (Rock, Paper, or Scissors):");

  if (choice === null) {
      return "Please enter a valid choice!";
  }

  return choice.toLowerCase();
}

function playGame() {
   let humanScore=0;
   let computerScore=0;

 function playRound(humanChoice,compChoice){
  if(humanChoice.toLowerCase()==="paper"){
    if(compChoice.toLowerCase()==="rock"){
      humanScore++;
      console.log("You win! Paper beats Rock");}
    else if(compChoice.toLowerCase()==="paper"){
      console.log("Same choice!Nobody takes any point");}
    else if(compChoice.toLowerCase()==="scissors"){
      computerScore++;
       console.log("You lose! Scissors beats Paper");
    } 
   }
    else if(humanChoice.toLowerCase()==="rock"){
        if(compChoice.toLowerCase()==="paper"){
            computerScore++;
            console.log("You lose! Paper beats Rock");}
        else if(compChoice.toLowerCase()==="rock"){
            console.log("Same choice!Nobody takes any point");}
         else if(compChoice.toLowerCase()==="scissors"){
             humanScore++;
              console.log("You win! Rock beats Scissors");}               
    }
    else{
        if(compChoice.toLowerCase()==="paper"){
             humanScore++;
             console.log("You win! Scissors beats Paper");}
        else if(compChoice.toLowerCase()==="rock"){
             computerScore++;
             console.log("You lose! Rock beats Scissors");}
         else if(compChoice.toLowerCase()==="scissors"){
             console.log("Same choice!Nobody takes any point");
             }   
        }       
 }

console.log("Game Started!");

  for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log("Round " + (i + 1));
        playRound(humanSelection, computerSelection);
        console.log("-----------------------");
    }

    // ΤΕΛΙΚΟ ΑΠΟΤΕΛΕΣΜΑ
    console.log("Final Score -> You: " + humanScore + " | Computer: " + computerScore);
    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS! YOU WON THE GAME!");
    } else if (humanScore < computerScore) {
        console.log("GAME OVER. THE COMPUTER WON.");
    } else {
        console.log("IT'S A DRAW!");
    }
  }    
playGame();