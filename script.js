let firstNum = "";
let secondNum = "";
let firstOperator = "";
let secondOperator = "";
let result = "";
let displayValue = "0";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

const buttonsClicks = () => {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        handleNumbers(buttons[i].textContent);
        updateDisplay();
      } else if (button.classList.contains("operator")) {
        handleOperators(buttons[i].textContent);
        updateDisplay();
      } else if (button.classList.contains("equal")) {
        handleEqual();
        updateDisplay();
      } else if (button.classList.contains("clear")) {
        clearData();
        updateDisplay();
      }else if (button.classList.contains("dot"))
    });
  }
};

buttonsClicks();
const handleNumbers = (number) => {
  if (secondNum === "" && firstOperator === "" && secondOperator === "") {
    firstNum += number;
    displayValue = firstNum;
  }
  if (secondOperator != "" && firstNum != "") {
    secondNum += number;
    displayValue = firstNum + secondOperator + secondNum;
  }
  if (firstOperator != "" && firstNum != "") {
    secondNum += number;
    displayValue = firstNum + firstOperator + secondNum;
  }
};

const handleOperators = (operator) => {
  if (firstNum != "" && secondNum === "") {
    firstOperator = operator;
    displayValue = firstNum + firstOperator;
  } else if (firstNum != "" && firstOperator != "" && secondNum != "") {
    result = operate(firstNum, secondNum, firstOperator);
    firstOperator = "";
    secondOperator = operator;
    displayValue = result + secondOperator;
    firstNum = result;
    secondNum = "";
  } else if (firstNum != "" && secondOperator != "" && secondNum != "") {
    result = operate(firstNum, secondNum, secondOperator);
    secondOperator = "";
    firstOperator = operator;
    displayValue = result + firstOperator;
    firstNum = result;
    secondNum = "";
  } else if (result != "") {
    firstNum = result;
    firstOperator = operator;
    displayValue = firstNum + operator;
  }
};

const handleEqual = () => {
  if (firstOperator != "" && firstNum != "" && secondNum != "") {
    result = operate(firstNum, secondNum, firstOperator);
    firstOperator = "";
    displayValue = result;
    firstNum = "";
    secondNum = "";
  } else if (secondOperator != "" && firstNum != "" && secondNum != "") {
    result = operate(firstNum, secondNum, secondOperator);
    secondOperator = "";
    displayValue = result;
    firstNum = "";
    secondNum = "";
  }
};

const updateDisplay = () => {
  display.textContent = displayValue;
};
display.textContent = displayValue;

const clearData = () => {
  firstNum = "";
  secondNum = "";
  firstOperator = "";
  secondOperator = "";
  result = "";
  displayValue = "0";
  display.textContent = displayValue;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (firstNum, secondNum, operator) => {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "x":
      return multiply(firstNum, secondNum);
    case "÷":
      return divide(firstNum, secondNum);
  }
};
