let r = 30;
let i = 0;

function setup() {
    createCanvas(800, 300);
    
}
function draw() {
    fill("#000000"); //black
    //loop that adds to x while checking if statments
    
    while (i < 25) {
        circle(50+(i*25), 100, r);
        if(i % 3 && i % 5){
            fill("#0000FF"); //blue
        }
        else if(i % 3){
            fill("#9933FF"); //purple
        }
        else if(i % 5){
            fill("#00CC00"); //green
        }
        else {
            fill("#000000"); //black
        }
        i++;
    }
    
}
