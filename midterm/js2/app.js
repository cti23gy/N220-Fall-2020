let xPos = 0;

function setup() {
    createCanvas(800, 600);
    fill("#00C4FF");
}
function draw() {
    
    background(0);
    xPos = xPos + 5;
    circle(xPos, 300, 30);
    //xPos++;

    if (xPos > 800) {
        xPos = 0;
    }
    
}