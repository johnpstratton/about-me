// 'use strict.';
// // Let's talk about me game
// // Give user a set amount of time to read biography
// // Intro will be three minutes of read time followed by quiz
// // Favorite color
// // Where did I grow up
// // What position did I play in sports
// // What branch of the military was I in


var yourName = prompt('What is your name');
alert('Thanks for visiting my page ' + yourName + ' please take the quiz by clicking the button below after reading my biography');


// // Clicking the button will generate the function to ask questions about my bio
// // document.getElementById('toFunction').onclick = doQuestions;
// // var oneSecond = 1000;
// // var oneMinute = oneSecond * 60;
// // var thirtySeconds = oneSecond * 30;
// // console.log (oneMinute);
// // onclick (toFunction)= setTimeout (getReady, thirtySeconds);
// // var getReady = alert ('Get Ready');
// // console.log (getReady + 'Get Ready');  


var numQuestions = 7;
var questionRight = 0;
var guessCount = 0;


// // function doQuestions () {

function Question1() {
  const questionOneAnswer = ('yes');
  var questionOneResponse = prompt('Is my favorite color blue').toLowerCase();
  if (questionOneResponse === questionOneAnswer) {
    // console.log('Great Job!);
    alert('Great Job!');
    questionRight++;
  } else {
    alert('Try Again');
    // console.log ('Try Again');
  }
}

function Question2() {
  const questionTwoAnswer = ('no')
  var questionTwoResponse = prompt('Did I grow up in Philadelphia?').toLowerCase();
  if (questionTwoResponse === questionTwoAnswer) {
    // console.log ('You got it!');
    alert('You got it!');
    questionRight++;
  } else {
    alert('So close!');
    // console.log ('So close!');
  }
}

function Question3() {
  const questionThreeAnswer = ('yes')
  var questionThreeResponse = prompt('Did I play goalkeeper in soccer?').toLowerCase();
  if (questionThreeResponse === questionThreeAnswer) {
    // console.log ('Thumbs up!');
    alert('Thumbs up!');
    questionRight++;
  } else {
    alert('Try Again');
    // console.log ('Try Again');
  }
}

function Question4() {
  const questionFourAnswer = ('yes');
  var questionFourResponse = prompt('Was I in the Army').toLowerCase();
  if (questionFourResponse === questionFourAnswer) {
    // console.log('Yay you did it!');
    alert('Yay you did it!');
    questionRight++;
  } else {
    alert('Come on stinkbrain');
    // console.log('Come on stinkbrain');
  }
}

function Question5() {
  const questionFiveAnswer = ('yes')
  var questionFiveResponse = prompt('Did I join the Army in 2013').toLowerCase();
  if (questionFiveResponse === questionFiveAnswer) {
    // console.log('Heck yes');
    alert('Heck Yes');
    questionRight++;
  } else {
    alert('Try again sucka');
    // // console.log ('Try again sucka');
  }
}


// // const questionSixAnswer= 7;
// // let questionSixResponse= prompt ('How many years did I serve in the Army?');
// // if (questionSixResponse === questionSixAnswer) {
// //   alert ('Yay!'); 
// //   questionRight ++;
// // } else if (questionSixResponse > questionSixAnswer) {
// //   alert ('Try a lower number');
// // } else (questionSixResponse < questionSixAnswer) 
// //   alert('Try a higher number');
// // guessCount ++;



function Question6() {
  do {
    var questionSix = prompt('How many years did I serve in the Army? 1-20');
    if (questionSix == 7) {
      alert('Good Job')
      // console.log (questionSix + ' Good Job');
      questionRight++
      break;
    } else if (questionSix < 7) {
      alert('That was too low')
    } else if (questionSix > 7) {
      alert('That was too high')
    } guessCount++
  } while (guessCount < 4);
}


function Question7() {
  do {
    var favMovies = ['harry potter', 'good will hunting', 'grandma\'s boy', 'drive', 'step brothers', 'forrest gump', 'any monty python', 'tropic thunder', 'saving private ryan', 'a beautiful mind'];
    var favMoviesQuestion = prompt('What do you think my favorite movies are?');
    if (favMovies[0] === favMoviesQuestion || favMovies[1] === favMoviesQuestion) {
      alert('Good Job!')
      questionRight++
      break;
    } else (!favMoviesQuestion); {
      alert('Please try again')
    }
    guessCount++
  } while (guessCount < 6);
  alert('Here is a list of my favorite movies ' + favMovies);
}

Question1();
Question2();
Question3();
Question4();
Question5();
Question6();
Question7();


alert('Congratulations ' + yourName + ', you got ' + questionRight + ' out of ' + numQuestions);
// // };

