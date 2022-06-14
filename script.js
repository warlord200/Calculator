const numpads = document.querySelector(".numpads");

// add buttons
for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.classList.add(`${i}`);
  button.innerText = `${i}`;
  numpads.appendChild(button);
}
addDot();
addEquals();

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
