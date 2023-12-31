let num1 = 0;
let num2 = 0;
let operator = "";

const operate = function(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".container button:not(.equals)");
const operatorButtons = document.querySelectorAll(".add, .subtract, .multiply, .divide");
let displayValue = "0";
let operatorClicked = false;


const updateDisplay = () => {
    display.textContent = displayValue;
};


numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonText = button.textContent;
        if (displayValue === "0" || operatorClicked) {
            displayValue = buttonText;
            operatorClicked = false;
        } else {
            displayValue += buttonText;
        }
        updateDisplay();
    });
});


operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (!operatorClicked) {
            if (operator !== "") {
                num2 = parseFloat(displayValue);
                num1 = operate(num1, num2, operator);
                displayValue = num1.toString();
                updateDisplay();
            } else {
                num1 = parseFloat(displayValue);
            }
            operator = button.textContent;
            operatorClicked = true;
        }
    });
});


const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", function() {
    if (operator !== "") {
        num2 = parseFloat(displayValue);
        
        if (operator === "/" && num2 === 0) {
            displayValue = "Error: Division by 0";
        } else {
            num1 = operate(num1, num2, operator);
            const roundedAnswer = num1.toFixed(5);
            displayValue = roundedAnswer.toString();
        }

        updateDisplay();
        num2 = 0;
        operator = "";
        operatorClicked = false;
    }
});


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function() {
    displayValue = "0";
    updateDisplay();
    num1 = 0;
    num2 = 0;
    operator = "";
    operatorClicked = false;

    clearButton.textContent = "CLEANED";

    setTimeout(function() {
        clearButton.textContent = "CLEAR";
    }, 1500);
});

