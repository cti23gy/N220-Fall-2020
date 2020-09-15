let x = 300;
let y = 300;
let r = 300;

function setup() {
    createCanvas(800, 600);
    //loop of circles drawn inward based on radius
    while (r > 5) {
        circle(x, y, r);
        r -= 5;
    }
}
