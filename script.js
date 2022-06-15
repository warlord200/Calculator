const numpads = document.querySelector(".numpads");
const currentInput = document.querySelector(".currentInput");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButton = document.querySelectorAll(".op");
let inputArr = [];
const compare = {
  "+": (a, b) => a + b,
  "-": (a, b) => a + b,
  "*": (a, b) => a + b,
  "/": (a, b) => a + b,
};
// add all buttons
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.classList.add(`${i}`);
  button.classList.add("num-button");
  button.innerText = `${i}`;
  numpads.appendChild(button);
}
const numpadButton = document.querySelectorAll(".num-button");

addDot();
addEquals();

const dotButton = document.querySelector(".dot");
const equalsButton = document.querySelector(".equals");

function addDot() {
  const button = document.createElement("button");
  button.classList.add("dot");
  button.innerText = ".";
  numpads.appendChild(button);
}
function addEquals() {
  const button = document.createElement("button");
  button.classList.add("equals");
  button.innerText = "=";
  numpads.appendChild(button);
}

// add function to buttons

numpadButton.forEach((button) => {
  button.addEventListener("click", () => {
    inputArr.push(parseInt(button.textContent));
    updateInputConsole();
  });
});

operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    inputArr.push(button.textContent);
    updateInputConsole();
  });
});

clearButton.addEventListener("click", () => {
  inputArr = [];
  updateInputConsole();
});

deleteButton.addEventListener("click", () => {
  inputArr.pop();
  updateInputConsole();
});

dotButton.addEventListener("click", () => {
  inputArr.push(".");
  updateInputConsole();
});

equalsButton.addEventListener("click", () => {
  calculate();
});

function updateInputConsole() {
  currentInput.innerText = inputArr.join("");
}

// calculate function

function calculate() {
  const inputIndex = inputArr.find((input) => {
    return typeof input === "string";
  });
  const splitArr = inputArr.join("").split(inputIndex);
  const results = parseInt(splitArr[0]);
}
