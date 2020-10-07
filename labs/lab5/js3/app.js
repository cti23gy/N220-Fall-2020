let xPos = 0;
let yPos = 60;
let xSpeed = 5;
let ySpeed = 5;
let Yarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //10 objects in array
let Xarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let color = ["#FF0000", "#FF8000", "#FFFF00", "#80FF00",
            "#00FF00", "#00FF80", "#00FFFF", "#0080FF", 
            "#0000FF", "#7F00FF", "#FF00FF", "#FF007F"]; //extensive array of random colors
let swap = 0; //swaps differect shapes

function setup() {
    createCanvas(800, 600);
    noStroke();
    fill("#000000");
}

function draw() { //Main Draw function
    bouncingShape(); //Handles the bouncing shape
    mouseShape(); //Handles the shape controled by mouse
}

function mousePressed() { //mouse click command
    background("#FFFFFF"); //click to clear screen
    swap++; //change shapes
    if(swap >= 3) {
        swap = 0;
    }
}

function mouseShape() {
    Xarray.push(mouseX); //mouse array
    Xarray.shift();
    Yarray.push(mouseY);
    Yarray.shift();
    let monoColor = random(5, 255); // random monochrome colors
    for(var j = 0; j < Yarray.length; j++) { //loops for give a 10 circle trail
        fill(monoColor);
        if(swap == 0) { //alternating shapes when clicked
            circle(Xarray[j], Yarray[j], 20);
        }
        if(swap == 1) {
            rect(Xarray[j], Yarray[j], 20, 20);
        }
        if(swap == 2) {
            rect(Xarray[j], Yarray[j], 40, 20);
        }
    }
}

function bouncingShape() {
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    if (xPos > 800) {
        xSpeed *= -1; //opposite speed
    }
    if (xPos < 0) {
        xSpeed *= -1;
    }
    if (yPos > 600) {
        ySpeed *= -1;
    }
    if (yPos < 0) {
        ySpeed *= -1;
    }
    let rainbowColor = random(color);
    fill(rainbowColor);
    if (swap == 0) { //alternating shapes when clicked
        circle(xPos, yPos, 30);
    }
    if (swap == 1) {
        rect(xPos, yPos, 30, 30);
    }
    if (swap == 2) {
        rect(xPos, yPos, 50, 30);
    }
}