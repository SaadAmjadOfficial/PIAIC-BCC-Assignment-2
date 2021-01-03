var num = 3 , num2 = +prompt("Guess the secret number");
if (num2 === num) {
    alert("Bingo! Correct answer");
} else {
    if(++num2 === num) {
        alert("Close enough to the correct answer");
    } else {
        alert("Answer is not correct");
    }
}