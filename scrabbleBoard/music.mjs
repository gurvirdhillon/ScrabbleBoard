/* referencing:

* (2017). Retrieved from https://www.youtube.com/watch?v=fldHW2JUofY&t=2s

* Web Audio API - Web APIs | MDN. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

 */

const playThis = document.querySelector('#playMe');
playThis.addEventListener('click', play);

function play() {
  const audio = document.querySelector('#audio');
  audio.play();
}
/*
Karahanidi, A., & Elton, D. (2021). Javascript Audio Play on click.
Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
*/
