let x = 0;
let y = 0;
let i = 0;
let j = 0;
let q = 1;
function setup() {
    createCanvas(800, 600);
    fill("#FF0000");
    //noStroke();
    
    //2 loops for creating a 4x4 grid
    for(y = 0; y < 4; y++) {
        for(x = 0; x < 4; x++) {
            if((x == 0 || y == 3) || (x == 1 && (y == 2 || y == 1)) || (x == 2 && y == 2)) { // the set of conditions to place in the grid
                                                                                             // because I can't place more than 1 rect() command
                rect(100+(x*30), 100+(y*30), 30, 30);
            }
        }
    }
    

}
