let loop = 0;
let i = 0;
let Yarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function setup() {
    createCanvas(600, 600);
    noStroke();
    fill("#3DFFFF");
}

function draw() {
    background(100); //keeps minimal circles visible
    Yarray.push(i);
    Yarray.shift();
    //Draws multiple circles moving downward
    for(var j = 0; j < Yarray.length; j++) {
        circle(100, Yarray[j], 20);
    }
    i += 5;

    
}
