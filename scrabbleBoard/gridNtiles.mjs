// down below is the method i used in order to create the Grid
// these are the draggable tiles that can be put onto the board that will contain the word.


// drag and drop import.
import * as draganddrop from './draganddrop.mjs';
import * as letters from './alphabet.mjs';
// import makeTileLetters as randomGenerator from './alphabet.mjs';

const container = document.getElementById('container');

function makeCells(count = 225) {
  for (let i = 0; i < count; i++) {
    const tileCell = document.createElement('div');
    tileCell.classList.add('cell');
    tileCell.id = `t${i}`;
    container.append(tileCell);
  }
}
makeCells();

const buttonElem = document.querySelector('#nwLtrs');
buttonElem.addEventListener('click', makeAutoTiles);

// this will create new letters which will be given when the users tile rac is empty.
function getNewLetters() {
  document.querySelector('#nwLtrs').addEventListener('click', makeAutoTiles);
}
getNewLetters();

const tileNumber = 0;
function makeAutoTiles() {
  const rackTiles = document.querySelectorAll('#sect1');
  for (const rackTile of rackTiles) {
    if (rackTile.children.length < 7) {
      const divCreator = document.createElement('div');
      divCreator.classList.add('boardp');
      tileNumber++;
      divCreator.id = `letter${tileNumber}`;
      divCreator.draggable = true;
      const nodeText = document.createTextNode(letters.makeTileLetters());
      rackTile.appendChild(nodeText);
    }
  }
  // for (let i = 0; i < 7; i++) {
  //   for (const rackTile of rackTiles) {
  //     if (rackTiles.children === 0) {
  //       const divCreator = document.createElement('div');
  //       divCreator.classList.add('boardp');
  //       divCreator.draggable = true;
  //       // newLtr++;
  //       const tileLtr = document.createTextNode(`${i}`);
  //       tileLtr.appendChild(rackTile);
  //     }
  //   }
  // }
}
makeAutoTiles();

// function GenerateTiles() {
//   const RandomTiles = document.querySelectorAll('.boardp');
//   for (let i = 0; i < 7; i++) {
//     for (const RandomTile of RandomTiles) {
//       const divMaker = document.createElement('div');
//       divMaker.classList.add('boardp');
//       divMaker.draggable = true;
//       const tileLetter = document.textContent(`${i}`);
//       tileLetter.appendChild(RandomTile);
//     }
//   }
// }

// naming the tiles

function tripleThreeWS() {
  const handler = document.querySelectorAll('#t0, #t7, #t14, #t105, #t119, #t210, #t217, #t224');
  for (const handle of handler) {
    const text = document.createTextNode('3WS');
    handle.appendChild(text);
  }
}
tripleThreeWS();

function double2L() {
  const handles = document.querySelectorAll('#t3, #t11, #t36, #t38, #t45, #t52, #t59, #t92, #t96, #t98, #t102, #t108, #t116, #t122, #t126, #t128 ,#t132, #t165, #t172, #t179, #t186, #t188');
  for (const handle of handles) {
    const textLoad = document.createTextNode('2LS');
    handle.appendChild(textLoad);
  }
}
double2L();

function doubleWS() {
  const handlers = document.querySelectorAll('#t16, #t28, #t32, #t42, #t48, #t56, #t64, #t70, #t154, #t160, #t168, #t176, #t182, #t192, #t196, #t208');
  for (const handler of handlers) {
    const text = document.createTextNode('2WS');
    handler.appendChild(text);
  }
}
doubleWS();

function threeLS() {
  const handler = document.querySelectorAll('#t20, #t24, #t76 ,#t80, #t84, #t88, #t136, #t140, #t144, #t148, #t200, #t204');
  for (const handle of handler) {
    const text = document.createTextNode('3LS');
    handle.appendChild(text);
  }
}
threeLS();

function star() {
  const handle = document.querySelector('#t112');
  handle.textContent = '★';
}
star();
