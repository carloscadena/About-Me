'use strict';

var userName = prompt('What\'s your name?')

var confirmQuiz = confirm('Hello ' + userName + ', please take this quiz.');
if (confirmQuiz){
  console.log('Awesome! Lets get started.');
} else {
  console.log('THIS IS NOT OPTIONAL');
}

var quizResponse1 = prompt('Am I from Seattle?');
if (quizResponse1.toUpperCase() === 'Y' || 'YES') {
  console.log('Wrong! I\'m from Wapato, WA ');
} else {
  console.log('Correct! I\'m from Wapato, WA');
}

var quizResponse2 = prompt('Do I drink enough water?');
if (quizResponse2.toUpperCase() === 'Y' || 'YES') {
  console.log('I\'m not sure actually. Probably not');
} else {
  console.log('You\'re probably right.');
}

var quizResponse3 = prompt('Do I speak Spanish?');
if (quizResponse3.toUpperCase() === 'Y' || 'YES') {
  console.log('Nope :()');
} else {
  console.log('You\'re right. It\'s terrible!');
}

var quizResponse4 = prompt('Do I have a dog?');
if (quizResponse4.toUpperCase() === 'Y' || 'YES') {
  console.log('I wish. You\'re wrong, unfortunately.');
} else {
  console.log('You are correct, but not for long!');
}

var quizResponse5 = prompt('Do I have a cat?');
if (quizResponse5.toUpperCase() === 'Y' || 'YES') {
  console.log('No! Cat\'s are the worst');
} else {
  console.log('Of course I don\'t have a cat');
}
