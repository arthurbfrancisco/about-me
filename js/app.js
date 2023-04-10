/* eslint-disable no-undef */
/* When you add the 'use strict'; directive at the top of your JavaScript file or function,]
 it will apply strict mode to all code within that scope.*/
'use strict';

alert('Hi, welcome to my page!');

let nickname = prompt('What is your nickname?'); // Prompt user
alert(`Hello ${nickname}, nice to meet you.`); // template literal that is used for string interpolation

let city = prompt('Where are you from?');
alert(`I've never been there, but it must be a great place to travel to, ${city}.`);

//City Born
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

birthQ;
//Horror
function horrorQ() {
  let likeHorrorFlick = prompt('Do I like watching horror movies? Yes or No?').toLowerCase();

  if (likeHorrorFlick === 'y' || likeHorrorFlick === 'yes'.toLowerCase()) { // Lowercase will be valued even if uppercase was input
    alert('You are right, I love watching horror movies.');
  } else if (likeHorrorFlick === 'n' || likeHorrorFlick === 'no') {
    alert('You are wrong. I enjoy horror movies.');
  } else {
    alert('You need to answer with \'yes\' or \'no\'.');
  }
}

horrorQ();
// #'s of Places Visited
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
visitQ();
// What is my favorite ice cream
function iceQ() {
  let myFavIceCream = 'rocky road'; // starting in the beginning

  let attemptsRemaining = 6; //attempt to try

  let userResponse = prompt('What is my favorite ice cream flavor? Rocky Road, Vanilla, Chocolate, Strawberry, or Mint Chocolate, or Banana Split');

  let userPoints = 0;
  let possiblePoints = 1;

  while (attemptsRemaining > 0 && myFavIceCream !== userResponse) {
    attemptsRemaining--; //how many attempts left
    alert(`You have ${attemptsRemaining} attempts remaining.`);
    if (myFavIceCream === userResponse) {
      alert('You are right!');
      userPoints += possiblePoints;
    } else if (attemptsRemaining > 0) {
      userResponse = prompt(`Sorry, ${userResponse} is not my favorite ice cream flavor. You have ${attemptsRemaining} attempts remaining. Please try again.`);
    }
  }

  if (attemptsRemaining === 0) {
    alert(`Sorry, you are out of attempts. My favorite ice cream flavor is ${myFavIceCream}.`);
  } else {
    alert(`Congratulations! You guessed my favorite ice cream flavor in ${6 - attemptsRemaining} attempts. You scored ${userPoints} out of ${possiblePoints} possible point(s).`);
  }
}
iceQ();

//Food fav
function foodQ() {
  // Declare the number of attempts the user has to answer the question correctly
  let attempts = 6;
  let favFood = ['Mexican', 'Chinese', 'Indian', 'Italian']; // answer will be lower case
  // Flag to keep track of whether the user's answer is correct
  let correct = false;
  // Loop while the user has remaining attempts and has not yet answered the question correctly
  while (attempts >= 1 && !correct) {
    attempts--;
    let foodAnswer = prompt('What is my fav cuisine? Mexican, Chinese, Indian, Italian').toLowerCase();
    console.log(foodAnswer);
    // Loop through each element in the favFood array
    for (let i = 0; i < favFood.length; i++) {
      // Check if the user's answer matches the current element in the favFood array (ignoring case)
      if (foodAnswer === favFood[i].toLowerCase()) {
        alert('Correct! I love Mexican Food!');
        //userPoints++;
        correct = true;
        // Exit the loop
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

//Sport
// Declare the number of attempts the user has to answer the question correctly
let attempts = 6;
// Declare an array of favorite sports for the user to guess
let favSports = ['basketball'];
// Flag to keep track of whether the user's answer is correct
let correct = false;
let userPoints = 0;
let userAnswers = [];

// Loop while the user has remaining attempts and has not yet answered the question correctly
while (attempts >= 1 && !correct) {
  attempts--;

  // Display a prompt dialog asking the user to guess the favorite sport, and store the answer in a variable
  let sportAnswer = prompt('What is my favorite sport to watch and play? Basketball, Football, Baseball, Soccer, Tennis').toLowerCase();
  //Add the user's answer to the userAnswers array
  userAnswers.push(sportAnswer);

  // Loop through each element in the favSports array
  for (let i = 0; i < favSports.length; i++) {
    // Check if the user's answer matches the current element in the favSports array (ignoring case)
    if (sportAnswer === favSports[i].toLowerCase()) {
      // Display an alert message indicating that the answer is correct
      alert('Correct! I love to watch and play basketball!');
      userPoints++;
      correct = true;
      break;
    }
  }
  if (attempts === 1) {
    alert('You are wrong, but you are getting closer!');
    break;
  }

  // Check if the user's answer is not correct
  if (!correct) {
    alert('Sorry, but you need to try again!');
  }
}

//Create a message string that displays the user's score and the total number of possible points
let scoreMsg = `You got ${userPoints} out of ${favSports.length} points.\n`;
// Create a message string that displays the correct answer(s)
let answersMsg = `The correct answer is: ${favSports.join(', ')}.\n`;
// Create a message string that displays the user's answers
let userAnswersMsg = `Your answers were: ${userAnswers.join(', ')}.\n`;
// Display the three message strings concatenated together in a dialog box
alert(scoreMsg + answersMsg + userAnswersMsg);

sportQ();
