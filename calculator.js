function calculator(){
    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const operator = document.querySelector("#operator");


    function add(a,b){
        console.log(a+b);
    }
    function subtract(a,b){
        console.log(a-b);
    }
    function multiply(a,b){
        console.log(a*b);
    }
    function divide(a,b){
        console.log(a/b);
    }

    function operate(num1,num2,operator){
        if(operator === "+"){
            add(num1,num2);
        }
        else if(operator === "-"){
            subtract(num1,num2);
        }
        else if(operator === "*"){
            multiply(num1,num2);
        }
        else if(operator === "/"){
            divide(num1,num2);
        }
    }
   
    operate(num1,num2,operator);
}


calculator();