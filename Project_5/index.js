let computerChoice=' ';
let userMove;
function choiceOfComputer(){
  let randomNumber=Math.random()*3;
  if(randomNumber>0 && randomNumber<=1){
    return 'Stone';
  }
  else if(randomNumber>1 && randomNumber<=2){
    return 'Paper';
  }
  else{
    return 'Scissor';
  }
}
function getResult(userMove,computerMove){
  if(computerMove===userMove){
    return `It's a Tie`;
  }
  else if(computerMove==='Stone'){
    if(userMove==='Paper'){
      return `User won`;
    }
    else{
      return `Computer won`;
    }
  }
  else if(computerMove==='Paper'){
    if(userMove==='Stone'){
      return `Computer won`;
    }
    else{
      return `User won`;
    }
  }
  else if(computerMove==='Scissor'){
    if(userMove==='Stone'){
      return `User won`;
    }
    else{
      return `Computer won`;
    }
  }
}
function showResult(userMove,computerChoice){
  alert(`User Choice is ${userMove}. Computer Choice is ${computerChoice}. ${getResult('Stone',computerChoice)}.`);
}