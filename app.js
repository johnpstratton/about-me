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
document.getElementById('toFunction').onclick = doQuestions;
// var oneSecond = 1000;
// var oneMinute = oneSecond * 60;
// var thirtySeconds = oneSecond * 30;
// console.log (oneMinute);
// onclick (toFunction)= setTimeout (getReady, thirtySeconds);
// var getReady = alert ('Get Ready');
// console.log (getReady + 'Get Ready');
function doQuestions () {
var favColor= prompt ('Is my favorite color blue');
var favColor= favColor.toLowerCase(), favColor;
  if (favColor === 'yes') {
    // console.log('Great Job!);
    alert ('Great Job!');
  }
    else {
      alert ('Try Again');
      // console.log ('Try Again');
    }
var growUp = prompt ('Did I grow up in Philadelphia');
var growUp = growUp.toLowerCase(), growUp;
if (growUp === 'no') {
  // console.log ('You got it!');
  alert ('You got it!');
} else {
  alert ('So close!');
  // console.log ('So close!');
}
var sportsPos = prompt ('I played goalkeeper in soccer');
var sportsPos= sportsPos.toLowerCase (), sportsPos;
  if(sportsPos === 'yes') {
    // console.log ('Thumbs up!');
    alert ('Thumbs up!');
  } else {
      alert ('Try Again');
      // console.log ('Try Again');
    }
var workArmy = prompt ('Was I in the Army');
var workArmy = workArmy.toLowerCase (), workArmy;
    if (workArmy === 'yes') {
      // console.log('Yay you did it!');
      alert ('Yay you did it!');
    } else {
      alert ('Come on stinkbrain');
      // console.log('Come on stinkbrain');
    }
var yearArmy = prompt ('Did I join the Army in 2013');
var yearArmy = yearArmy.toLowerCase (), yearArmy;
    if (yearArmy === "yes") {
      // console.log('Heck yes');
      alert ('Heck Yes');
    } else {
      alert ('Try again sucka');
      // console.log ('Try again sucka');
    };
  };