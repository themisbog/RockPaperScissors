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
let compChoice=getComputerChoice();
console.log(compChoice);


function getHumanChoice() {
  const chButton = document.querySelector("#playButton");
  const log = document.querySelector("#log");

  if (!chButton || !log) {
    console.warn("Missing #playButton or #log element");
    return;
  }

  chButton.addEventListener("click", () => {
    const raw = prompt("Please enter your choice:");
    if (raw === null) {
      log.innerText = "OK, maybe next time.";
      return;
    }

    const choice = raw.trim().toLowerCase();

    if (choice === "rock") {
      log.innerText = "Rock";
    } else if (choice === "paper") {
      log.innerText = "Paper";
    } else if (choice === "scissors") {
      log.innerText = "Scissors";
    } else if (choice === "") {
      log.innerText = "You didn't enter anything.";
    } else {
      log.innerText = "Please enter one of three options: Rock, Paper, or Scissors";
    }
  });
}
let HumanChoice=getHumanChoice();
console.log(HumanChoice);