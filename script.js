const options = ['ROCK', 'PAPER', 'SCISSORS'];

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return options[random]
}

const getPlayerChoice = () => {
  let choice =  prompt("Please input your choice: ").toUpperCase();
  while(choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS'){
    choice =  prompt("Please input your choice: ").toUpperCase();
  }
  return choice;
}

const getResult = (computerChoice, playerChoice) => {

  const result = (options.indexOf(computerChoice) - options.indexOf(playerChoice) + 3) % 3;

  switch(result){
    case 0: 
      console.log("It is a Draw.");
      return 0;

    case 1:
      console.log("Sorry, you have lost (" + playerChoice + " is defeated by " + computerChoice + " )");
      return -1;

    case 2:
      console.log("Yay! You won. (" + playerChoice + " defeats " + computerChoice + ")");
      return 1;
  }
}

const game = () => {
  let score = 0;

  do{
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    score += getResult(computerChoice, playerChoice);
    
    console.log("Current score = " + score);  
  } while(confirm("Do You want to play again?"))

  return score;
}

const gameResult = (score) => {
  if(score > 0) console.log("You won the tournament.");
  else if(score < 0) console.log("You lost the tournament.");
  else console.log("It was a tie");
}

gameResult(game());