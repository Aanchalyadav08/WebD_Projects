let computerChoice=' ';
let userMove;
let scoreStr=localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
    win:0,
    lose:0,
    tie:0,
  };
  score.displayScore=function(){
    return `Won:${score.win}, Lost:${score.lose}, Tie:${score.tie}`
  };
  showResult();
}

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
    score.tie++;
    return `It's a Tie`;
  }
  else if(computerMove==='Stone'){
    if(userMove==='Paper'){
      score.win++;
      return `User won`;
    }
    else{
      score.lose++;
      return `Computer won`;
    }
  }
  else if(computerMove==='Paper'){
    if(userMove==='Stone'){
      score.lose++;
      return `Computer won`;
    }
    else{
      score.win++;
      return `User won`;
    }
  }
  else if(computerMove==='Scissor'){
    if(userMove==='Stone'){
      score.win++;
      return `User won`;
    }
    else{
      score.lose++;
      return `Computer won`;
    }
  }
}



function showResult(userMove, computerChoice) {
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user-move').innerText = userMove !== undefined ? `You have chosen ${userMove}` : '';
  document.querySelector('#computer-move').innerText = computerChoice !== undefined ? `Computer has chosen ${computerChoice}` : '';
  if (userMove !== undefined) {
    document.querySelector('#result').innerText = getResult(userMove, computerChoice);
  } else {
    document.querySelector('#result').innerText = ''; // Clear the result text
  }
  document.querySelector('#score').innerText = `Final Score : ${score.displayScore()}`;
}



