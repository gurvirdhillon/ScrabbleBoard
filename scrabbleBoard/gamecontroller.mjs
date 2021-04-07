// this file will show the users profile if they choose to create one.
// in order to do so i will use a psql file to store the users info.
// for this i must create it using psql for managing its storage of data.


function userNameGreetings(e) {
  const handle = document.querySelector('#userGreet');
  handle.textContent = 'Welcome ' + e.target.value;
}

const un = document.querySelector('#un');
un.addEventListener('input', userNameGreetings);


// un is short for username

// down below i have set up a user1 and given a 'key'.

localStorage.setItem('key', 'user1');
console.log(localStorage.getItem('key'));
console.log(localStorage.length);

function MirrorMyWord(e) {
  const targetInput = document.querySelector('#scoreCount');
  targetInput.textContent = e.target.value;
}

const wordGrabber = document.querySelector('#resultScore');
wordGrabber.addEventListener('input', MirrorMyWord);
