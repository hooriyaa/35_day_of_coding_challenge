// QUESTION 103:
function returnBooleanValue() {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
}
let result = returnBooleanValue();
console.log(result);

// QUESTION 104:
function generateRandomColor() {
  let letters = "01234556docsign";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)];
  }
  return color;
}
let randomColor = generateRandomColor();
console.log(randomColor);

// QUESTION 104:
function diceRoll() {
  return Math.floor(Math.random()*6) +1;
}
let res = diceRoll();
console.log(res);

