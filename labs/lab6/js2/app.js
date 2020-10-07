var Character = {
    x: 100, //position
    y: 150,
    r: 50, //radius
    color: [255, 40, 40],
    speed: 2,
    update: function () { //draw function
        fill(this.color);
        circle(this.x, this.y, this.r);
    },
    controls: function () { // movement controls
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

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    Character.controls();
    Character.update(); //uses data from object
}

