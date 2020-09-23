let color = ["#0000FF", "#9933FF", "#00CC00"];

function setup() {
    createCanvas(800, 300);
    noStroke();
    for(let i = 0; i < 3; i++) { // Loops enough for every color once
        fill(color[i]);
        rect(100+(i*50), 100, 50, 100);
    }
}



