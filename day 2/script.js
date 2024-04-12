const results = document.querySelector('.results');
const overlay = document.querySelector('.overlay');
const closeResults = document.querySelector('.close');
const calculateAreaBTN = document.querySelector('calculate-btn');
let length = document.querySelector('.lenght-js');
let width = document.querySelector('.width-js');
let area = 0;
const displayText = document.querySelector('.area');

function calculateArea() {
  length = Number(length.value);
  width = Number(width.value);
  area = length * width;
  showResults();
}

function showResults() {
  displayText.innerHTML = `the area of the triangle is ${area} 👌👌`;
  results.classList.toggle('show');
  overlay.classList.toggle('show');
}
function hideResults() {
  results.classList.toggle('show');
  overlay.classList.toggle('show');
}
