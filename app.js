// Calling DOM
let buttons = document.querySelectorAll(".BTS p");
let firstInputContainer = document.querySelector("#secondValue input");

// Function Of Performing Calculation 
function Calculation(num1, num2 , operator){
    console.log(num1,operator,num2);
    if(operator=='+'){
        return num1+num2;
    }else if(operator=='-'){
        return num1-num2;
    }else if(operator=='*'){
        return num1*num2;
    }else if(operator=='/'){
        return num1/num2;
    }else if(operator=='%'){
        return num1%num2;
    }
}

let firstOperand = 0; //Main Value To Be Store
let tempValue = "";  //temparary valuse is Storing in this
let operator = "";
let secondOperand = 0;
// Function Which is Used For Finding And Storing the Pressed Button Value into Variable(tempValue) Which is In String Formate 
function pressedBTN(element){
    let num = element.srcElement.textContent; 
    if(num>=0 && num<=9){
        tempValue += num;
        // console.log(tempValue);
        firstInputContainer.value = tempValue;
    }
    else if(num=='.'){
        tempValue+='.';
        firstInputContainer.value = tempValue
    }else if(num=="AC"){

        firstOperand = 0;
        secondOperand = 0;
        operator = "";
        tempValue = "";
        firstInputContainer.value = firstOperand;
    }else if(num=="="){
        if(firstOperand==0 || tempValue==""){
            firstOperand = 0;
            tempValue = "";
            firstInputContainer.value = firstOperand;
        }
        else{
            secondOperand = Number(tempValue);
            let Ans = Calculation(firstOperand ,secondOperand,operator);
            firstOperand = Ans;
            secondOperand = 0;
            operator = "";
            tempValue = "";
            firstInputContainer.value = Ans;
        }
    }else if(tempValue!=""){
        if(operator!=""){
            secondOperand = Number(tempValue);
            let ans = Calculation(firstOperand,secondOperand,operator);
            firstOperand = ans;
            secondOperand = 0;
            operator = "";
        }
        else{
            firstOperand = Number(tempValue);
        }
        
        tempValue = "";
        
        if(num == '+'){
            operator = '+';
        }

        if(num == '-'){
            operator = '-';
        }

        if(num == '*'){
            operator = '*';
        }

        if(num == '/'){
            operator = '/';
        }

        if(num == '%'){
            operator = '%';
        } 
        firstInputContainer.value = firstOperand;  
    }

    
    

}

buttons.forEach(btn => {
    btn.addEventListener('click',pressedBTN);
});
