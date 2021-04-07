/* this file shows the letter related functionality including making the tiles in the tilebag and filling it
As well as the score count.

*/
export const tileBag = [];

export function fillTileBag() {
  for (let letter = 'A'; letter < 'Z'; letter++) {
    let numTiles = 1;
    if (letter === 'A' || letter === 'I') {
      numTiles = 9;
    } else if (letter === 'E') {
      numTiles = 12;
    } else if (letter === 'O') {
      numTiles = 8;
    } else if (letter === 'N' || letter === 'R' || letter === 'T') {
      numTiles = 6;
    } else if (letter === 'G') {
      numTiles = 3;
    } else if (letter === 'B' || letter === 'C' || letter === 'C' || letter === 'M' || letter === 'P') {
      numTiles = 2;
    } else if (letter === 'F' || letter === 'H' || letter === 'V' || letter === 'W' || letter === 'Y') {
      numTiles = 2;
    } else if (letter === ' ') {
      numTiles = 2;
    }
    for (let i = 1; i <= numTiles; i++) {
      tileBag.push(letter);
    }
  }
}

fillTileBag();
console.log(tileBag);
// alphabet function will take a random letter from the tile bag.
function alphabet() {
  const randomSelection = Math.floor(Math.random() * fillTileBag.length);
  return tileBag.push(randomSelection);
}
alphabet();

// down below is the score count that i have set up.

const word = document.querySelector('#scoreCount');
// word.toUpperCase();

const outPut = document.querySelector('#resultScore');
// outPut.textContent();
// outPut.addEventListener('input', scoreArray);

// function scoreArray() {
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
// }
// scoreArray();

let sum = 0;

for (let i = 0; i < word.length; i++) {
  sum += scores[word.charAt(i)];
}
console.log(sum);
