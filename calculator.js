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
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    }
  }

  function show() {
    buttons.forEach((button) => {
      // For mouse input
      button.addEventListener("click", function () {
        const value = button.textContent;    
        handleInput(value);
      });
    });

    // For keyboard input
    document.addEventListener("keydown", function(event){
        const key = event.key;

       // Prevent default behavior for certain keys like Enter and Escape
         if (key === "Enter" || key === "Escape") {
            event.preventDefault(); 
            // console.log(e) // Prevent default actions (like form submission or browser shortcuts)
        }

        if(key>="0" || key<="9"){
          handleInput(key);
        }
        else if (["+", "-", "*", "/"].includes(key)) {
          handleInput(key);  // Operators
        } else if (key === "=" || key === "Enter") {
          handleInput("=");  // Equals key or Enter key
        } else if (key === "Backspace") {
          handleInput("Backspace");  // Backspace key
        } else if (key === "Escape") {
          handleInput("Clear");  // Escape key for clearing
        }
    });
  }


    function handleInput(value){
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
              if(!num1.includes(".")){
                num1+=value;
              }
            }
            display.textContent = num1 + (operator? ` ${operator} ${num2}`:"");
          }

  
        // Handles operator input
        if (["+", "-", "*", "/"].includes(value)) {
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
        if (value === "=" || value === "Enter") {
          if (!(operator||num2)){
            display.textContent = num1||"0";
          }
          else {
            display.textContent = operate(num1, num2, operator);
            num1 = display.textContent;
            num2 = "";
            operator = "";
          }
        }

      //  Handles clear functionality
        if (value === "Clear" || value === "Escape") {
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
  }

  show();
}

calculator();
