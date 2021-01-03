var num1 = +prompt("Enter First Number" , "1,2,3,...") , num2 = +prompt("Enter Second Number" , "1,2,3,...") , 
opr = prompt("Enter an Operator to perform Operation" , "+ , - , * , / , %") , result = 0;
if (opr == "+") {
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
}
if (opr == "-") {
    result = num1 - num2;
    alert(num1 + " - " + num2 + " = " + result);
}
if (opr == "*") {
    result = num1 * num2;
    alert(num1 + " * " + num2 + " = " + result);
}
if (opr == "/") {
    result = num1 / num2;
    alert(num1 + " / " + num2 + " = " + result);
}
if (opr == "%") {
    result = num1 % num2;
    alert(num1 + " % " + num2 + " = " + result);
}
if (opr == "" || opr != "+" || opr != "-" || opr != "*" || opr != "/" || opr != "%") {
    alert("Must enter an Operator");
}