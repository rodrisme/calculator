let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll("#number");
const operators = document.querySelectorAll("#operator");
const display = document.querySelector("#display");
const dot = document.getElementById("dot");
const del = document.getElementById("delete");
const equal = document.querySelector("#equal");

//Show and store first number in variable
function displayNumber(number) {
  if (secondNum === "" && operator === "") {
    display.textContent += number.target.textContent;
    firstNum += number.target.textContent;
  }
  if (operator != "" && firstNum != "") {
    display.textContent += number.target.textContent;
    secondNum += number.target.textContent;
  }
  if (operator != "" && firstNum != "" && secondNum != "") {
    equal.addEventListener("click", function () {
      result = operate(firstNum, secondNum, operator);
      display.textContent = result;
    });
  }
}

const selectNumbers = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", displayNumber);
  });
};

//Show on display the operator and store in variable
function displayOperator(op) {
  if (firstNum != "") {
    display.textContent += op.target.textContent;
    operator = op.target.textContent;
  }
}
const selectOperator = () =>
  operators.forEach((op) => {
    op.addEventListener("click", displayOperator);
  });

selectNumbers();
selectOperator();

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

function clear() {
  del.addEventListener("click", function () {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    display.textContent = "";
  });
}

clear();
