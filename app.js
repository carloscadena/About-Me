'use strict';

var userName = prompt('What\'s your name?');
//thank you Danny for this trick
document.getElementById('helloUser').innerHTML = 'Hello ' + userName + ', I\'m Carlos Cadena';

var correctAnswerCount = 0;
var confirmQuiz = confirm('Hello ' + userName + ', please take this quiz.');
if (confirmQuiz){
  console.log('Awesome! Lets get started.');
} else {
  console.log('THIS IS NOT OPTIONAL');
}

var quizResponse1 = prompt('Am I from Seattle?');
if (quizResponse1.toUpperCase() === 'Y' || quizResponse1.toUpperCase() === 'YES') {
  console.log('Wrong! I\'m from Wapato, WA ');
} else {
  console.log('Correct! I\'m from Wapato, WA');
  correctAnswerCount++;
}

var quizResponse2 = prompt('Am I an expert programmer?');
if (quizResponse2.toUpperCase() === 'Y' || quizResponse2.toUpperCase() === 'YES') {
  console.log('No, not yet. But I\'m practicing!');
} else {
  console.log('You are correct, for now.');
  correctAnswerCount++;
}

var quizResponse3 = prompt('Do I speak Spanish?');
if (quizResponse3.toUpperCase() === 'Y' || quizResponse3.toUpperCase() === 'YES') {
  console.log('Nope :()');
} else {
  console.log('You\'re right. It\'s terrible!');
  correctAnswerCount++;
}

var quizResponse4 = prompt('Do I have a dog?');
if (quizResponse4.toUpperCase() === 'Y' || quizResponse4.toUpperCase() === 'YES') {
  console.log('I wish. You\'re wrong, unfortunately.');
} else {
  console.log('You are correct, but not for long!');
  correctAnswerCount++;
}

var quizResponse5 = prompt('Have I ever had a dog?');
if (quizResponse5.toUpperCase() === 'Y' || quizResponse5.toUpperCase() === 'YES') {
  console.log('I did indeed. She was so sweet.');
  correctAnswerCount++;
} else {
  console.log('Lucky for me that is incorrect.');
}

var correctAnswer = false;
for(var i = 0; i < 4; i++){
  var quizResponse6 = prompt('How many days into November is my Birthday?');
  if (quizResponse6 === '4'){
    correctAnswer = true;
    alert('Excellent guess, you\'re correct.');
    correctAnswerCount++;
  } else if (parseInt(quizResponse6) > 4) {
    alert('That number is too high');
  } else {
    alert('That number is too low');
  }
  if (correctAnswer === true){
    break;
  }
}
var countriesVisited = ['washington', 'oregon', 'california', 'wisconsin', 'hawaii', 'new york', 'nevada', 'utah', 'illinois'];
var correctAnswer2 = false;
for (var i = 0; i < 6; i++) {
  var quizResponse7 = prompt('What US states have I been to? You have 6 tries to get one right.');
  if(countriesVisited.includes(quizResponse7.toLowerCase())){
    correctAnswer2 = true;
    alert('I have been there! Good guess.');
    correctAnswerCount++;
    break;
  } else {
    alert('I haven\'t made it to that one yet, unfortunately.');
  }
}
var finalResults = alert('Nice work ' + userName + '. You got ' + correctAnswerCount + ' out of 7 questions right.');
