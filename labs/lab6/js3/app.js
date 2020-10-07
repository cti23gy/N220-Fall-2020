let didChange = false;

var Character = {
    x: 250, //position
    y: 400,
    r: 10, //radius
    color: [255, 40, 40],
    speed: 3,
    update: function () { //draw function
        fill(this.color);
        circle(this.x, this.y, this.r);
    },
    controls: function () { //movement controls
        if (keyIsDown(UP_ARROW)) {
            Character.y -= Character.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            Character.y += Character.speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            Character.x -= Character.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            Character.x += Character.speed;
        }
        return false; // prevent default
    }
}

var rectangles = [ //bullets
    { x: 100, y: 0, w: 75, h: 45 },
    { x: 100, y: 100, w: 75, h: 45 },
    { x: 20, y: 50, w: 75, h: 45 },
    { x: 90, y: 200, w: 75, h: 45 },
    { x: 100, y: 300, w: 75, h: 45 }
]

var rectanglesD = [ // diagonal bullets
    { x: 100, y: 100, w: 30, h: 30, speed: 4},
    { x: 250, y: 10, w: 30, h: 30, speed: 3}
]

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) { //rectangle collision from previous assignment
    var colliding = false;
    if(circleX > rectX && circleX < rectX + rectW) {
        if(circleY > rectY && circleY < rectY + rectH) {
            return true;
        }
   }
   return false;
}

function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(188, 255, 159);
    if (didChange == true) { //signals getting hit!!!
        textSize(64);
        fill(255, 0, 0);
        text('Game Over', 75, 200);
    }
    Character.controls();
    Character.update(); //uses data from object
    for(var i = 0; i < rectangles.length; i++) { //movement for bullets
        fill(0, 68, 255);
        let currentRectangle = rectangles[i];
        rect(rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h);
        currentRectangle.y += 2;
        if(currentRectangle.y > 600) { //screen loop
            currentRectangle.y = 0;
            currentRectangle.x = Math.random() * 500;
        }
        if (collideRect(Character.x, Character.y, rectangles[i].x, rectangles[i].y, rectangles[i].w, rectangles[i].h) == true && didChange == false) {
            Character.color = [0, 0, 0];
            didChange = true;
        }
        
    }
    for(var i = 0; i < rectanglesD.length; i++) { //movement for diagonal bullets
        fill(0, 220, 255);
        let currentRectangleD = rectanglesD[i];
        rect(rectanglesD[i].x, rectanglesD[i].y, rectanglesD[i].w, rectanglesD[i].h);
        currentRectangleD.y += 3;
        currentRectangleD.x += currentRectangleD.speed;
        if (currentRectangleD.x > 500 || currentRectangleD.x < 0) {
            currentRectangleD.speed *= -1;
        }
        if (currentRectangleD.y > 600) { //screen loop
            currentRectangleD.y = 0;
            currentRectangleD.x = Math.random() * 500;
        }
        if (collideRect(Character.x, Character.y, rectanglesD[i].x, rectanglesD[i].y, rectanglesD[i].w, rectanglesD[i].h) == true && didChange == false) {
            Character.color = [0, 0, 0];
            didChange = true;
        }
    }
}