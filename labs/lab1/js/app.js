function setup() {
    var green = "#87FF87"
    var pink1 = "#ffa6c9"
    var pink2 = "#db4f90"
    var pink3 = "#db4fac"
    var black1 = "#060204"
    var white1 = "#FAE7FC"
    createCanvas(800, 600);
    
    //back layer
    rotate(PI / 3.0);    //Drawing Method 1
    fill(pink1);
    ellipse(340, -250, 120, 135);    //Drawing Method 2
    ellipse(230, 0, 100, 135);
    rotate(-(PI / 3.0)*(PI / 3.0));

    fill(pink2);
    ellipse(350, 350, 180, 100);
    
    //body
    fill(pink1);
    circle(250, 250, 150);    //Drawing Method 3

    //front layer
    rotate(PI / 3.0);
    fill(pink2);
    ellipse(350, 70, 155, 105);
    rotate(-(PI / 3.0)*(PI / 3.0));

    fill(black1);
    ellipse(200, 200, 20, 50);
    ellipse(280, 200, 20, 50);
    noStroke();    //Drawing Method 4
    fill(white1);
    ellipse(200, 191, 10, 30);
    ellipse(280, 191, 10, 30);
    fill(pink3);
    ellipse(150, 250, 40, 20);
    ellipse(330, 250, 40, 20);
    fill(black1);
    arc(240, 265, 38, 60, 2*PI, PI);    //Drawing Method 5
    fill(pink3);
    
}