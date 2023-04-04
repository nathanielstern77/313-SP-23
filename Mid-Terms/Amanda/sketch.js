let vertpoints = [];
let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
for (let i = 0; i < 0; i++) {
  let x = windowWidth*0.2 + 100 * i;
  let y = windowHeight*0.5 + 0 * i;
  vertpoints[i] = new vertpoint (x,y, 50);
}
 mic = new p5.AudioIn();//initiates audio
 mic.start();
}

function mouseClicked() {//adds a point whenever mouse is clicked
  let r = random(10, 50);
  let b = new vertpoint(mouseX, mouseY, r);
  vertpoints.push(b);}

function draw() {
  //background(100,3);
  blendMode(DIFFERENCE);
 let level = mic.getLevel();
 colorMode(HSB,100) 
  stroke(random(40,60),random(50,100),random(50+level*1200))
  strokeWeight(level*300)
  noFill();
 
  beginShape();
  curveVertex(windowWidth*0.1, windowHeight*0.5);
  curveVertex(windowWidth*0.1, windowHeight*0.5);
  for (let i = 0; i < vertpoints.length; i++) {
    vertpoints[i].move();
    vertpoints[i].show();
  }
  curveVertex(windowWidth*0.9, windowHeight*0.5);
  curveVertex(windowWidth*0.9, windowHeight*0.5);
  endShape();

  console.log(level)
}

class vertpoint {//start of object
  constructor() {
  this.x = random(windowWidth*0.1,windowWidth*0.9);
  this.y = windowHeight/2;
  this.speedx = random(-1,1)
  this.speedy= random(-3,3)
  }

  move() {//how object moves
  this.x = this.x + this.speedx
  this.y = this.y + this.speedy
  this.x=this.x+this.speedx//added from bouncing ball
  this.y=this.y+this.speedy
  if(this.x>windowWidth) {this.speedx=this.speedx*-1}
  if(this.y>windowHeight) {this.speedy=this.speedy*-1}
  if(this.x<5) {this.speedx=this.speedx*-1}
  if(this.y<5){this.speedy=this.speedy*-1}//end added from bouncing ball
  }

  show() {curveVertex(this.x,this.y)}//litterally what the object actually is
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}