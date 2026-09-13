
let humanScore=0;
let computerScore=0;


function getComputerChoice() {  /*This function returns "Rock" "Paper" or "Scissors*/
  num=Math.floor(Math.random() * 3); /* Generates number from 0 to 2 and stored in number*/
  if (num ===0){
   return "Rock";
  }
  else if (num ==1){
   return "Paper";
  }
  else {
   return "Scissors";
  }
}

function getHumanChoice(){
  choice=prompt("Enter your option");
  return choice;
}

function playRound(humanChoice, computerChoice) {
    Choice=humanChoice.toLowerCase()+computerChoice;
    console.log(Choice)
      if (Choice ==="rockRock"){
          alert("Its a tie!");
      }
      else if(Choice ==="scissorsRock"){
          alert("You lose! Rock beats Scissors")
      }
      else if(Choice ==="paperRock"){
          alert("You Win! Paper beats Rock")
      }
      else if(Choice ==="rockScissors"){
          alert("You win! Rock beats Scissors")
      }
      else if(Choice ==="scissorsScissors"){
          alert("Its a tie!")
      }
      else if(Choice ==="paperScissors"){
          alert("You lose! Scissors beats Paper")
      }
      else if(Choice ==="rockPaper"){
          alert("You lose! Paper beats Rock")
      }
      else if(Choice ==="scissorsPaper"){
          alert("You win! Scissors beats Paper")
      }
      else if(Choice ==="paperPaper"){
          alert("Its a tie! ")
      }
      else {
          alert("Something went Wrong")
      }
          }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





