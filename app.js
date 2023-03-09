// Calling DOM
let buttons = document.querySelectorAll(".BTS p");
let firstInputContainer = document.querySelector("#secondValue input");
let firstValue = document.getElementById("firstValue");

// Function Of Performing Calculation 
function Calculation(num1, num2 , operator){
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
    
    if(num>=0 && num<=9){ // if num is from 0 to 9 than it is number. so we are here storing numbers in String(tempValue variable)
        tempValue += num;
        firstInputContainer.value = tempValue;
        
    }else if(num=='.'){ // here we considering the decimal values 
        tempValue+='.';
        firstInputContainer.value = tempValue;
        
    }else if(num=="AC"){
        firstOperand = 0;
        secondOperand = 0;
        operator = "";
        tempValue = "";
        firstInputContainer.value = firstOperand;
        firstValue.textContent = "";
        
    }else if(num=="="){
        if(firstOperand==0 || tempValue==""){
            firstOperand = 0;
            tempValue = "";
            operator = "";
            secondOperand = 0;
            firstInputContainer.value = firstOperand;
            firstValue.textContent = "";
        }
        else{
            secondOperand = Number(tempValue);
            let Ans = Calculation(firstOperand ,secondOperand,operator);
            firstOperand = Ans;
            secondOperand = 0;
            operator = "";
            tempValue = Ans;
            firstInputContainer.value = Ans;
            firstValue.textContent = "";
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
        firstInputContainer.value = 0; 
        firstValue.textContent = (firstOperand + num);
    }
}

buttons.forEach(btn => {
    btn.addEventListener('click',pressedBTN);
});
