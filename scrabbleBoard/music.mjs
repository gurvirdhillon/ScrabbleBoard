import { request } from "express";

/* referencing:

* (2017). Retrieved from https://www.youtube.com/watch?v=fldHW2JUofY&t=2s
* Web Audio API - Web APIs | MDN. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

 */

const elems = {
    mainTrack: document.querySelector('#playButton'),
    stopTrack:  document.querySelector('#stopButton')
};


function bufferLoader(context, listURL, callback) {
  this.context = context;
  this.listURL = listURL;
  this.onload = callback;
  this.bufferLoader = new Array();
  this.loadCount = 0;
}

bufferLoader.prototype.loadBuffer = function (url, index) {
  const requester = new XMLHttpRequest();
  requester.open('GET', url, true);
  requester.responseType = 'arrayBuffer';

  const load = this;

  requester.onload = function () {
    load.context.decodeAudioData(requester.response,
      function (buffer) {
        if (!buffer) { console.log('error decoding the file data:', url); }
        return;
      });
      load.bufferList[index] = buffer;
      if(++load.loadCount == load.listURL.length)
      load.onload(load.bufferList);
  };
};
function (error) {
    console.error('decoding audio data error,', error);
}

request.onerror = function() {
    console.log('bufferLoader: XHR error');
}
request.send();
bufferLoader.prototype.load = function() {
    for (let i = 0; i < this.listURL.length; i++) {
        this.loadBuffer(this.listURL[i], i);
        
    }
}

const audioSound = function() {
    const music = {
        'MainSound': null,
    }
    const sound = {
        'clickSound': 2,
    }
}

let context = null;
let bufferLoader = null;
let bufferList = [];

function musicInit() {
    window.AudioContext = window.AudioContext ||
    window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new bufferLoader(
        context, [
            'Revolution - AShamaluevMusic.mp3'
        ]);
        finishedLoading
}
bufferLoader.load();
function finishedLoad(bufferList) {
    bufferList = bufferedList;
    createAudio();
    music.MainSound.start();
}

function createAudio() {
    music.MainSound = context.createBufferSource();
    music.gainNodeMenu = context.createGain();
    music.MainSound.buffer = bufferList[0];
    music.MainSound.loop = true;
    music.gainNodeMenu.gain.setValueAtTime(0.01, context.currentTime);
    music.MainSound.connect(context.destination);
    music.gainNodeMenu.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 3.0);

    music.MainSound =  context.createBufferSource();
    music.gainNodeMenu = context.createGain();
    music.game.buffer = bufferList[1];
    music.game.connect(music.gainNodeGame);
    music.gainNodeGame.connect(context.destination);
    music.gainNodeGame.gain.exponentialRampToValueAtTime(1.0, context.currentTime + 3.0);

}
// 7:18

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
window.onload = init;

return {
    swapMusic: function(from) {
        music[GainNode + capitalize(from)].gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 3.0);
        music(from).stop(context.currentTime + 3.0);
        createAudio();
    },

playSound: function (sound) {
    let source = context.createBufferSource();
    source.buffer = bufferList[sounds[sound]];
    source.connect(context.destination);
    source.start();
    }
}

// }());