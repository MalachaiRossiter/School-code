var counter1 = 0;
var counter2 = 0;

function login(element) {
    if (element.innerText == "Login")
    {
        element.innerText = "Log Out";
    }
    else
    {
        element.innerText = "Login";
    }
}

function like1(element) {
    counter1 ++;
    element.innerText = counter1 + " likes";
}

function like2(element) {
    counter2 ++;
    element.innerText = counter2 + " likes";
}

function add(element) {
    element.remove();
}