var post1 = document.querySelector("#likes1");
var post2 = document.querySelector("#likes2");
var post3 = document.querySelector("#likes3");
var counter = [0,0,0];
console.log()

function button1(){
    counter[0]++;
    post1.innerText = counter[0] + " like(s)"
}
function button2(){
    counter[1]++;
    post2.innerText = counter[1] + " like(s)"
}
function button3(){
    counter[2]++;
    post3.innerText = counter[2] + " like(s)"
}