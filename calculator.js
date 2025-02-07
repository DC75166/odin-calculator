function calculator() {
  const buttons = document.querySelector(".btn");
  const display = document.querySelector("#display");
  // const operator = document.querySelector("#operator");
  let num1 = "";
  let num2 = "";
  let operator = "";


  function operate(num1, num2, operator) {
    if (operator === "+") {
      return num1+num2;
    } else if (operator === "-") {
      return num1-num2;
    } else if (operator === "*") {
      return num1*num2;
    } else if (operator === "/") {
      return num1/num2;
    }
  }

  function show() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        const value = buttons[i].textContent;
        if (value >= "0" && value <= "9") {
          if (operator) {
            num2 += value;
          } else {
            num1 += value;
          }
          display.textContent += value;
      }
    });
  }
}
  
  show();
  // operate(num1, num2, operator);
}

calculator();
