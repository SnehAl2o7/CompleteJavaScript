// Number Guessing Game

const min = 1;
const max = 100;
const ans = Math.floor(Math.random()*(max-min+1)) + min;

let attempt = 0;
let guess;

let run = false;

while(!run){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess < min || guess > max){
        window.alert("Please enter a valid number");
    }
    else {
        attempt++;
        if(guess < ans){
            window.alert("Too low! Try again!");
        }
        else if (guess > ans){
            window.alert(`Too High! Try Again!`);
        }
        else {
            window.alert(`Correct! The answer was ${ans}. It took you ${attempt} attemps.`)
            run = true;
        }
    }
}


