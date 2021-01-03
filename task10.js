var origPass = "JSinVSCodeLinux" , password = prompt("Enter the Password");
if (password == "") {
    alert("Please enter your password");
} else {
    if (password == origPass) {
        alert("Correct! The password you entered matches the original password");
    } else {
        alert("Incorrect password");
    }
}