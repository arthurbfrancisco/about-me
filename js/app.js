/* When you add the 'use strict'; directive at the top of your JavaScript file or function,]
 it will apply strict mode to all code within that scope.*/
'use strict';

alert('Hi, welcome to my page!');

let nickname = prompt('What is your nickname?'); // Prompt user
alert(`Hello ${nickname}, nice to meet you.`); // template literal that is used for string interpolation

let city = prompt('Where are you from?');
alert(`I've never been there, but it must be a great place to travel to, ${city}.`);


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
// CoffeeScript
function coffeeQ() {
  let drinkCoffee = prompt('Do I drink coffee regularly? Yes or No?').toLowerCase();

  if (drinkCoffee === 'y' || drinkCoffee === 'yes'.toLowerCase()) { // Lowercase will be valued even if uppercase was input
    alert('You are correct, I drink coffee every day.');
  } else if (drinkCoffee === 'n' || drinkCoffee === 'no') {
    alert('Incorrect, I am a regular coffee drinker.');
  } else {
    alert('Please answer with \'yes\' or \'no\'.');
  }
}
coffeeQ();

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


//Icecream Fav
function iceQ() {
  // Declare my favorite ice cream flavor
  let myFavIceCream = 'rocky road'; // starting in the beginning

  // Declare the number of attempts the user has to answer the question correctly
  let attemptsRemaining = 6; //attempt to try

  // Display a prompt dialog asking the user to guess the favorite ice cream flavor, and store the answer in a variable
  let userResponse = prompt('What is my favorite ice cream flavor? Rocky Road, Vanilla, Chocolate, Strawberry, or Mint Chocolate, or Banana Split');

  // Declare variables to keep track of the user's score and the total number of possible points
  let userPoints = 0;
  let possiblePoints = 1;

  // Loop while the user has remaining attempts and has not yet answered the question correctly
  while (attemptsRemaining > 0 && myFavIceCream !== userResponse) {
    attemptsRemaining--; // Decrease the number of attempts left
    alert(`You have ${attemptsRemaining} attempts remaining.`); // Display the number of attempts remaining

    // Check if the user's answer matches the favorite ice cream flavor
    if (myFavIceCream === userResponse) {
      alert('You are right!'); // Display a message indicating that the answer is correct
      userPoints += possiblePoints; // Increment the user's score
    } else if (attemptsRemaining > 0) {
      // Display an alert message indicating that the answer is incorrect and prompt the user to try again
      userResponse = prompt(`Sorry, ${userResponse} is not my favorite ice cream flavor. You have ${attemptsRemaining} attempts remaining. Please try again.`);
    }
  }

  // Check if the user has run out of attempts
  if (attemptsRemaining === 0) {
    // Display a message indicating that the user is out of attempts and reveal the correct answer
    alert(`Sorry, you are out of attempts. My favorite ice cream flavor is ${myFavIceCream}.`);
  } else {
    // Display a message indicating that the user guessed the correct flavor and reveal their score
    alert(`Congratulations! You guessed my favorite ice cream flavor in ${6 - attemptsRemaining} attempts. You scored ${userPoints} out of ${possiblePoints} possible point(s).`);
  }
}

// Call the iceQ function to start the game
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


