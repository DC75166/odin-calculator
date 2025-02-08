function calculator() {
  const buttons = document.querySelectorAll(".btn");
  const display = document.querySelector("#display");
  let num1 = "";
  let num2 = "";
  let operator = "";

  function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "x") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    }
  }

  function show() {
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.textContent;

        if (value >= "0" && value <= "9") {
          if (operator) {
            if (num2 === "0") {
              num2 = value;
            } else {
              num2 += value;
            }
          } else {
            if (num1 === "0") {
              num1 = value;
            } else {
              num1 += value;
            }
          }
          display.textContent = num1 + (operator ? ` ${operator} ${num2}` : "");
        }


        if (["+", "-", "x", "/"].includes(value)) {
          if (num2 !== "") {
            num1 = operate(num1, num2, operator);
            display.textContent = num1 + ` ${value}`;
            num2 = ""; // reset num2 for the next number input
          } else {
            display.textContent = num1 + ` ${value}`;
          }
          operator = value;
        }


        if (value === "=") {
          if (num2 === "") {
            display.textContent = num1;
          } else {
            display.textContent = operate(num1, num2, operator);
            num1 = display.textContent;
            num2 = "";
            operator = "";
          }
        }
        if (value === "Clear") {
          num1 = "";
          num2 = "";
          operator = "";
          display.textContent = "0";
        }
      });
    });
  }

  show();
}

calculator();
