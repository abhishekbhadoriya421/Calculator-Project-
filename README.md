# Calculator-Project-
It's a simple calculator application where you can perform all the simple mathematical operation like addition subtraction division and multiplication
HTML is used to create the body structure of the application 
CSS is used to design and style for making the application more attractive and user friendly
Java Script is used to perform all logical operation

`Tt Is A Fully Responsive Application Which Can Be Run In Any Device`

> Frameworks And Other Resources
No Framework and other resources are used to create this application

> Usage
This application is very helpful for those who are doing mathematical operations 


> javaScript Functions
Let me Explain you Some important java script function which i have created in my project so that it can help you to understand the code more clearly 

### This are the all HTML Element's I have fetched 

``` js
let buttons = document.querySelectorAll(".BTS p");
let firstInputContainer = document.querySelector("#secondValue input");
let firstValue = document.getElementById("firstValue");
```

### Function Of Performing Calculation 
``` js
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
} ```

this is the main function which is taking 3 parameters as arguments one is operator and remaining two are operands

### pressedBTN Function
``` js
function pressedBTN(element){
    let num = element.srcElement.textContent; 
    if(num>=0 && num<=9){ // if num is from 0 to 9 than it is number. so we are here storing numbers in String(tempValue variable)
        tempValue += num;
        firstInputContainer.value = tempValue;
    }
    else if(num=='.'){ // here we considering the decimal values 
        tempValue+='.';
        
    }else if(num=="AC"){
        firstOperand = 0;
        secondOperand = 0;
        operator = "";
        tempValue = "";
        firstInputContainer.value = firstOperand;
        firstValue.textContent = "";
    }else if(num=="="){
        if(operator==0 || tempValue==""){
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
} ```

This Function keeps track which key is pressed if its a valid key then it performs the operation corresponding to that pressed Key other wise it does nothing  

### Event Handler 

``` js
buttons.forEach(btn => {
    btn.addEventListener('click',pressedBTN);
});
```
In this code click event is performing on every button Array Element

>  This Is The Entire Java Script Code Snippet Of Calculator Application  Hope These Details are Enough To Understand the Project 
