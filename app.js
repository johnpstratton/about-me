'use strict.';
// Let's talk about me game
// Give user a set amount of time to read biography
// Intro will be three minutes of read time followed by quiz
// Favorite color
// Where did I grow up
// What position did I play in sports
// What branch of the military was I in
var yourName= prompt ('What is your name');
alert ('Thanks for visiting my page ' + yourName + ' please take the quiz by clicking the button below after reading my biography');
// Clicking the button will generate the function to ask questions about my bio
// document.getElementById('toFunction').onclick = doQuestions;
// var oneSecond = 1000;
// var oneMinute = oneSecond * 60;
// var thirtySeconds = oneSecond * 30;
// console.log (oneMinute);
// onclick (toFunction)= setTimeout (getReady, thirtySeconds);
// var getReady = alert ('Get Ready');
// console.log (getReady + 'Get Ready');  
var numQuestions= 7;
var questionRight= 0;
var guessCount=0;
// function doQuestions () {
const questionOneAnswer = ('yes');
let questionOne = ('Is my favorite color blue');
var questionOneResponse = prompt (questionOne).toLowerCase(), questionOneResponse;
  if (questionOneResponse === questionOneAnswer) {
    // console.log('Great Job!);
    alert ('Great Job!');
    questionRight++;
  } else {
      alert ('Try Again');
      // console.log ('Try Again');
    }
const questionTwoAnswer = ('no')
let questionTwo = ('Did I grow up in Philadelphia?');
var questionTwoResponse = prompt (questionTwo).toLowerCase(), questionTwoResponse;
if (questionTwoResponse === questionTwoAnswer) {
  // console.log ('You got it!');
  alert ('You got it!');
  questionRight++;
} else {
  alert ('So close!');
  // console.log ('So close!');
}
const questionThreeAnswer= ('yes')
let questionThree = ('Did I play goalkeeper in soccer?');
var questionThreeResponse= prompt (questionThree).toLowerCase(), questionThreeResponse;
  if(questionThreeResponse === questionThreeAnswer) {
    // console.log ('Thumbs up!');
    alert ('Thumbs up!');
    questionRight++;
  } else {
      alert ('Try Again');
      // console.log ('Try Again');
    }
const questionFourAnswer= ('yes');
var questionFour = ('Was I in the Army');
var questionFourResponse = prompt (questionFour).toLowerCase(), questionFourResponse;
    if (questionFourResponse === questionFourAnswer) {
      // console.log('Yay you did it!');
      alert ('Yay you did it!');
    questionRight++;
    } else {
      alert ('Come on stinkbrain');
      // console.log('Come on stinkbrain');
    }
const questionFiveAnswer = ('yes')
let questionFive = ('Did I join the Army in 2013');
var questionFiveResponse = prompt (questionFive).toLowerCase(), questionFiveResponse;
    if (questionFiveResponse === questionFiveAnswer) {
      // console.log('Heck yes');
      alert ('Heck Yes');
    questionRight++;
    } else {
      alert ('Try again sucka');
    };
      // console.log ('Try again sucka');
const questionSixAnswer= 7;
let questionSixResponse= prompt ('How many years did I serve in the Army?');
    if (questionSixResponse === questionSixAnswer) {
      alert ('Yay!'); 
      questionRight ++;
      break;
    } else if (questionSixResponse > questionSixAnswer) {
      alert ('Try a lower number');
    } else (questionSixResponse < questionSixAnswer) 
      alert('Try a higher number');
    guessCount ++;
    do {
      var questionSixRetry= prompt ('How many years did I serve in the Army?');
    } while (guessCount < 4);

var favMovies = ['Harry Potter', 'Good Will Hunting', 'Grandma\'s Boy', 'Drive', 'Step Brothers', 'Forrest Gump', 'Any Monty Python', 'Tropic Thunder', 'Saving Private Ryan' , 'A Beautiful Mind'].toLowerCase();
  do {
  var favMoviesQuestion = prompt ('What do you think my favorite movies are?');
    if (favMoviesQuestion === favMovies[0] || favMoviesQuestion === favMovies[1] || favMoviesQuestion === favMovies[2] || favMoviesQuestion === favMovies[3] || favMoviesQuestion === favMovies[4] || favMoviesQuestion === favMovies[5] || favMoviesQuestion === favMovies[6] || favMoviesQuestion === favMovies[7] || favMoviesQuestion === favMovies[8] || favMoviesQuestion === favMovies[9]) {
      alert ('Good Job!');
      questionRight++;
    } else(favMovies !== favMoviesQuestion); {
      alert ('Please try again');
    } 
    guessCount ++;
   } while (guessCount < 6);
    alert (favMovies);
alert ('Congratulations ' + yourName + ', you got ' + questionRight + ' out of' + numQuestions);
// // };