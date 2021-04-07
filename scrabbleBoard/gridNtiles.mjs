// down below is the method i used in order to create the Grid
// these are the draggable tiles that can be put onto the board that will contain the word.


// drag and drop import.
import * as draganddrop from './draganddrop.mjs';
// import * as letters from './alphabet.mjs';
import { fillTileBag } from './alphabet.mjs';
import { tileBag } from './alphabet.mjs';

// fillTileBag();
// tileBag();
// draganddrop();
// NewLetter = 0;

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

const section = document.querySelector('#sect1');

// to be created by randomly picking 7 tiles from the tileBag using Math.random()
const tileRack = ['A', 'B', 'C', 'E', 'E', 'W', 'D'];

function makeUserTiles() {
  // after having selected tileRack
  for (let i = 0; i < tileRack.length; i++) {
    const divMkr = document.createElement('div');
    divMkr.textContent = tileRack[i];
    divMkr.classList.add('boardp');
    divMkr.id = `tile${i}`;
    divMkr.draggable = true;
    section.append(divMkr);
  }
}
makeUserTiles();

// this will create new letters which will be given when the users tile rac is empty.
// function newLettersAlphabet() {
//   const newLetterMaker = document.querySelector("#nwLtrs")
//   newLetterMaker.addEventListener('click', makeAutoTiles);
// }
// newLettersAlphabet();

// function makeAutoTiles() {
//   const rackTiles = document.querySelectorAll('.boardp');
//   for (let i = 0; i < 7; i++) {
//     for (const rackTile of rackTiles) {
//       if (rackTiles.children === 0) {
//         const divCreator = document.createElement('div');
//         divCreator.classList.add('.boardp');
//         divCreator.draggable = true;
//         // newLtr++;
//         const tileLtr = document.createTextNode(`${i}`);
//         tileLtr.appendChild(rackTile);
//       }
//     }
//   }
// }
// makeAutoTiles();

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

function nonWordedTiles() {
  const whites = document.querySelectorAll('#t1, #t2, #t4, #t5, #t6, #t8, #t9, #t10, #t12, #t13, #t15, #t17, #t19, #t18, #t18, #t21, #t22, #t23, #t25, #t26, #t27, #t29, #t30, #t31, #t33, #t34, #t35, #t37, #t39, #t40, #t41, #t43, #t44, #t46, #t47, #t49, #t50, #t51, #t53, #t54, #t55, #t57, #t58, #t60, #t61, #t62, #t63, #t65, #t66, #t67, #t68, #t69, #t71, #t72, #t73, #t74, #t75, #t77, #t78, #t79, #t81, #t82, #t83, #t85, #t86, #t87, #t89, #t90, #t91, #t93, #t94, #t95, #t97, #t99, #t100, #t101, #t103, #t104, #t106, #t107, #t109, #t110, #t111, #t113, #t114, #t115, #t117, #t118, #t120, #t121, #t123, #t124, #t125, #t127, #t129, #t130, #t131, #t133, #t134, #t135, #t137, #t138, #t139, #t141, #t142, #t143, #t145, #t146, #t147, #t149, #t150, #t151, #t152, #t153, #t155, #t156, #t157, #t158, #t159, #t161, #t162, #t163, #t164, #t166, #t167, #t169, #t170, #t171, #t173, #t174, #t175, #t177, #t178, #t180, #t181, #t183, #t184, #t185, #t187, #t189, #t190, #t191, #t193, #t194, #t195, #t197, #t198, #t199, #t201, #t202, #t203, #t205, #t206, #t207, #t209, #t211, #t212, #t213, #t214, #t215, #t216, #t218, #t219, #t220, #t221, #t222, #t223');
  for (const white of whites) {
    const text = document.createTextNode('text');
    white.appendChild(text);
  }
}
nonWordedTiles();

/*
With the nonWordedTiles() function i will treat this as if it had text inside it.
This is so it is easy to put a div inside as it has similar functionality as
the coloured tiles.
*/
