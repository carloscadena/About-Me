'use strict';

// var userName = prompt('What\'s your name?');
// //thank you Danny for this trick
// document.getElementById('helloUser').innerHTML = 'Hello ' + userName + ', I\'m Carlos Cadena';
//
// var confirmQuiz = confirm('Hello ' + userName + ', please take this quiz.');
// if (confirmQuiz){
//   console.log('Awesome! Lets get started.');
// } else {
//   console.log('THIS IS NOT OPTIONAL');
// }
//
// var quizResponse1 = prompt('Am I from Seattle?');
// if (quizResponse1.toUpperCase() === 'Y' || quizResponse1.toUpperCase() === 'YES') {
//   console.log('Wrong! I\'m from Wapato, WA ');
// } else {
//   console.log('Correct! I\'m from Wapato, WA');
// }
//
// var quizResponse2 = prompt('Am I an expert programmer?');
// if (quizResponse2.toUpperCase() === 'Y' || quizResponse2.toUpperCase() === 'YES') {
//   console.log('No, not yet. But I\'m practicing!');
// } else {
//   console.log('You are correct, for now.');
// }
//
// var quizResponse3 = prompt('Do I speak Spanish?');
// if (quizResponse3.toUpperCase() === 'Y' || quizResponse3.toUpperCase() === 'YES') {
//   console.log('Nope :()');
// } else {
//   console.log('You\'re right. It\'s terrible!');
// }
//
// var quizResponse4 = prompt('Do I have a dog?');
// if (quizResponse4.toUpperCase() === 'Y' || quizResponse4.toUpperCase() === 'YES') {
//   console.log('I wish. You\'re wrong, unfortunately.');
// } else {
//   console.log('You are correct, but not for long!');
// }
//
// var quizResponse5 = prompt('Do I have a cat?');
// if (quizResponse5.toUpperCase() === 'Y' || quizResponse5.toUpperCase() === 'YES') {
//   console.log('No! Cat\'s are the worst');
// } else {
//   console.log('Correct! Of course I don\'t have a cat');
// }
// var correctAnswer = false;
// for(var i = 0; i < 4; i++){
//   var quizResponse6 = prompt('How many days into November is my Birthday?');
//   if (quizResponse6 === '4'){
//     correctAnswer = true;
//     alert('Excellent guess, you\'re correct.');
//   } else if (parseInt(quizResponse6) > 4) {
//     alert('That number is too high');
//   } else {
//     alert('That number is too low');
//   }
//   if (correctAnswer === true){
//     break;
//   }
// }
var countriesVisited = ['The Netherlands', 'Portugal', 'Hungary', 'Austria', 'Czech Republic', 'Germany'];
var correctAnswer2 = false;
for (var i = 0; i < 6; i++) {
  var quizResponse7 = prompt('I went to Europe this summer, what countries do you think I went to?');
  if(quizResponse7 = countriesVisited[i]){
    correctAnswer2 = true;
    alert('I did go there! Good guess.');
  } else {
    alert('I wish I could have seen every country in Europe, that was one I missed');
  }
}
