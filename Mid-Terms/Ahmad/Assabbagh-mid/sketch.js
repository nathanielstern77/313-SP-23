let colorPalette = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];

let circles = [];
let clickSound;

function preload() {
  clickSound = loadSound('reception-bell-14620.mp3'); // load your sound file here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // clear background each frame
  background(0);
  
  // update and draw each circle
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.radius -= 0.5; // reduce radius by 0.5 each frame
    c.opacity -= 0.5; // reduce opacity by 2 each frame
    fill(red(c.color), green(c.color), blue(c.color), c.opacity);
    noStroke();
    ellipse(c.x, c.y, c.radius, c.radius);
    
    // remove the circle if it's no longer visible
    if (c.opacity <= 0) {
      circles.splice(i, 1);
      i--;
    }
  }
}

function mouseClicked() {
  let currentColor = color(random(colorPalette));
  let shapeSize = random(50, 200);
  let xPos = mouseX;
  let yPos = mouseY;
  
  // add a new circle to the array of circles
  circles.push({
    x: xPos,
    y: yPos,
    radius: shapeSize * 1.5, // increase size by 50%
    color: currentColor,
    opacity: 255 // start with full opacity
  });
  
  // play sound effect
  clickSound.play();
}
