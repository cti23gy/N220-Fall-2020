let Yarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //10 objects in array
let Xarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function setup() {
    createCanvas(600, 600);
    noStroke();
    fill("#004FFF");
}

function draw() {
    background("#FFFFFF");
    Xarray.push(mouseX); //mouse array
    Xarray.shift();
    Yarray.push(mouseY);
    Yarray.shift();
    for(var j = 0; j < Yarray.length; j++) { //loops for give a 10 circle trail
        circle(Xarray[j], Yarray[j], 20);
    }
    
}