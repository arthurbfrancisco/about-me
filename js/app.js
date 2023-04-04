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