let song, analyzer;
let xSpeed = 2, xAxis = 50;
let ySpeed = 5, yAxis = 50;
let y = 0;
let zAxis = 0;


function preload() {
  song = loadSound('../songs/scarletfire.mp3');
}

function setup() {
  createCanvas(1500, 1000, WEBGL);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to a volume analyzer
  analyzer.setInput(song);
  
 
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(0);
  } else {
    song.play();
    background(0);
  }
}


function draw() {
  
  
  
  xAxis += xSpeed;
  yAxis += ySpeed;

  if (xAxis > width - -1000 || xAxis < -1000) {
    xSpeed *= -1;
  }
  if (yAxis > height - -1000 || yAxis < -1000) {
    ySpeed *= -1;
  }
  

 

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  
  // Draw celestial bodies with size and color based on volume
  push();
  fill(255, 255, 255, 50);
  translate(0, 0, -1000);
  rotateX(millis() / 1000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  translate(300, 0, -50);
  sphere(25 + rms * 200);
  pop();
  
  push();
  stroke('red');
  strokeWeight(.5);
  
  fill(255, 255, 0, 50);
  
  rotateZ(millis() / 1000);
  translate(-300, 0, 1);
  sphere(10 + rms * 100);
  pop();
  
  push();
  stroke(0, 0, 255);
  strokeWeight(1);
  fill(255,255,0)
 
  rotateY(millis() / 1000);
  translate(300, 0, -50);
  sphere(10 + rms * 100);
  pop();

 
  push();
  fill(random(255), random(255), 255);
  
  translate(xAxis, yAxis, -7000, -5000);
  rotateZ(millis() / 1000);
  box(400 + rms * 500);
  
  pop();

  let cubeSize = 20 + rms * 1000;
  let ringSize = 20 + rms * 100;
  let ringSize2 = 20 + rms * 200;
  push();
  translate(width/2, height/2, -1500);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  stroke(random(255),random(255),random(255))
  strokeWeight(5)
  noFill();
  box(cubeSize);
  pop();
  

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(-1000, 20);
  pop();

  translate(-750, -100, 0);
  push();
  fill(random(255), random(255), random(255))
  stroke(1)
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  torus(ringSize2,);
  pop();

  push();
  translate(600, -1500, -4000);
  fill(random(255), random(255), random(255));
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  
  box(cubeSize);
  pop();
}