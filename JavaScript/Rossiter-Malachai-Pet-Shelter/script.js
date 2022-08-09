
// setting up counter for likes
var likeCounter = [0,0,0];
var likes = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

// removing the donate button
function donate(element) {
    element.remove();
}

// likes counter
function like(id) {
    likeCounter[id]++;
    likes[id].innerHTML = likeCounter[id] + " petting(s)";
}

// animal switch allert

function message(){
    var select = document.getElementById("animal");
    var value = select.options[select.selectedIndex];
    alert("You are now searching for a: " + value.text);
}