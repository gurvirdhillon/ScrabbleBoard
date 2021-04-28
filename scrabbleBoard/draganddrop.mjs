export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

export function dragHandlerOver(e) {
  e.preventDefault();
}

export function dropHandler(e) {
  console.log(e.target);
  if (e.target.classList.contains('cell')) {
    console.log(e.dataTransfer);
    const data = e.dataTransfer.getData('text/plain');
    console.log('test1');
    console.log(data);
    console.log('test1');
    const dragged = document.getElementById(data);
    console.log('test2');
    console.log(dragged);
    console.log('test2');
    e.target.classList.add('dropBoardp');
    e.target.textContent = dragged.textContent;
    e.target(dragged.remove());
    e.target.append(dragged);
  } else {
    alert('unable to drop here :(');
  }
}

export function prepareListeners() {
  const dropzones = document.querySelectorAll('.dropzone');
  for (const dropzone of dropzones) {
    dropzone.addEventListener('dragover', dragHandlerOver);
    dropzone.addEventListener('drop', dropHandler);


    const divs = document.querySelectorAll('div');
    for (const div of divs) {
      div.addEventListener('dragstart', dragStartHandler);
    }
  }
}

window.addEventListener('load', prepareListeners);

/*
Boakes, R. portsoc/ws_drag. Retrieved from
https://github.com/portsoc/ws_drag/blob/master/examples/drag-drop-move/script.js
edited to own needs.
*/

console.log('drag and drop works!');
