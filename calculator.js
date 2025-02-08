function calculator() {
  const buttons = document.querySelectorAll(".btn");
  const display = document.querySelector("#display");
  let num1 = "";
  let num2 = "";
  let operator = "";

//  Function to calculate the operations
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

        // Handles Number input
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
        
        // Handles decimal input
          if(value === "." && (!num2.includes(".")|| num2 === "")){
            if(operator){
              num2+= value;
            }
            else{
              num1+=value;
            }
            display.textContent = num1 + (operator? ` ${operator} ${num2}`:"");
          }

  
        // Handles operator input
        if (["+", "-", "x", "/"].includes(value)) {
          if (num2 !== "") {
            num1 = operate(num1, num2, operator);
            display.textContent = num1 + ` ${value}`;
            num2 = "";
          } else {
            display.textContent = num1 + ` ${value}`;
          }
          operator = value;
        }

        // Handles output
        if (value === "=") {
          if (num1 === "" || num2 === "") {
            display.textContent = "0";
          } else {
            display.textContent = operate(num1, num2, operator);
            num1 = display.textContent;
            num2 = "";
            operator = "";
          }
        }

      //  Handles clear functionality
        if (value === "Clear") {
          num1 = "";
          num2 = "";
          operator = "";
          display.textContent = "0";
        }
      
      // Handles backspace for each input 
        if (value === "Backspace") {
          if (num2) {
            num2 = num2.slice(0, -1);
            display.textContent = num1 + (operator ? ` ${operator} ${num2}` : "");
          } else if (operator) {
            operator = "";
            display.textContent = num1||"0";
          } else {
            num1 = num1.slice(0, -1);
            display.textContent = num1||"0";
          }
        }
      });
    });
  }

  show();
}

calculator();
