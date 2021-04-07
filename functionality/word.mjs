// this calculates the words in a sentence.
let word = prompt('enter a word to calculate its score: ');
word = word.toUpperCase();

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

let sum = 0;

for (let i = 0; i < word.length; i++) {
  sum += scores[word.charAt(i)];
}
alert(sum);

async function fetchScoreDetails() {
  const score = await fetch('score.txt');
  const getScoreStuff = await score.text();
  const displayThings = document.querySelector('#scoreTargetText');
  displayThings.textContent = getScoreStuff;
}
fetchScoreDetails();
