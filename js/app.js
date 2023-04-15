/* When you add the 'use strict'; directive at the top of your JavaScript file or function,]
 it will apply strict mode to all code within that scope.*/
'use strict';

alert('Hi, welcome to my page, friend!');

let userName = prompt('What is your kname?'); // Prompt user
alert(`Hello ${userName}, nice to meet you. Let me ask you a few question if you dont mind so we can get to know each other more`); // template literal that is used for string interpolation

let city = prompt('First, where are you from?');
alert(`I've never been there, but it must be a great place to travel to, ${city}.Lets get started!`); // template literal that is used for string interpolation
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
birthQ();
// CoffeeScript
function coffeeQ() {
  let drinkCoffee = prompt('First question, do I drink coffee regularly? Yes or No?').toLowerCase();

  if (drinkCoffee === 'y' || drinkCoffee === 'yes'.toLowerCase()) { // Lowercase will be valued even if uppercase was input
    alert('You are correct, I drink coffee every day. I love it!');
  } else if (drinkCoffee === 'n' || drinkCoffee === 'no') {
    alert('Incorrect, I am a regular coffee drinker.');
  } else {
    alert('Please answer with \'yes\' or \'no\'.');
  }
}
coffeeQ();

//Height
function heightQ() {
  let afraidOfHeight = prompt('Am I afraid of heights? Yes or No?').toLowerCase();

  if (afraidOfHeight === 'y' || afraidOfHeight === 'yes') {
    alert('You are correct! I am afraid of heights.');
  } else if (afraidOfHeight === 'n' || afraidOfHeight === 'no') {
    alert('Sorry, that is incorrect. I am horrified of heights!.');
  } else {
    alert('Please answer with "Yes" or "No".');
  }
}
heightQ();

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
//icecream
function iceQ() {
  let myFavIceCream = 8; // my score on how much I love ice cream on a scale of 1-10
  let attemptsRemaining = 6; // They have 6 attempts

  // Loop and guess again, while loop will continue to run
  while (attemptsRemaining > 0) {
    // Get the user's guess
    let guess = parseInt(prompt('On a scale of 1-10, how much do I love ice cream? (1 being the lowest and 10 being the highest)'));

    // Check if the guess is correct
    if (guess === myFavIceCream) {
      alert('You guessed my score correctly! I love ice cream a lot.');
      break;
    } else if (guess < myFavIceCream) {
      attemptsRemaining--;
      alert(`Your guess is too low. You have ${attemptsRemaining} attempts left.`);
    } else if (guess > myFavIceCream) {
      attemptsRemaining--;
      alert(`Your guess is too high. You have ${attemptsRemaining} attempts left.`);
    }
  }
}
iceQ();
//visited
function visitQ() {
  let guessCount = 0;

  while (guessCount > 0) {
    let guess = prompt('Have I visited more than 5 countries? Yes or No? (Answer with "Y" or "N")');

    if (guess === 'y' || guess === 'Y' || guess === 'yes' || guess === 'Yes') {
      alert('Correct! I have visited 6 countries.');
      break;
    } else if (guess === 'n' || guess === 'N' || guess === 'no' || guess === 'No') {
      guessCount--;
      alert(`Incorrect. I have visited more than 5 countries. You have ${guessCount} guesses left.`);
    } else {
      alert('Please answer with "Yes" or "No".');
    }

    alert('The correct answer is "Yes". Next question!.');
  }
}
visitQ();
function foodQ() {
  // Declare the number of attempts the user has to answer the question correctly
  let attempts = 6;
  let favFood = ['Mexican', 'Chinese', 'Indian', 'Italian', 'Japanese', 'French', 'Thai', 'Spanish', 'American', 'German', 'Middle Eastern', 'Turkish']; // answer will be lower case
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
let favSports = ['basketball', 'football'];
// Flag to keep track of whether the user's answer is correct
let correct = false;
let userPoints = 0;
let userAnswers = [];

// Loop while the user has remaining attempts and has not yet answered the question correctly
while (attempts >= 1 && !correct) {
  attempts--;

  // Display a prompt dialog asking the user to guess the favorite sport, and store the answer in a variable
  let sportAnswer = prompt('What is my two favorite sport to watch and play? Basketball, Football, Baseball, Soccer, Tennis').toLowerCase();
  //Add the user's answer to the userAnswers array
  userAnswers.push(sportAnswer);

  // Loop through each element in the favSports array
  for (let i = 0; i < favSports.length; i++) {
    // Check if the user's answer matches the current element in the favSports array (ignoring case)
    if (sportAnswer === favSports[i].toLowerCase()) {
      // Display an alert message indicating that the answer is correct
      alert(`Correct! I love to watch and play ${favSports[i]}.`);
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
