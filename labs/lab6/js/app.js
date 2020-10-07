var myDisplay = {
    x: 100, //position
    y: 150,
    w: 120, //width
    h: 100, //height
    color: [56, 100, 200],
    update: function () { //draw function
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

function setup() {
    createCanvas(400, 300);
    myDisplay.update(); //uses data from object
}

