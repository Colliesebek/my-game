//by Luca Fu
 


// constants to set up the environment
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
const BACKGROUND_COLOR = 'lightblue';

// variables to hold the players location
var playerX = 400;
var playerY = 400;

/*
	The setup function runs once when the program starts.
 */
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

/*
	 The draw function loops over and over until the program stops
	 or when noLoop() is called.
 */
function draw() {
  // Draw background
  background(BACKGROUND_COLOR);
  
  // Draw player
  drawPlayer(playerX, playerY);
  
  // Player movement
  if (keyIsDown(LEFT_ARROW)) {
    playerX-=25;
		 
  }

  else if (keyIsDown(RIGHT_ARROW)) {
    playerX+=25;
		
  }

  else if (keyIsDown(UP_ARROW)) {
    playerY-=25;
  }

  else if (keyIsDown(DOWN_ARROW)) {
    playerY+=25;

  }
}

/*
	This function draw the player on the screen at pX, pY.
 */
function drawPlayer(pX, pY) {
  noStroke();
  fill('white');
  
  // body
  ellipse(pX, pY, 50, 50);
  ellipse(pX, pY+50, 75, 75);
  ellipse(pX, pY+100, 100, 100);
  
  // eyes
  fill('black');
  ellipse(pX-10, pY-5, 10, 10);
  ellipse(pX+10, pY-5, 10, 10);
  
  // nose
  fill('orange');
  triangle(pX, pY, pX+10, pY+5, pX-10, pY+10);
	
	fill('green')
	rect(0, 600, 800, 200)
	
	fill('white')
	ellipse(200, 100, 200, 100)

	fill('white')
	ellipse(600, 100, 200, 100)
	
}
