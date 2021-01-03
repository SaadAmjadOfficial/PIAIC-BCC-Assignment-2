var num = prompt("Enter any number to check" , "..., -1 , 0 , 1 ,...");
if (num < 0) {
    alert("You entered a Negative number");
}
if (num > 0) {
    alert("You entered a Positive number");
}
if (num == 0 && num != "") {
    alert("You entered a Zero number");
}
else {
    alert("Please enter a Number only")
}