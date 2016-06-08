var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath); 

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer; 
        //this piece of code programs the addition button
    }
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
        //this piece of code programs the subtraction button
    }
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
       //this piece of code programs the division button
}
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
        //this piece of code programs the multiplication button
    }
    
    if (dropdown.value == "^"){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
        //this piece of code programs the square button 
    }
    if (dropdown.value == ""){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    
}