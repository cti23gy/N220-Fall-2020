let xPos = 0;
let yPos = 100;
let xSpeed = 5;
let ySpeed = 5;

function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(0);

    
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    if (xPos > 800) {
        xSpeed *= -1;
        fill("#D33DFF");
    }
    if (xPos < 0) {
        xSpeed *= -1;
        fill("#FF3D3D");
    }
    if (yPos > 600) {
        ySpeed *= -1;
        fill("#3D57FF");
    }
    if (yPos < 0) {
        ySpeed *= -1;
        fill("#13DF13");
    }
    
    circle(xPos, yPos, 30);

    
    
}