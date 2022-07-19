let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";
let displayValue = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const secondDisplay = document.querySelector(".second-display");

const clickButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        clickNumbers(button.innerText);
        updateDisplay();
        updateSecondDisplay();
      } else if (button.classList.contains("operator")) {
        clickOperator(button.innerText);
        updateDisplay();
        updateSecondDisplay();
      } else if (button.classList.contains("equal")) {
        clickEqual();
        updateDisplay();
        updateSecondDisplay();
      } else if (button.classList.contains("dot")) {
        clickDot(button.innerText);
        updateDisplay();
        updateSecondDisplay();
      } else if (button.classList.contains("clear")) {
        clearData();
      }
    });
  });
};

clickButtons();

const clickNumbers = (number) => {
  if (firstOperand === "" || operator === "") {
    firstOperand += number;
  } else if (firstOperand != "" && operator != "") {
    secondOperand += number;
  } else if (firstOperand != "" && secondOperand != "" && operator != "") {
    result = operate(firstOperand, secondOperand, operator);
    firstOperand = result;
    secondOperand = "";
  }
};

const clickOperator = (operators) => {
  if (firstOperand != "" && operator != "" && secondOperand != "") {
    result = operate(firstOperand, secondOperand, operator);
    firstOperand = result;
    operator = operators;
    secondOperand = "";
  }
  if (firstOperand != "" && operator === "") {
    operator = operators;
  }
};

const clickEqual = () => {
  if (firstOperand != "" && operator != "" && secondOperand != "")
    result = operate(firstOperand, secondOperand, operator);
};

const updateDisplay = () => {
  if (firstOperand != "") {
    display.textContent = firstOperand;
  }
  if (operator != "" && secondOperand != "") {
    display.textContent = secondOperand;
  }
  if (result != 0 || result === 0) {
    display.textContent = result;
  }
};

const clickDot = (dot) => {
  if (
    !display.textContent.includes(".") &&
    firstOperand != "" &&
    operator === ""
  ) {
    firstOperand += dot;
  }
  if (!display.textContent.includes(".") && secondOperand != "") {
    secondOperand += dot;
  }
};

const updateSecondDisplay = () => {
  if (firstOperand != "" && operator != "" && secondOperand === "") {
    secondDisplay.textContent = firstOperand + operator;
  } else if (firstOperand != "" && operator != "" && secondOperand != "") {
    secondDisplay.textContent = firstOperand + operator + secondOperand;
  }
};

const clearData = () => {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  result = "";
  displayValue = "";
  display.textContent = "0";
  secondDisplay.textContent = "";
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (firstOperand, secondOperand, operator) => {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "x":
      return multiply(firstOperand, secondOperand);
    case "÷":
      if (secondOperand === 0) {
        return "ERROR";
      } else return divide(firstOperand, secondOperand);
  }
};
