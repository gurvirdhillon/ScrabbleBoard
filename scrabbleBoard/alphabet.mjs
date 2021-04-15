/* this file shows the letter related functionality including making the tiles in the tilebag and filling it
As well as the score count.

*/

const tiles = ['A', 'A', 'A', 'C', 'E', 'E', 'F', 'G', 'H', 'I', 'I', 'E', 'I', 'I', 'I', 'I', 'A', 'B', 'I', 'M', 'N', 'N', 'E', 'E', 'N', 'N', 'D', 'E', 'N', 'N', 'R', 'R', 'R', 'R', 'R', 'R', 'T', 'T', 'A', 'T', 'T', 'T', 'O', 'A', 'O', 'O', 'I', 'J', 'L', 'O', 'O', 'O', 'O', 'E', 'E', 'O', 'O', 'P', 'Q', 'R', 'S', 'S', 'A', 'S', 'S', 'L', 'L', 'L', 'L', 'L', 'T', 'U', 'U', 'U', 'U', 'V', 'X', 'Y', 'Z', ' ', ' ', 'A', 'A'];
export function makeTileLetters() {
  const makeTile = Math.floor(Math.random() * tiles.length);
  return tiles[makeTile];
}
makeTileLetters();

export function createNewTiles() {
  const handleLetters = document.querySelector('#sect1');
  for (let i = 0; i < 7; i++) {
    const newReplaceMentTile = document.createElement('div');
    newReplaceMentTile.classList.add('.boardp');
    newReplaceMentTile.textContent = makeTileLetters();
    newReplaceMentTile.id = `tile${i}`;
    newReplaceMentTile.draggable = true;
    handleLetters.append(newReplaceMentTile);
    document.querySelector('#sect1').appendChild(newReplaceMentTile);
  }
}
createNewTiles();

const tileRackHolder = document.querySelector('#sect1');
const buttonPresser = document.querySelector('#nwLtrs').addEventListener('click', RandomGenerateTiles);

function RandomGenerateTiles() {
  for (let i = 0; i < 7; i++) {
    if (tileRackHolder === '') {
      const makeMoreTiles = document.createElement('div');
      makeMoreTiles.textContent = createNewTiles;
      makeMoreTiles.classList.add('.boardp');
      makeMoreTiles.id = `tile${i}}`;
      makeMoreTiles.append(buttonPresser);
    }
  }
}
RandomGenerateTiles();
