'use strict';

alert('Hi, welcome to my page!'); //alert to pop up in prompt
  
  let nickname = prompt('What is your nickname you go by?'); // Question for user interface\
  alert(`Hello ${nickname}, nice to meet you`); // collecting data 
  let locations = prompt('Where are you from?');
  alert(`I never been must be a great place to travel ${locations}`); // $ sign and {} are what variables are for

  let placeOfBirth = prompt('Is my birthplace in California?');
console.log(placeOfBirth);
if (placeOfBirth === 'y' || placeOfBirth === 'yes') {
alert('No, I was born in the Philippines but raised in America.');
} else if  ([placeOfBirth] === 'n' || placeOfBirth === 'no')
alert('I was born in Philippines, first generation immigrant');

let likeHorrorFlick = prompt('Do I like watching horror movies? Yes or No?');
// console.log(likeHorrorFlick);
// let likeHorrorFlicklower = likeHorrorFlicklower.tolowercase();
// console.log(likeHorrorFlick);
alert('Not most enjoy a slasher flick.');
if (likeHorrorFlick === 'y' || likeHorrorFlick === 'yes') {
//console.log('You are right, I love watching horror movies')
alert('You are righ, I love watchin horror movies');
} else if (likeHorrorFlick === 'n' || likeHorrorFlick === 'no') {
    console.log('You are wrong. I enjoy horror movies');
} else {
    //console.log('You need to answer with \'yes\' or a \'no\'');
    alert('You need to answer with \'yes\' or a \'no\'');
  }

  // My Favorite Ice Cream

let score = 0; // starting in beginning

let myFavIceCream = ['chocolate', 'vanilla', 'rockyroad', 'chocolate mint', 'strawberry', 'cookies and cream']; // array of myFavIcecream
let userResponse = 'rocky road';

let attempts = 6;

while (attemptsRemaining) {    
  attempRemaining--;
  console.log('You were close! You have ${attemptsRemaining} attempts remaining.');

for (let i = 0; i < myFavIceCream; i++) {
  console.log(userResponse)
  // 6 - 0 = 6 -1 = 6 this will get to start at 1 attempt then console.log to next attempt
  if (userResponse === myFavIceCream[i]);{
    console.log('You are right!');
    score+++
  }
 }
} 


// How many places I visited
let placesVisited = 6;

// Up to 6 attempts
let guessCount = 6;

// Loop through the guess attempts
while (guessCount > 0) {
  // This is the user's guess
  let guess = prompt('How many different places have I visited between 1-7?');

  // Convert converted to digit
  guess = parseInt(guess);

  // correct input/output
  if (guess === placesVisited) {
    alert('Correct! You guessed the number of places I have visited.');
    break;
  } else if (guess < placesVisited) {
    guessCount--;
   // incorrect input/output
    alert(`Incorrect. The number of places I have visited is higher. You have ${guessCount} guesses left.`);
  } else if (guess > placesVisited) {
    guessCount--;
    alert(`Incorrect. The number of places I have visited is lower. You have ${guessCount} guesses left.`);
  }
}
// Display the correct answer
alert(`The correct number of places I have visited is ${placesVisited}. These places were, Thailand
Vietnam, Cambodia, Bali, Philippines, South Korea`);

  // 6th question: Guess Game: use array , 4 chances to get right, if not : "Nope, you got it wromg", Too low or Too Hight
  // need Loops: if else, 

  // 7th question: Name one of my favorite horror flick? , prompt('Yes, that's rignt'); 6 attemps, Display all at the end
  // .inludes() or .join() are not allowed!

  // while loop
  // let attempRemaining = 4;

 // while () {      // have a condtion that will be false, so it does not do infinite
    //attempRemaining--;
   // console.log('You were close! You have ${attemptsRemaining}');
  
//} 


//for loop, create list option[list], have multiple answer, 


//for (let i = 0; i < attempts; i++) {
  // 6 - 0 = 6 -1 = 6 this will get to start at 1 attempt then console.log to next attempt
 // console.log('You are getting closer. You have ${attempts - i - 1} attempts remaining ')
//}


/*As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
Indicates through an alert if the guess is “too high” or “too low”.
It should give the user exactly four opportunities to get the correct answer.
After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
Add a 7th question that has multiple possible correct answers that are stored in an array.
Give the user 6 attempts to guess the correct answer.
The guesses will end once the user guesses a correct answer or they run out of attempts.
Display all the possible correct answers to the user.
Consider using a loop of some sort for this question.

As a user, I would like to know my final score so that I can know how well I did.
Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
Add a screenshot of your score to your README.md file.
In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

Stay within scope of what was taught so far in class. Do not write functions within your application. 
Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.

Stretch Goals
After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), 
and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
Make the number-guessing question use a random number as its correct answer. */

/*
if (condition) {
 console.log('this code witll ran because conditon was true')
}

=== 
- strictly equal to
evaluate 2 condional statements

||
- is the "logical or"
one true and will run

&& 
- is the 'logical or'
Both have to be true in order for it to run

*/


// Question 7 guess my number
//response if:
//guess response
// gues too high
// guess to low
// guess correct
// how many attempts
// if there are no attempt left
// if there are no attempts left give answer

