'use strict';

alert('Hi, welcome to my page!');

let nickname = prompt('What is your nickname?'); // Prompt user
alert(`Hello ${nickname}, nice to meet you.`); // template literal that is used for string interpolation

let city = prompt('Where are you from?');
alert(`I've never been there, but it must be a great place to travel to, ${city}.`);

// Funtion Declaration
//function youAreCorrect(message) { //declaring youAreCorrect value Helper Function
//userPoints+++; //add an increment to each function
//c onsole.log(userPoints); // userPoints will console.log 
//}


function birthQ() {
  let placeOfBirth = prompt('Was I born in California?');
  console.log(placeOfBirth);
  if (placeOfBirth === 'y' || placeOfBirth === 'yes') {
    alert('No, I was actually born in the Philippines but raised in America.');
  } else if (placeOfBirth === 'n' || placeOfBirth === 'no') {
    alert('You are correct. I was born in the Philippines and I am a first generation immigrant.');
  } else {
    alert('Please answer with a "yes" or "no".');
  }
}
// Bday
birthQ;

function horrorQ() {
  let likeHorrorFlick = prompt('Do I like watching horror movies? Yes or No?').toLowerCase();

  if (likeHorrorFlick === 'y' || likeHorrorFlick === 'yes'.toLowerCase()) {
    alert('You are right, I love watching horror movies.');
  } else if (likeHorrorFlick === 'n' || likeHorrorFlick === 'no') {
    alert('You are wrong. I enjoy horror movies.');
  } else {
    alert('You need to answer with \'yes\' or \'no\'.');
  }
}
// Horror
horrorQ();

function visitQ() {
  // High low, guessing 
  let placesVisited = 6;

  // They have 6 attempts
  let guessCount = 6;

  // Loop and guess again, while loop will continue to run
  while (guessCount > 0) {
    // Get the user's guess
    let guess = parseInt(prompt('How many places have I visited between 1-7?'));

    // Convert to digits
    guess = parseInt(guess);

    // Check if the guess is correct
    if (guess === placesVisited) {
      alert('Correct! You guessed the number of places I have visited.');
      break; // it will break to next condition
    } else if (guess < placesVisited) {
      guessCount--; // subtract attempt
      alert(`Incorrect. The number of places I have visited is higher. You have ${guessCount} guesses left.`);
    } else if (guess > placesVisited) {
      guessCount--;
      alert(`Incorrect. The number of places I have visited is lower. You have ${guessCount} guesses left.`);
    }
    // Input correct answer
    alert(`The correct number of places I have visited is ${placesVisited}. These places are Thailand, Vietnam, Cambodia, Bali, Philippines, and South Korea.`);

  }
}
// EXCECUTABLE CODES

visitQ();
// Ice cream
function iceQ() {
  // What is my favorite ice cream

  let myFavIceCream = 'rocky road'; // starting in the beginning

  let attemptsRemaining = 6; //attempt to try

  let userResponse = prompt('What is my favorite ice cream flavor? Rocky Road, Vanilla, Chocolate, Strawberry, or Mint Chocolate, or Banana Split');
  while (attemptsRemaining > 0 && myFavIceCream !== userResponse) {
    attemptsRemaining--; //how many attempts left
    console.log(`You have ${attemptsRemaining} attempts remaining.`);
    if (myFavIceCream === userResponse) {
      console.log('You are right!');
    }
  }
  if (attemptsRemaining === 0) {
    console.log(`Sorry, you are out of attempts. My favorite ice cream flavor is ${myFavIceCream}.`);
  }
}
iceQ();

//Food fav
function foodQ() {
  let attempts = 6;
  let favFood = ['mexican', 'chinese', 'indian','italian']; // answer will be lower case
  let correct = false;
  while (attempts >= 1 && !correct) {
    attempts--;
    let foodAnswer = prompt('What is my fav food');
    console.log(foodAnswer);
    for (let i = 0; i <favFood.length; i++) {   
      if (foodAnswer === favFood[i]) {
        alert('Correct! I love Mexican Food!');
        //userPoints++;
        correct = true;
        break;
      }
    }
    if (attempts === 1) {
      alert('You are wrong, but your are getting closer!');
      break;
    }
    if (!correct) {
      alert('Sorry but you need to try again!');
    }
  }
}
foodQ();



