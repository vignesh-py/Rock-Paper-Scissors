
let humanScore=0;
let computerScore=0;


function getComputerChoice() {  /*This function returns "Rock" "Paper" or "Scissors*/
  let num=Math.floor(Math.random() * 3); /* Generates number from 0 to 2 and stored in number*/
  if (num ===0){
   return "rock";
  }
  else if (num ==1){
   return "paper";
  }
  else {
   return "scissors";
  }
}

function getHumanChoice(){               /* Getting user input */
  let choice=prompt("Lets play Rock,Paper, scissors!!,Enter your Choice: ");
  return choice;
}

function playRound(humanChoice, computerChoice) {           /*Compare both Human and Computers input and chooses the winner*/
    Choice=humanChoice.toLowerCase()+computerChoice;         /* and increments the winners score by +1*/
    console.log(Choice)
      if (Choice ==="rockrock"){      
          alert("Its a tie!");
      }
      else if(Choice ==="scissorsrock"){
          alert("You lose! Rock beats Scissors");
          return computerScore++ ;                         
      }
      else if(Choice ==="paperrock"){
          alert("You Win! Paper beats Rock");
          return humanScore++ ;
      }
      else if(Choice ==="rockscissors"){
          alert("You win! Rock beats Scissors");
          return humanScore++ ;
      }
      else if(Choice ==="scissorsscissors"){
          alert("Its a tie!");
      }
      else if(Choice ==="paperscissors"){
          alert("You lose! Scissors beats Paper")
          return computerScore++ ;
      }
      else if(Choice ==="rockpaper"){
          alert("You lose! Paper beats Rock");
          return computerScore++ ;
      }
      else if(Choice ==="scissorspaper"){
          alert("You win! Scissors beats Paper");
          return humanScore++ ;
      }
      else if(Choice ==="paperpaper"){
          alert("Its a tie! ");
      }
      else {
          alert("Something went Wrong");
      }
}


function playGame(){                                           /* plays for 5 times and also increses the score*/ 
    humanScore=0;
    computerScore=0;
    for(let game=0;game<5;game++){
        const humanSelection = getHumanChoice();  /* these variable needs to be inside of playgames otherwise itll keep on looping the same input*/
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
            if(humanScore===true){
               humanScore++;
            }  
            else if (computerScore===true){
                computerScore++;
            }
            else{
                continue;
            }
    }

}

playGame();


