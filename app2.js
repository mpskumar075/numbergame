let min=1,
    max=10,
    winningNum=getRandomNum(min, max),
    guessesLeft=3;

    // UI elements
    const game = document.querySelector('#game'),
          minNum = document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn = document.querySelector('#guess-btn'),
          guessInput = document.querySelector('#guess-input'),
          message = document.querySelector('.message');

        //   assign UI min and max

        minNum.textContent = min;
        maxNum.textContent = max;

        // play again event listener
        game.addEventListener('mousedown', function(e) {
            if(e.target.className === 'play-again'){
                window.location.reload();
            }
        });


        // listen to guess

guessBtn.addEventListener('click', function(){
let guess= parseInt(guessInput.value);
if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, 'red');
    }
    // check if won
if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! YOU WON`);
}else{
// wrong number...game continues
guessesLeft -= 1;
if(guessesLeft === 0){
// lost
 gameOver(false, `You Lost. The correct number was ${winningNum}`);
}else{
    // continue--wrong
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
}

}

});

// GAME OVER
function gameOver(won, msg) {
let color;
won === true ? color='green' : color = 'red';


  guessInput.disabled = true;
    // border color for win
    guessInput.style.borderColor=color;
    message.style.color = color;
    // set message
    setMessage(msg);
    // play again

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
// winning  random number
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.style.color=color;
    message.textContent=msg;
}
    