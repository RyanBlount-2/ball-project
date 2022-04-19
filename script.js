// Define parameters.
var time = 100;
var ball = document.getElementById('ball');
var velocityX = 10;
var velocityY = 10;
var positionX = 0;
var positionY = 0;
var minX = 0;
var minY = 0;
var maxX = 500;
var maxY = 450;

// Change the ball color upon clicking.
function randomColor() {
   var r = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   var g = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   var b = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   return '#' + r + g + b;
}
function newColor() {
   ball.style.background = randomColor();
}
ball.onclick = newColor;

// Style the cursor.
document.body.style.cursor = "crosshair";

// Define how to move the ball in the x & y axes.
function moveBallX() {
   var ball = document.getElementById('ball');
   positionX = positionX + velocityX;
   ball.style.left = positionX + 'px';
}
function moveBallY() {
   var ball = document.getElementById('ball');
   positionY = positionY + velocityY;
   ball.style.top = positionY + 'px';
}

// Determine if within range and if velocity needs to be changed.
function edgeDetectionX() {
   if (positionX >= minX && positionX <= maxX) {
      moveBallX();
   }
   else { velocityX = -velocityX;
      moveBallX(); }
}
function edgeDetectionY() {
   if (positionY >= minY && positionY <= maxY) {
      moveBallY();
   }
   else {
      velocityY = -velocityY;
      moveBallY();
   }
}

// Main function.
function mainFunction() {
   edgeDetectionX();
   edgeDetectionY();
}

// Move ball at a set interval.
setInterval(mainFunction, time);
