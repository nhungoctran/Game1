
let secretNumber;
let lastGuess;
let guessesRemaining= 10;
let pastGuesses = [];
const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";
const INCORRECT_MESSAGE_LOW = "Wrong! Should be lower.";
const INCORRECT_MESSAGE_HIGH = "Wrong! Should be higher.";
const remaining = document.getElementById("guesses-remaining");
const history = document.getElementById("history-guess");
const message = document.getElementById("message-end");
const button = document.getElementById("but");
const subbox = document.getElementById("sub");

remaining.innerHTML = " " + guessesRemaining;

function generateNumber() {
    return Math.floor(Math.random()*10+1);
}


function makeGuess() {
    if(!secretNumber) {
    secretNumber = generateNumber();  
    }
    if (!input.value) {
    alert("Please input the guess");
    return;
    } 
  
    lastGuess = parseInt(input.value);
    
    if (Number.isNaN(lastGuess) || (lastGuess >10) || (lastGuess <0)) {
    
        alert("Please input number from 1 to 10");
        input.value = "";
        return;
    }
    console.log("Your guess is " + lastGuess);
    pastGuesses.push(lastGuess);
    console.log(pastGuesses.join(","));  
    guessesRemaining--;
    input.value = "";
  
    updatePage();
    if (guessesRemaining === 0) {
        button.disabled = true;
        alert("GAME OVER! RELOAD TO PLAY MORE.");
    }
    
    if ((guessesRemaining <10) && (guessesRemaining > 0)) {
        history.innerHTML = "Your previous guesses: " + String(pastGuesses.join(","));
    }
}


function checkIsCorrect() { 
    if (lastGuess === secretNumber) {
    return 0;
  
    } else if (lastGuess > secretNumber)  {
    return -1;
    
    } else {
    return 1;
    
    }
}



function updatePage() {
    if (!secretNumber) {
        return;
    }
    const correct = document.getElementById("correct");
    const isCorrect = checkIsCorrect();
    
    if (isCorrect === 0) {
        correct.innerHTML = CORRECT_MESSAGE;
        subbox.style.backgroundColor = "green";
        button.disabled = true;
        alert("YOU WON! RELOAD TO PLAY MORE!");
        return;
    }   else if (isCorrect === 1) {
                correct.innerHTML = INCORRECT_MESSAGE_HIGH;
                subbox.style.backgroundColor = "red";
    }   else {
                correct.innerHTML = INCORRECT_MESSAGE_LOW;
                subbox.style.backgroundColor = "red";
    }
    
    remaining.innerHTML = " " + guessesRemaining;
  
}
