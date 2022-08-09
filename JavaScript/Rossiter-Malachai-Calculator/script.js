var final = 0;
var firstValue = "";
var waitingForSecond = false;
var secondValue = "";
var operation = "";

function press(x){
    if(waitingForSecond == false){
        firstValue += x.toString();
        $("#display").html(firstValue);
    }
    if(waitingForSecond == true){
        secondValue += x.toString();
        $("#display").html(secondValue);
    }
}

function setOP(y){
    waitingForSecond = true;
    operation = y;
}

function calculate(){
    if (operation == "-"){
        final = parseFloat(firstValue) - parseFloat(secondValue);
        $("#display").html(final);
    } else if (operation == "+"){
        final = parseFloat(firstValue) + parseFloat(secondValue);
        $("#display").html(final);
    } else if (operation == "/"){
        final = parseFloat(firstValue) / parseFloat(secondValue);
        $("#display").html(final);
    } else if (operation == "*"){
        final = parseFloat(firstValue) * parseFloat(secondValue);
        $("#display").html(final);
    }
    final = 0;
    firstValue = "";
    secondValue = "";
    waitingForSecond = false;
    operation = "";
}

function clr(){
    $("#display").html(0);
    final = 0;
    firstValue = "";
    secondValue = "";
    waitingForSecond = false;
    var operation = "";
}

