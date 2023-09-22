let displayValue = "";
let currentOperator = null;

const screen = document.getElementById("screen");
const numBtns = document.querySelectorAll(".num-btn");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("plus");
const subBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

console.log(numBtns);

equalsBtn.addEventListener("click", calculateResult);
clearBtn.addEventListener("click", clearDisplay);

plusBtn.addEventListener("click", function () {
    setOperator("+");
});

subBtn.addEventListener("click", function () {
    setOperator("-");
});
multiplyBtn.addEventListener("click", function () {
    setOperator("*");
});
divideBtn.addEventListener("click", function () {
    setOperator("/");
});

function appendToScreen(value) {
    displayValue += value;
    screen.value = displayValue;
}

numBtns.forEach(function (numBtn) {
    numBtn.addEventListener("click", function () {
        appendToScreen(numBtn.textContent);
    });
});

function setOperator(operator) {
    if (displayValue !== "") {
        currentOperator = operator;
        screen.value = displayValue + operator;
        displayValue = ""; //turns screen blank again
    }
}

//clears screen and input
function clearDisplay() {
    displayValue = "";
    screen.value = "";
}

function calculateResult() {
    if (currentOperator && displayValue !== "") {
        const firstNum = parseFloat(displayValue);
        let result;

        if (currentOperator === "+") {
            result = firstNum + parseFloat(displayValue);
        } else if (currentOperator === "-") {
            result = firstNum - parseFloat(displayValue);
        } else if (currentOperator === "*") {
            result = firstNum * parseFloat(displayValue);
        } else if (currentOperator === "/") {
            result = firstNum / parseFloat(displayValue);
        }
        displayValue = result.toString();
        screen.value = result.toString();
        currentOperator = null; // resets operator
    }
}
