/* referencing:

* (2017). Retrieved from https://www.youtube.com/watch?v=fldHW2JUofY&t=2s

* Web Audio API - Web APIs | MDN. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

*/

const playThis = document.querySelector('#playMe');
playThis.addEventListener('click', play);

const stopThis = document.querySelector('#stopButton');
stopThis.addEventListener('click', stopPlay);

function play() {
  const audio = document.querySelector('#audio');
  audio.play();
}

function stopPlay() {
  const audio = document.querySelector('#audio');
  audio.pause();
}

/*
Karahanidi, A., & Elton, D. (2021). Javascript Audio Play on click.
Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
edited according to own requirements
*/

/*

Soundtrack extracted from:
AShamaluevMusic. (2019). Revolution - Epic Motivational Background Music / Cinematic Orchestral Music. 
Retrieved from https://soundcloud.com/ashamaluevmusic/sets/music-for-gaming-videos

*/
