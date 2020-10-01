let xPos = 0;
let yPos = 100;
let xSpeed = 5;
let ySpeed = 5;
let rectX = 200;
let rectY = 500;
let didChange = false;

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

            return true;
        }

   }

   return false;

}


function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(0);
    
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
    rectH = rectX + 400;
    rectW = yPos + 20;

    rect(rectX, rectY, 400, 20);

    if (xPos > 800) {
        xSpeed *= -1; //opposite speed
        fill("#D33DFF"); //colors also change NO REQUIRED
        didChange = false;
    }
    if (xPos < 0) {
        xSpeed *= -1;
        fill("#FF3D3D");
        didChange = false;
    }
    if (yPos > 600) {
        ySpeed *= -1;
        fill("#3D57FF");
        didChange = false;
    }
    if (yPos < 0) {
        ySpeed *= -1;
        fill("#13DF13");
        didChange = false;
    }
    if (collideRect(xPos, yPos, rectX, rectY, rectW, rectH) == true && didChange == false) {
        ySpeed *= -1;
        didChange = true;
    }
    
    circle(xPos, yPos, 30);

    
    
}