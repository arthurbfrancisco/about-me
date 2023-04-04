'use strict';
/*
if (condition) {
 console.log('this code witll ran because conditon was true')
}

=== 
- strictly equal to
evaluate 2 condional statements

||
- is th "logical or"
one true and will run

&& 
- is the 'logical or'
Both have to be true in order for it to run

*/
alert('Hi, welcome to my page!'); //alert to pop up in prompt
  
  let nickname = prompt('What is your nickname?'); // Question for user interface\
  alert(`Hello ${nickname}`); // collecting data 
  let locations = prompt('Where are you from?');
  alert(`I never been must be a great place to travel ${locations}`); // $ sign and {} are what variables are for

  let placeOfBirth = prompt('Is my birthplace in California?');
alert('I was born in Philippines, first generation immigrant');
if (placeOfBirth === 'Yes' || placeOfBirth === 'yes') {
alert('')
}


let likeHorrorFlick = prompt('Do I like watching horror movies? Yes or No?');
// console.log(likeHorrorFlick);
// let likeHorrorFlicklower = likeHorrorFlicklower.tolowercase();
// console.log(likeHorrorFlick);
alert('Not most enjoy a slasher flick.');
if (likeHorrorFlick === 'yes' || likeHorrorFlick === 'yes') {
//console.log('You are right, I love watching horror movies')
alert('You are righ, I love watchin horror movies');
} else if (likeHorrorFlick === 'no' || likeHorrorFlick === 'no') {
    console.log('You are wrong. I enjoy horror movies');
} else {
    console.log('You need to answer with \'yes\' or a \'no\'');
}

