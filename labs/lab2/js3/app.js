let xPos = 0;
let yPos = 100;
let xSpeed = 5;
let ySpeed = 5;

function setup() {
    createCanvas(800, 600);
    fill("#D33DFF");
}
function draw() {
    background(0);

    
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    if (xPos > 800) {
        xSpeed *= -1;
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
    
    circle(xPos, yPos, 30);

    
    
}