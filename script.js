// Define parameters.
var Time = 100;
var Ball = document.getElementById('Ball');
var Velocity_X = 10;
var Velocity_Y = 10;
var Position_X = 0;
var Position_Y = 0;
var Min_X = 0;
var Min_Y = 0;
var Max_X = 500;
var Max_Y = 450;

// Change the ball color upon clicking.
function Random_Color() {
   var r = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   var g = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   var b = ('0' + (Math.random() * 256 | 0).toString(16)).slice(-2);
   return '#' + r + g + b;
}
function New_Color() {
   Ball.style.background = Random_Color();
}
Ball.onclick = New_Color;

// Style the cursor.
document.body.style.cursor = "crosshair";

// Define how to move the ball in the x & y axes.
function Move_Ball_X() {
   var Ball = document.getElementById('Ball');
   Position_X = Position_X + Velocity_X;
   Ball.style.left = Position_X + 'px';
}
function Move_Ball_Y() {
   var Ball = document.getElementById('Ball');
   Position_Y = Position_Y + Velocity_Y;
   Ball.style.top = Position_Y + 'px';
}

// Determine if within range and if velocity needs to be changed.
function Edge_Detection_X() {
   if (Position_X >= Min_X && Position_X <= Max_X) {
      Move_Ball_X();
   }
   else { Velocity_X = -Velocity_X;
      Move_Ball_X(); }
}
function Edge_Detection_Y() {
   if (Position_Y >= Min_Y && Position_Y <= Max_Y) {
      Move_Ball_Y();
   }
   else {
      Velocity_Y = -Velocity_Y;
      Move_Ball_Y();
   }
}

// Main function.
function Main_Function() {
   Edge_Detection_X();
   Edge_Detection_Y();
}

// Move ball at a set interval.
setInterval(Main_Function, Time);