// JavaScript Conditionals

function odd_or_even() {
    var num1 = document.getElementById("input1").value;

    if(num1 % 2 == 0) {
        document.getElementById("output").innerHTML = "It is even.";
    }

    else {
        document.getElementById("output").innerHTML = "It is uneven.";
    }
}