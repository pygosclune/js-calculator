const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".key");
const operatorButtons = document.querySelectorAll(".operator");
let displayValue = "0";
let operatorClicked = false;
let num1 = "";
let num2 = "";
let operator = "";

const updateDisplay = () => {
    display.textContent = displayValue;
};

window.onload = () => {
    updateDisplay();
};

const operate = function(num1, num2, operator) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    }
}


numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonText = button.textContent;
        if (displayValue === "0") {
            displayValue = buttonText;
            operatorClicked = false;
        } else {
            displayValue += buttonText;
            if (operatorClicked) {
                num2 += buttonText;
            }
        }
        updateDisplay();
    });
});


operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (!operatorClicked) {
            num1 = displayValue;
            operator = button.textContent;
            operatorClicked = true;
            displayValue += operator;
            updateDisplay();
        }
    });
});


const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", function() {
    if (operator !== "") {
        if (operator === "/" && num2 === 0) {
            displayValue = "Error: Division by 0";
        } else {
            const result = operate(num1, num2, operator);
            displayValue = result;
        }

        updateDisplay();
        num1 = "";
        num2 = "";
        operator = "";
        operatorClicked = false;
    }
});


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    displayValue = "0";
    updateDisplay();
    num1 = "";
    num2 = "";
    operator = "";
    operatorClicked = false;
});
