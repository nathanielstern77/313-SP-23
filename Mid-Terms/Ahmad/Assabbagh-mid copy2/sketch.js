let squareAlpha = 255;
let circles = [];
const numCircles = 50;
const circleSize = 10;
let isSketch1Active = true;
let clickCount = 0;

let sketch1Sound;
let sketch2Sound;

function preload() {
  sketch1Sound = loadSound('493549__original_sound__user-interface-glitch-faulty-error-sound-design-1.mp3');
  sketch2Sound = loadSound('explosion-6055.mp3');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (isSketch1Active) {
    sketch1();
  } else {
    sketch2();
  }
}

function mouseClicked() {
  clickCount++;

  if (clickCount >= 5) {
    clickCount = 0;
    isSketch1Active = !isSketch1Active;
  }

  if (!isSketch1Active) {
    sketch2Sound.play();
    for (let i = 0; i < numCircles; i++) {
      circles.push(new Circle(mouseX, mouseY, random(-5, 5), random(-5, 5)));
    }
  } else {
    sketch1Sound.play();
  }
}

function sketch1() {
  background(0);

  if (mouseIsPressed) {
    // Draw three squares that grow and fade inside each other
    for (let i = 0; i < 30; i++) {
      let size = map(frameCount % 200, 0, 199, 0, 600);

      // Set a random stroke color and thickness for each square
      stroke(random(255), random(255), random(255), squareAlpha);
      strokeWeight(4 + i * 8);
      noFill();

      rectMode(CENTER);
      rect(mouseX, mouseY, size + i * 100, size + i * 100);
    }

    // Decrease the alpha value over time
    squareAlpha -= 5;
  } else {
    // Reset the alpha value when the mouse is released
    squareAlpha = 255;
  }
}

function sketch2() {
  background(0);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
    if (circles[i].isFinished()) {
      circles.splice(i, 1);
    }
  }
}

class Circle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    noStroke();
    fill(255, 0, 0, this.alpha);
    ellipse(this.x, this.y, circleSize, circleSize);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}


