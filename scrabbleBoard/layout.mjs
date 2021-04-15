const zoomStrength = document.querySelector('#changeLayout');
zoomStrength.addEventListener('range', startScroll);

let scrolling;

function startScroll(dir) {
  if (scrolling) {
    clearInterval(scrolling);
    scrolling = null;
  } if (dir !== 0) {
    scrolling = window.setInterval(
      () => {
        window.scrollBy({ top: dir, behavior: 'smooth' });
      },
      1000,
    );
  }
}

function controlScroll(e) {
  if (e.key === 'ArrowDown') startScroll(100);
  if (e.key === 'ArrowUp') startScroll(100);
  if (e.key === 'Space') startScroll(0);
}
controlScroll();

function handleDrop(e) {
  e.preventDefault();
}

function handleDragOver(e) {
  e.preventDefault();
}

function init() {
  window.addEventListener('dragover', handleDragOver);
  window.addEventListener('drop', handleDrop);
}
init();
