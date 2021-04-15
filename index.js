// this file shows the creation of each element and shows the connection to each hyperlink provided.

function ScrabbleNav() {
  const nav = document.createElement('a');
  // this is a navigation element which uses the href in order to connect to the scrabble.html file.
  nav.textContent = 'Scrabble Board!';
  nav.id = 'sF';
  nav.classList = 'prs';
  nav.href = 'scrabbleBoard/index.html';
  nav.target = '_blank';
  document.body.append(nav);
}
ScrabbleNav();

function divCommand() {
  const divider = document.createElement('div');
  divider.classList = 'dv';
  divider.classList = 'prs';
  divider.textContent = ' Click on the hyperlink above in order to play scrabble';
  document.body.append(divider);
}
divCommand();

function rulesMaker() {
  const nav2 = document.createElement('a');
  nav2.textContent = 'Rules';
  nav2.id = 'rF';
  nav2.classList = 'prs';
  nav2.href = 'rules/rules.html';
  nav2.target = '_blank';
  document.body.append(nav2);
}
rulesMaker();

function ruleCommand() {
  const p = document.createElement('p');
  p.textContent = 'click on the rules in order to find out how to play!';
  p.classList = 'prs';
  document.body.append(p);
}
ruleCommand();
