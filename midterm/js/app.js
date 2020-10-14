var ball = { 
    x: 100, 
    y: 100, //Ball Object defines the placement and velocity of the ball
    velocityX: 2, 
    velocityY: 2, //allows position to change
    update: function() { //update function can be called upon to keep ball moving
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};
    
var paddle = { //Paddle Object defines the object the player is moving 
    x: 100,
    y: 350, 
    w: 150, 
    h: 20,
    update: function() { //update function to keep paddle position consistent
        noFill();
        stroke(143, 251, 255);
        rect(this.x, this.y, this.w, this.h);
        if(keyIsDown(LEFT_ARROW)) { //The controls for the paddle
            this.x -= 2;
        }
    
        if(keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }
    }
};
    
    
    var blocks = [];  //array for blocks
    
    for(var i = 0; i < 6; i++) { //for loop determines the position of each block in the array
        blocks[i] = { x: i * 60, y: 10 }; //creates object array to hold individual block information
    }
    
    function setup() {      //standard setup function
        createCanvas(400, 400);
    }
    
    function draw() {    //main function
        background(70);
    
        ball.update(); //updates the position of ball and paddle
        paddle.update();
    
        if(ball.x > 400) {    //sets conditions for ball bouncing
            ball.x = 400;
            ball.velocityX *= -1;
        }
    
        if(ball.x < 0) {      //same as above
            ball.x = 0;
            ball.velocityX *= -1;
        }
    
        if(ball.y < 0) {      //same as above
            ball.y = 0;
            ball.velocityY *= -1;
        }
    
        if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) { //hittest point checks for ball collision with paddle
            ball.velocityY *= -1; //reverses velocity to bounce off
        }
    
        for(var i = 0; i < blocks.length; i++) { //determines new block setup if one it hit
            var b = blocks[i];
            rect(b.x, b.y, 60, 20);
    
            if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) { //blocks that are hit will reverse velocity of ball
                ball.velocityY *= -1;
    
                //remove block from array
                blocks.splice(i, 1);
            }
        }
    
    }
    
    function hitTestPoint(px, py, bx, by, bw, bh) { //function that determines if one object comes in contact with the other
        if(px > bx && px < bx + bw) {
            if(py > by && py < by + bh) {
                return true; //if hit
            }
        }
        return false; //if not hit (basically and other senario, nothing will happen)
    }
