const guessButton = document.querySelector('.guess-button')
const prevGuesses = document.querySelector('.previous')
const remGuesses = document.querySelector('.remaining')
const input = document.querySelector('input')
const row = document.querySelector('.row')
const newGameBtn = document.querySelector('.new-game')

var number = Math.floor(Math.random()*101)
var remGuessNum = 10;
var prevGuessNum = 0;

var disabledButton = true

function newGame(){
    number = Math.floor(Math.random()*101)
    remGuessNum = 10;
    remGuesses.textContent = remGuessNum;
    prevGuessNum = 0;
    prevGuesses.textContent = prevGuessNum;
    disabledButton = true
    input.value = ''
    row.textContent = ''
    guessButton.classList.remove('disable')
    console.log(number)
}

guessButton.addEventListener('click', () => {
   if(disabledButton) {
    
    if(+input.value > number){
        row.textContent = 'Too Hight! Try again!'
    }else if(+input.value < number){
        row.textContent = 'Too Low! Try again!'
    }else if(+input.value == number){
        row.textContent = 'Congrats! You Won!'
        guessButton.classList.add('disable')
        disabledButton = false
    }
    prevGuessNum++;
    prevGuesses.textContent = prevGuessNum;
    remGuessNum--;
    remGuesses.textContent = remGuessNum;
    
    if(remGuessNum==0){
        row.textContent = 'You Loose! Try again!'
        guessButton.classList.add('disable')
        disabledButton = false
        }
    }
})
console.log(number)

newGameBtn.addEventListener('click', () => {
    newGame();
})







