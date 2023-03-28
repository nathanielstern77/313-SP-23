let particles = [];
let numParticles = 6000;
//let noiseScale = random(0.001, 0.1);
//let connectionDistance = 50;

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));//this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(800, 800);
    this.color = color(50,205,255)//(190,75,190,90)//(random(115,255),random(80,255), random(235,255)) //color(random(100, 255), random(100, 255), random(100, 255), 100);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let mouseDist = p5.Vector.dist(this.pos, mouse);
    
    if (mouseIsPressed && mouseDist < 1000) {
      let attraction = p5.Vector.sub(mouse, this.pos);
      attraction.mult(0.055);
      this.acc.add(attraction);
    
    }
  let noiseScale = random(0.001,10);
    let noiseValX = noise(this.pos.x * noiseScale, this.pos.y * noiseScale);
    let noiseValY = noise(this.pos.y * noiseScale, this.pos.x * noiseScale);
    let noiseVector = createVector(noiseValX + 0.5, noiseValY - 0.1);

   this.acc.add(noiseVector);
    this.vel.add(this.acc);
    this.vel.limit(100);
    this.pos.add(this.vel);
    this.acc.mult(0);

    // Keep particles within the canvas
   // this.pos.x = constrain(this.pos.x, 0, width);
 //   this.pos.y = constrain(this.pos.y, 0, height);
  
    if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
     if (random(1) < 0.5) {
      this.pos = createVector(random(width), 0); // Top border
    } else {
      this.pos = createVector(0, random(height)); // Left border
     //this.pos = createVector();
    }
  }
  }
  show() {
    fill(this.color);
    noStroke();
    rect(this.pos.x, this.pos.y, 3.5); //random(0.5,5));
  }
}
 //connect(particles) {
  //  particles.forEach((particle) => {
    //  let distance = this.pos.dist(particle.pos);
     // if (distance < connectionDistance) {
     //   strokeWeight(1);
     //   stroke(this.color);
     //   line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      
 
  


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 0, 70);

  particles.forEach((particle) => {
    particle.update();
    particle.show();
    //particle.connect(particles);
  });
}