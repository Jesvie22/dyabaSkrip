
let score = JSON.parse(localStorage.getItem('score'));

if (score === null){
    score = {
        win: 0,
        losses: 0,
        ties: 0
    }
}


function playeGame(playerMove){
    const computerMove = pickComputerMove();
   let result = '';
   
   if(playerMove === 'paper'){
    if(computerMove === 'rock'){
        result = 'You win';
    }else if (computerMove === 'scissors'){
        result = 'You lose';
    }else if(computerMove === 'paper'){
        result = 'Tie';
    }
   }else if (playerMove === 'rock'){
    if(computerMove === 'rock'){
        result = 'Tie';
    }else if (computerMove === 'scissors'){
        result = 'You win';
    }else if(computerMove === 'paper'){
        result = 'You lose';
    }
   }else if (playerMove === 'scissors'){
    if(computerMove === 'rock'){
        result = 'You lose';
    }else if (computerMove === 'scissors'){
        result = 'Tie';
    }else if(computerMove === 'paper'){
        result = 'You win';
    }
   }

   if(result === 'You win'){
        score.win += 1;
   }else if(result === 'You lose'){
        score.losses += 1;
   }else if(result === 'Tie'){
        score.ties += 1;
   }

   localStorage.setItem('score', JSON.stringify
   (score));

  scoreUpdateElement();

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-moves')
   .innerHTML = ` You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer` ;
}


function scoreUpdateElement(){
    document.querySelector('.js-score')
   .innerHTML = `Win: ${score.win}, Lose: ${score.losses}, Tie: ${score.ties}`;
}

function pickComputerMove(){
    const randomMove = Math.random();

    let computerMove = '';

    if(randomMove >= 0 && randomMove < 1/3 ){
        computerMove = 'rock';
    }else if (randomMove >= 1/3 && randomMove < 2/3){
        computerMove = 'paper';
    }else if(randomMove >= 2/3 && randomMove < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}