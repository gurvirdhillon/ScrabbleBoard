export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

export function dragHandlerOver(e) {
  e.preventDefault();
}

export function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  e.target.append(dragged);
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
*/

console.log('drag and drop works!');
