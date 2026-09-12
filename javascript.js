
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
    Choice=humanChoice+computerChoice;
    console.log(Choice)
      if (Choice ==="RockRock"){
          alert("Its a tie");
      }
      else if(Choice ==="ScissorsRock"){
          alert("You loose Rock beats Scissors")
      }
      else if(Choice ==="PaperRock"){
          alert("You Win Paper beats Rock")
      }
      else if(Choice ==="RockScissors"){
          alert("You win Rock beats Scissors")
      }
      else if(Choice ==="ScissorsScissors"){
          alert("Its a tie")
      }
      else if(Choice ==="PaperScissors"){
          alert("You loose Scissors beats Paper")
      }
      else if(Choice ==="RockPaper"){
          alert("You loose Paper beats Rock")
      }
      else if(Choice ==="ScissorsPaper"){
          alert("You win Scissors beats Paper")
      }
      else if(Choice ==="PaperPaper"){
          alert("Its a tie ")
      }
      else {
          alert("Something went Wrong")
      }
          }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





