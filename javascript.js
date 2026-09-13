
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
  let hInput=prompt("Lets Play Rock,Paper,Scissors!!,Enter Your Choice: ");
  return hInput;
}


function playRound(humanChoice, computerChoice) {           /*Compare both Human and Computers input and chooses the winner*/
    Choice=humanChoice.toLowerCase()+computerChoice;         /* and increments the winners score by +1*/
    console.log(Choice)
      if (Choice ==="rockrock"){      
          alert("Its a Tie!");
      }
      else if(Choice ==="scissorsrock"){
          alert("You Lose! Rock beats Scissors");
          return computerScore++ ;                         
      }
      else if(Choice ==="paperrock"){
          alert("You Win! Paper beats Rock");
          return humanScore++ ;
      }
      else if(Choice ==="rockscissors"){
          alert("You Win! Rock beats Scissors");
          return humanScore++ ;
      }
      else if(Choice ==="scissorsscissors"){
          alert("Its a Tie!");
      }
      else if(Choice ==="paperscissors"){
          alert("You Lose! Scissors beats Paper")
          return computerScore++ ;
      }
      else if(Choice ==="rockpaper"){
          alert("You Lose! Paper beats Rock");
          return computerScore++ ;
      }
      else if(Choice ==="scissorspaper"){
          alert("You win! Scissors beats Paper");
          return humanScore++ ;
      }
      else if(Choice ==="paperpaper"){
          alert("Its a Tie! ");
      }
      else {
          alert("Something went wrong");
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
console.log(`humanScore: ${humanScore}`);
console.log(`computer score: ${computerScore}`);
alert(` Your Score is :${humanScore}\n Computer score is :${computerScore}`); 

if (humanScore>computerScore){                  /* compares who got higher score and dispalys winner*/
    alert("Yay! you WIN:)");     
    console.log("Yay! you WIN:)");                    
}
else if (humanScore<computerScore){
    alert("OH! you LOST :(");
    console.log("OH! you LOST :(");
}
else{
    alert("Its a TIE ;)");
    console.log("Its a TIE ;)");
}


