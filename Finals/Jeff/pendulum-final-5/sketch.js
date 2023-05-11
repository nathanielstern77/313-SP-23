let pendulums = [];

function setup() {
  createCanvas(800, 2000);
  
  let p1 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 200, 5);
  let p2 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 250, 5);
  let p3 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 300, 5);
  let p4 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 350, 20);
  let p5 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 400, 5);
  let p6 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 500, 1);
  let p7 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 550, 1);
  let p8 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 650, 1);
  let p9 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 700, 1);
  let p10 = new Pendulum(color(random(100, 255), random(0, 200), random(150, 255)), 750, 10);
  

  
  pendulums.push(p1);
  pendulums.push(p2);
  pendulums.push(p3);
  pendulums.push(p4);
  pendulums.push(p5);
  pendulums.push(p6);
  pendulums.push(p7);
  pendulums.push(p8);
  pendulums.push(p9);
  pendulums.push(p10);

}

function draw() {
  background(0)
  
  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].update();
    pendulums[i].display();
  }
 
}
//This will update and display all the pendulums in the array, regardless of how many there are.
/*p1.update();
  p1.display();

  p2.update();
  p2.display();

  p3.update();
  p3.display();*/
  function mousePressed() {
   
   
   for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].len = random(50, 600);
    pendulums[i].color = color(random(255), random(255), random(255));

  }
 
 
 
  }



  class Pendulum {
    constructor(color, len, size) {
      this.color = color;
      this.len = len;
      this.size = size;
      this.origin = createVector(width/2, 0);
      this.angle = PI/4;
      this.angleV = 0;
      this.angleA = 0;
      this.bob = createVector();
      this.gravity = .5;
      this.childPendulum = null;
      if (len > 75) {
        this.childPendulum = new Pendulum(color, len * 0.75, size * 0.75);
      }
      this.trail = [];
    }
  
    update() {
      let force = this.gravity * sin(this.angle);
      this.angleA = (-1 * force) / this.len;
      this.angleV += this.angleA;
      this.angle += this.angleV;
      this.bob.x = this.len * sin(this.angle) + this.origin.x;
      this.bob.y = this.len * cos(this.angle) + this.origin.y;
  
      if (this.childPendulum) {
        this.childPendulum.origin = this.bob.copy();
        this.childPendulum.update();
      }
  
      this.trail.push(createVector(this.bob.x, this.bob.y));
      const MAX_TRAIL_LENGTH = 100;
      if (this.trail.length > MAX_TRAIL_LENGTH) {
        this.trail.shift();
      }
    }
  
    display() {
      stroke(this.color);
      strokeWeight(this.size);
      for (let i = 1; i < this.trail.length; i++) {
        line(this.trail[i-1].x, this.trail[i-1].y, this.trail[i].x, this.trail[i].y);
      }
      fill(this.color);
      ellipse(this.bob.x, this.bob.y, this.size*2);
  
      if (this.childPendulum) {
        this.childPendulum.display();
      }
    }
  }
    
  
  
