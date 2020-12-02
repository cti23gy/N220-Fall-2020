let element = document.getElementById("image1");
let display = document.getElementById("display");
element.style.backgroundColor = "rgb(0, 0, 0)";
display.innerHTML = "Current Color: rgb(0, 0, 0)";

let r = 0;
let g = 0;
let b = 0;

function buttonRed(event) {
    let add = Number(event.target.getAttribute("data-amount"));
    console.log(add);
    r += add;
    let newColor = "rgb(" + r + ", " + g + ", " + b  + ")";
    display.innerHTML = "Current Color: " + newColor;
    element.style.backgroundColor = newColor;
}

function buttonGreen(event) {
    let add = Number(event.target.getAttribute("data-amount"));
    console.log(add);
    g += add;
    let newColor = "rgb(" + r + ", " + g + ", " + b  + ")";
    display.innerHTML = "Current Color: " + newColor;
    element.style.backgroundColor = newColor;
}

function buttonBlue(event) {
    let add = Number(event.target.getAttribute("data-amount"));
    console.log(add);
    b += add;
    let newColor = "rgb(" + r + ", " + g + ", " + b  + ")";
    display.innerHTML = "Current Color: " + newColor;
    element.style.backgroundColor = newColor;
}
