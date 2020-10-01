let color = ["#3DFFFF", "#3D00FF", "#3DFF00", "#3D0F44"]; //array of random colors
let cx;
let cy;
let cirSize = 50;
let overCir = false; //check for circle
let locked = false; //locked variable to check for mouse over circle

function setup() {
    createCanvas(600, 600);
    noStroke();
    fill("#3DFFFF");
    cx = width / 2.0;
    cy = height / 2.0;
    circle(cx, cy, cirSize);
}

function draw() {
    if ( //big check for mouse over circle from all sides
        mouseX > cx - cirSize &&
        mouseX < cx + cirSize &&
        mouseY > cy - cirSize &&
        mouseY < cy + cirSize
      ) {
        overCir = true;
        if (!locked) {
        }
    }   else {
        overCir = false;
    }
}

function mousePressed() { //mouse click command
    if (overCir) {
        locked = true;
        let choose = random(color); //randomize color
        fill(choose);
        circle(cx, cy, cirSize);
      } else {
        locked = false;
      }
}