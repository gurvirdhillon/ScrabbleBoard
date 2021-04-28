/* this file will show the users profile if they choose to create one.
in order to do so i will use a psql file to store the users info.
for this i must create it using psql for managing its storage of data.
*/

// const { text } = require('express');

//  users profile

function userNameGreetings(e) {
  const handle = document.querySelector('#userGreet');
  handle.textContent = 'Welcome ' + e.target.value;
}

const un = document.querySelector('#un');
un.addEventListener('input', userNameGreetings);

// un is short for username

// down below i have set up a user1 and given a 'key'.

// localStorage.setItem('un', 'user1');
// console.log(localStorage.getItem('un'));
// console.log(localStorage.length);

// const userName = {
//   fn: 'user',
//   sn: '1',
//   email: 'user1@user1.co.uk',
// };

// localStorage.lec = JSON.stringify(userName);
// const xyz = JSON.parse(localStorage.lec);
// console.log(xyz.fn);
// console.log(xyz.sn);
// console.log(xyz.email);

/* down below is the method i used for the calculate button and it consists of an array with the value of the numbers
and i have connected it to an event listener that listens for a click which triggers an alert which prompts the user
to type in a word of their choice.
*/
const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

function promptTheScore() {
  let word = prompt('enter a word to calculate the score: ');
  word = word.toUpperCase();

  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    sum += scores[word.charAt(i)];
  }
  alert(sum);
}
const alertMe = document.querySelector('#btn');
alertMe.addEventListener('click', promptTheScore);

/*

code inspired by Scholz, N., Gao, V., & Sauyet, S. (2021). Calculating Score for Scrabble-Java Script. Retrieved 11 April 2021,
from https://stackoverflow.com/questions/58241255/calculating-score-for-scrabble-java-script
edited code according to own needs.
*/

// hint button shown below

const targetHintButton = document.querySelector('#hintActive');
targetHintButton.addEventListener('click', getRandomNumberHint);
targetHintButton.addEventListener('click', generateTheHint);

const hints = ['take a moment. Look at the word and shuffle the words around a little. See if you can come up with something and then test it first if its a real word then calculate its score with the calculator below.',

  'the higher forming words usually start with less common occurences in words such as an X or W.',

  'when possible try getting double and triple points on numbers and letters that can increase your points!',

  'refresh for new words but be AWARE the game will not save your tiles that were on your board beforehand :)',

  'use the previous words when applying your next peice ;) it will give you more points',

  'create a profile and practice your game!',
];

function getRandomNumberHint(max, min) {
  const firstStep = max - min + 1;
  const secondStep = Math.random() * firstStep;
  const resultingStep = Math.floor(secondStep) + min;

  return resultingStep;
}

function generateTheHint() {
  const resultOutput = document.querySelector('#hintOutPut');
  const index = getRandomNumberHint(0, hints.length - 1);
  resultOutput.textContent = hints[index];
}

// remember my word

const handle = document.querySelector('#submitRemember');
handle.addEventListener('click', addList);

function addList() {
  const valueText = document.querySelector('#RememberMyWord').value;
  const NodeList = document.querySelector('#list');
  const NodeOfThings = document.createElement('li');
  const txtNode = document.createTextNode(valueText);

  NodeOfThings.appendChild(txtNode);
  NodeList.appendChild(NodeOfThings);
}

// submitting profile details to local storage.

// const textName = document.querySelector('#');
