// const rulesTrigger = document.querySelector('#rulesGetter');
// rulesTrigger.addEventListener('click', fetchRules);
async function fetchRules() {
  const response = await fetch('rules.txt');
  const text = await response.text();
  const displayText = document.querySelector('#rule');
  displayText.textContent = text;
}

function PutContentOnThePage() {
  const button = document.querySelector('#rulesGetter');
  button.addEventListener('click', fetchRules);
}
window.addEventListener('load', PutContentOnThePage);

/*
Boakes, R., Kopecky, J., & Dennis, M. (2021). portsoc/fetch101.
Retrieved from https://github.com/portsoc/fetch101
*/
