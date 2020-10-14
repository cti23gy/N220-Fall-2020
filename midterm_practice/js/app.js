let score = 0;

var Character = {
    x: 500, //position
    y: 100,
    w: 20,
    h: 100,
    color: [255, 40, 40],
    speed: 4,
    update: function () { //draw function
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    },
    controls: function () { //movement controls
        if (keyIsDown(UP_ARROW)) {
            Character.y -= Character.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            Character.y += Character.speed;
        }
        return false; // prevent default
    }
}

var pongDisk = [ // moving projectile
    { x: 100, y: 100, r: 30, speedX: 4, speedY: 4},
]

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) { //rectangle collision
    var colliding = false;
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            return true;
        }
   }
   return false;
}

function setup() {
    createCanvas(600, 500);
}

function draw() {
    background(188, 255, 159);
    Character.controls();
    Character.update(); //uses data from object
    textSize(64);
    fill(255, 0, 0);
    text("Score: " + score, 75, 100); //show score

    for(var i = 0; i < pongDisk.length; i++) { 
        fill(0, 220, 255);
        let currentDisk = pongDisk[i];
        circle(pongDisk[i].x, pongDisk[i].y, pongDisk[i].r);
        currentDisk.y += currentDisk.speedY;
        currentDisk.x += currentDisk.speedX;
        if (currentDisk.x < 0) {
            currentDisk.speedX *= -1;
        }
        if (currentDisk.x > 600) {
            currentDisk.x = 200;
            score = 0;
        }
        if (currentDisk.y > 500 || currentDisk.y < 0) { //screen loop
            currentDisk.speedY *= -1;
        }
        if (collideRect(currentDisk.x, currentDisk.y, Character.x, Character.y, Character.w, Character.h) == true) {
            currentDisk.speedX *= -1;
            score++;
            
        }
    }
}
