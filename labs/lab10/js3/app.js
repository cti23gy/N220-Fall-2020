let display = document.getElementById("display");

function Questions(event) { //I chose several very random questions off the top of my head...
    let answer = event.target.getAttribute("data-answer");
    display.innerHTML = answer;
}