const numpads = document.querySelector(".numpads");
const currentInput = document.querySelector(".currentInput");
const calculateResult = document.querySelector(".calculatedResult");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButton = document.querySelectorAll(".op");
let inputArr = [];
const compare = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "÷": (a, b) => a / b,
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
    // check if other operator exists
    let index = inputArr.find((input) => {
      return typeof input === "string";
    });
    if (inputArr == 0) return;
    if (index) {
      calculate();
      inputArr.push(parseInt(calculateResult.textContent), button.textContent);
      updateInputConsole();
      return;
    }

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
  if (inputArr == 0) return;
  inputArr.push(".");
  updateInputConsole();
});

equalsButton.addEventListener("click", () => {
  if (inputArr == 0) return;
  calculate();
});

function updateInputConsole() {
  currentInput.innerText = inputArr.join("");
}

// calculate function

function calculate() {
  let inputIndex = inputArr.find((input) => {
    return typeof input === "string";
  });
  console.log(inputIndex, typeof inputIndex);
  const splitArr = inputArr.join("").split(inputIndex);
  calculateResult.innerHTML = compare[`${inputIndex}`](
    parseInt(splitArr[0]),
    parseInt(splitArr[1])
  );
  inputArr = [];
  updateInputConsole();
}
