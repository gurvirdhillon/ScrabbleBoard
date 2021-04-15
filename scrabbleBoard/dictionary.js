// import { readFileSync } from 'fs';
// const dictionary = readFileSync('csw.txt', 'utf8').split('\r\n');
// console.log(dictionary);

// function report(data, error = false, target = '#responses') {
//   if (typeof data === 'string') data = [data];
// }


async function wordChecker() {
  const word = document.querySelector('#word');
  const result = document.querySelector('#result');

  if (word.value.length === 0) {
    result.textContent = 'Enter a word to check its validity.';
    return;
  }
  const url = 'https://dictionary-dot-sse-2020.nw.r.appspot.com/' + word.value;
  const response = await fetch(url);

  switch (response.status) {
    case 200:
      result.textContent = word.value + ' is a valid word.';
      break;
    case 400:
      result.textContent = word.value + ' is too short.';
      break;
    case 404:
      result.textContent = word.value + ' is not recognised';
      break;
    default:
      result.textContent = ' word checking service is not available at this current time.';
  }
}
function pageLoaded() {
  const word = document.querySelector('#word');
  word.addEventListener('input', wordChecker);
}
window.addEventListener('load', pageLoaded);

/* code extracted from Boakes, R. (2021). portsoc/fetch101.

Retrieved from https://github.com/portsoc/fetch101/tree/master/examples/7_interaction

*/
