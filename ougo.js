//Myriam Huot
// Nicholas Brown-Hernandez
// Web and FX, from theory to practice, 502-A22-LA, section 1
// Title: Defiance
// https://openprocessing.org/sketch/1877531

//Instructions: The player can control the circle by using the arrows on the keyboard (Up arrow makes it go up, left one makes it go to the left etc.) 
//The circle can be changed color when clicked on (precisely on the bottom right of it for some reason). 

//Analysis/artist statement: To resume, the goal is to defy the explanations given on the screen. I didn't have a specific story in mind, 
//but I liked the idea of making an anti-game. In this case, the circle could represent the player that tries to break the rules.



let circleX = 600;
let circleY = 600;
let speed = 10;
let diameter = 50;
let circleSize = 50;
let circleColor = 'blue';

function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(220);
  fill(circleColor);
  circle(circleX, circleY, circleSize);

  //Playable character: Circle. You use the arrows to move.
  if (keyIsDown(LEFT_ARROW)) {
    circleX -= speed; // update circleX instead of x
  }
  if (keyIsDown(RIGHT_ARROW)) {
    circleX += speed; // update circleX instead of x
  }
  if (keyIsDown(UP_ARROW)) {
    circleY -= speed; // update circleY instead of y
  }
  if (keyIsDown(DOWN_ARROW)) {
    circleY += speed; // update circleY instead of y
  }

  // Circle size changes from 50 to 150 when the circle goes outside the box 
  if (circleX - diameter / 2 < 300 || circleX + diameter / 2 > 900 || circleY - diameter / 2 < 300 || circleY + diameter / 2 > 900) {
    circleSize = 150;
  } else {
    circleSize = 50;
  }

  // Box Outline
  line(300, 300, 900, 300);
  line(300, 900, 900, 900);
  line(900, 300, 900, 900);
  line(300, 900, 300, 300);

  // Text information
  textSize(32);
  fill(0);

  //If circle is clicked, text "Do not go outside the box" changes to "WHAT HAVE YOU DONE" and "Please, do not click the botom right of the circle"
  if (circleColor !== 'red') { 
    if (circleX - diameter / 2 < 300 || circleX + diameter / 2 > 900 || circleY - diameter / 2 < 300 || circleY + diameter / 2 > 900) {
      text("WHAT HAVE YOU DONE", 425,250);
      text("Please, do not click the bottom right of the circle", 260, 950);
    } else {
      text("Do not go outside the box", 425,250);
    }
  }
  
  // When circle becomes red, display texts "STOP THIS MADNESS" and "FOLLOW THE RULES"
  if (circleColor === 'red') {
    textSize(64);
    fill(255, 0, 0);
    text("FOLLOW THE RULES", width/2, height/2, 50,600);
    textAlign(CENTER);
    text("STOP THIS MADNESS", width/2, height/2);
  }
}

function mouseClicked() {
  if (mouseX >= circleX && mouseX <= circleX + diameter && mouseY >= circleY && mouseY <= circleY + diameter) {
    circleColor = 'red';
  }
}
