
let humanScore=0;
let computerScore=0;


function getComputerChoice() {  /*This function returns "Rock" "Paper" or "Scissors*/
  num=Math.floor(Math.random() * 3); /* Generates number from 0 to 2 and stored in number*/
  if (num ===0){
   return "Rock";
  }
  else if (num ==1){
   return "paper";
  }
  else {
   return "Scissors";
  }
}

 
function getHumanChoice(){
  choice=prompt("Enter your option");
  return choice;
}

