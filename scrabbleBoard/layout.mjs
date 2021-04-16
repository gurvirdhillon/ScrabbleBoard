// the zoom functionality
const addRange = document.querySelector('#changeLayout');
const page = document.querySelector('#page');

function addZoomInQuality() {
  page.style.zoom = this.value;
}

addRange.addEventListener('change', addZoomInQuality);

//  how i added the colour hidden within the detail

function changeColour() {
  const red = document.querySelector('#red').value;
  const green = document.querySelector('#green').value;
  const blue = document.querySelector('#blue').value;
  const colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = colour;
}
document.querySelector('#red').addEventListener('input', changeColour);
document.querySelector('#green').addEventListener('input', changeColour);
document.querySelector('#blue').addEventListener('input', changeColour);

/*
Philips, R. (2019). JavaScript Function to Change Background Color with Input Range Sliders [Video].
Retrieved from https://www.youtube.com/watch?v=4NuwZaVv0FY
*/
