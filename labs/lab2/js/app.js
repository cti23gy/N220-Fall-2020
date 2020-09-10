function setup() {
    createCanvas(400, 300);
    
}
function draw() {
    let r = 30;

    background(0);
    circle(mouseX,mouseY,r);
    if(mouseX < 200){
        fill("#FF0000"); //orange
    }
    // Yellow when in the top right
    if(mouseX > 200){
        fill("#0000FF"); //yellow
    }
    
}
