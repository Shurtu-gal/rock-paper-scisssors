const options = ['ROCK', 'PAPER', 'SCISSORS'];

const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return options[random]
}

const getPlayerChoice = () => {
  let choice =  prompt("Please input your choice: ");
  while(choice === null){
    choice =  prompt("Please input your choice: ");
  }
  return choice;
}


do{
  const computerChoice = getComputerChoice().toUpperCase();
  const playerChoice = getPlayerChoice().toUpperCase();

  const result = (options.indexOf(computerChoice) - options.indexOf(playerChoice) + 3) % 3;

  switch(result){
    case 0: 
      console.log("It is a Draw.");
      break;

    case 1:
      console.log("Sorry, you have lost");
      break;

    case 2:
      console.log("Yay! You won.");
      break;
  }

  console.log("Computer\'s Choice = " + computerChoice);
  console.log("Your Choice = " + playerChoice);
} while(confirm("Do You want to play again?"))