async function fetchRules() {
  const rules = await fetch('rules.txt');
  const getData = await rules.text();
  const displayContent = document.querySelector('#rule');
  displayContent.textContent = getData;
}
fetchRules();
