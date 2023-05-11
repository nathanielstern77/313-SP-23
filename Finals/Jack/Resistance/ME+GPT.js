let particles = [];
let target;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  target = createVector(random(width), random(height));
}

function draw() {
  background(0, 15);
  target.set(random(width), random(height));

  // Draw a black square in the center
  fill(255);
  const squareSize = (windowWidth/15);
  rect(width / 2 - squareSize / 2, height / 2 - squareSize / 2, squareSize, squareSize);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update(target);
    particles[i].display();
  }

  particles = particles.filter(p => !p.isOffScreen());
}

function mousePressed() {
  for (let i = 0; i < 5000; i++) {
    particles.push(new Particle(random(width / 0.5, width / 1.1), random(height)));
  }
}

const colorPalettes = [
     // ['#000000', '#000000', '#000000', '#000000', '#000000', '#000000'],
      ['#F44336', '#F44336', '#F44336', '#F44336', '#F44336', '#F44336'],
      ['#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5'],
      ['#FFEB3B', '#FFC107', '#FFEB3B', '#2196F3', '#2196F3', '#2196F3'],
      ['#FFC107', '#FFEB3B', '#CDDC39', '#8BC34A', '#4CAF50', '#009688'],
      ['#E91E63', '#E91E63', '#009688', '#009688', '#9C27B0', '#9C27B0'],
];

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 2), random(0, 10));
    this.acc = createVector(0);
    this.size = random(2,4);
    this.color = this.getRandomColorFromPalette();
    this.noiseScale = random(0.005, 0.02);
  }

  getRandomColorFromPalette() {
    const palette = random(colorPalettes);
    return color(random(palette));
  }

  update() {
    frameRate(30);
    let noiseVal = noise(this.pos.x * this.noiseScale, this.pos.y * this.noiseScale);
    let noiseVec = p5.Vector.fromAngle(noiseVal * TWO_PI);
    this.acc.add(noiseVec);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0.010);

    // Check for collisions with the black square
    const squareSize = (windowWidth/3);
    const squareX = width / 2 - squareSize / 2;
    const squareY = height / 2 - squareSize / 2;

    if (this.pos.x >= squareX && this.pos.x <= squareX + squareSize && this.pos.y >= squareY && this.pos.y <= squareY + squareSize) {
      // Reverse the velocity if a collision is detected
      this.vel.x *= -0.9;
      this.vel.y *= -0.1;

      this.size *= 1.0017; // Increase the size
      this.size = constrain(this.size, 2, 50);
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  isOffScreen() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
}