/**
 * This file contains the p5.js functions for creating the html canvas and drawing to the screen.
 * 
 * @author Joshua Ciffer
 * @version 06/22/2018
 */

/**
 * The snake object.
 */
var snake;

/**
 * The food object.
 */
var food;

/**
 * The size of each grid space on the canvas.
 */
var gridScale = 10;

/**
 * Initial canvas setup. Size is set to 500x500 (50x50 logical size because of grid scale), framerate is set to 14, and objects are initialized.
 * 
 * @returns void
 */
function setup() {
	createCanvas(500, 500);
	snake = new Snake();
	food = new Food();
	frameRate(14);
}

/**
 * Repeatedly draws to the screen and updates the canvas.
 * 
 * @returns void
 */
function draw() {
	background(0);
	drawSnake();
	drawFood();
}

/**
 * Changes the direction of snake movement based off of input from the arrow keys or WASD keys.
 * 
 * @returns void
 */
function keyPressed() {
	if ((keyCode == UP_ARROW) || (keyCode == 87)) { // Up arrow or W key.
		snake.updateSpeed(0, -1);
	} else if ((keyCode == DOWN_ARROW) || (keyCode == 83)) { // Down arrow or S key.
		snake.updateSpeed(0, 1);
	} else if ((keyCode == RIGHT_ARROW) || (keyCode == 68)) { // Right arrow or D key.
		snake.updateSpeed(1, 0);
	} else if ((keyCode == LEFT_ARROW) || (keyCode == 65)) { // Left arrow or A key.
		snake.updateSpeed(-1, 0);
	} else if (keyCode == 32) { // Space bar.
		snake.updateSpeed(0, 0);
	}
}

/**
 * Updates the snake's position and draws to the canvas.
 * 
 * @returns void
 */
function drawSnake() {
	console.log(this.snake.pos.x + " " + this.snake.pos.y);
	snake.updatePosition();
	fill(255, 255, 0);
	let i = 0;
	// for (let i = 0; i < snake.length; i++) {
	rect(this.snake.pos.x - (i * 10), this.snake.pos.y - (i * 10), 10, 10);
	// }
	if (this.snake.pos.x < 0) { // If snake goes off the left side of the screen,
		this.snake.pos.x = width;
		// snake.updateSpeed(-1, 0);
	} else if (this.snake.pos.x >= width) { // If snake goes off the right side of the screen,
		this.snake.pos.x = -10;
		// snake.updateSpeed(1, 0);
	} else if (this.snake.pos.y < 0) { // If snake goes off the top of the screen,
		this.snake.pos.y = height;
		// snake.updateSpeed(0, -1);
	} else if (this.snake.pos.y >= height) { // If snake goes off the bottom of the screen,
		this.snake.pos.y = -10;
		// snake.updateSpeed(0, 1);
	}
}

/**
 * Updates the food's position and draws to the canvas.
 * 
 * @returns void
 */
function drawFood() {
	food.updatePosition();
	fill(255);
	rect(this.food.pos.x, this.food.pos.y, 10, 10);
}