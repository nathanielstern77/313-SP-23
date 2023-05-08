let dict = [];
let movers = [];
let button;
let isAttracted = false;
let circle;
let magnet;
let magnetStrength;
let inputBox;

function setup() {
  frameRate=200
  createCanvas(windowWidth, windowHeight);

  circle = createVector(windowWidth / 2, windowHeight / 2);
  magnetStrength = 1000;

  reset();

  inputBox = createInput();
  inputBox.position(20, 50);
  inputBox.changed(() => {
    dict = inputBox.value().split(" ");
    reset();
  });

  button = createButton('Attract');
  button.position(20, 20);
  button.mousePressed(() => {
    isAttracted = !isAttracted;
  });
}

function draw() {
  background(27, 90, 110, 32);
  ellipse(circle.x, circle.y, 130, 130);

  if (isAttracted) {
    let magnet = createVector(circle.x, circle.y);
    for (let i = 0; i < movers.length; i++) {
      let force = p5.Vector.sub(magnet, movers[i].position);
      let distance = force.mag();
      force.normalize();
      force.mult(magnetStrength / (distance * distance));
      movers[i].applyForce(force);
    }
  }

  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}

function reset() {
  movers = [];
  for (let i = 0; i < dict.length; i++) {
    movers[i] = new Mover(1.5, 20 + i * 40, 2, dict[i]);
  }
}

function Mover(m, x, y, word) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.word = word;
}

Mover.prototype.applyForce = function(force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(1);
  fill(255);
  text(this.word, this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - this.mass * 8)) {
    this.velocity.y *= -0.4;
    this.position.y = (height - this.mass * 8);
  }
};
