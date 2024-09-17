// Get selectors
const screen = document.querySelector(".pc-answer");
const actionButton = document.querySelector("button");
const input = document.querySelector("input");
const pcAnswer = document.querySelector(".pc-answer");
const count = document.querySelector('.count');
const mainContainer = document.querySelector('.main-container')

// Generate random number
function randomNumber() {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1) + min);  
}
function greenStyleChange(){
 return pcAnswer.style.border = 'solid 4.5px green';
}
function redStyleChange() {
  pcAnswer.style.border = 'solid 4.5px red';
  
}
function redContainerStyle() {
  return mainContainer.style.border = 'solid 4px red'
}
function greenContainerStyle() {
 return  mainContainer.style.border = 'solid 4px green'
}
const res = randomNumber();
let atemptsCount = 0;

//Actions
actionButton.addEventListener("click", () => {
  const userValue = Number(input.value);  

  if (userValue < 1 || userValue > 100) {
    pcAnswer.textContent = "Please enter a valid number between 1 and 100.";
  } else {
    atemptsCount++; // Увеличиваем счетчик попыток сразу при любом вводе
    count.textContent = `Current attempts: ${atemptsCount}`;

    if (userValue === res) {
      
      greenStyleChange();
      pcAnswer.textContent = `Congratulations! You guessed the number in ${atemptsCount} attempts!`;
      greenContainerStyle();
    } else if (userValue < res) {
      redContainerStyle();
      redStyleChange();
      pcAnswer.textContent = "Too low! Try a higher number.";
    } else if (userValue > res) {
      redContainerStyle();
      redStyleChange();
      pcAnswer.textContent = "Too high! Try a lower number.";
    }
  }
});