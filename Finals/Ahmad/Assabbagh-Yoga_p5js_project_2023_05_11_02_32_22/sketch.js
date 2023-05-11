// ml5.js: Pose Classification
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.2-pose-classification.html
// https://youtu.be/FYgYyq-xqAw

// All code: https://editor.p5js.org/codingtrain/sketches/JoZl-QRPK

// Separated into three sketches
// 1: Data Collection: https://editor.p5js.org/codingtrain/sketches/kTM0Gm-1q
// 2: Model Training: https://editor.p5js.org/codingtrain/sketches/-Ywq20rM9
// 3: Model Deployment: https://editor.p5js.org/codingtrain/sketches/c5sDNr8eM
let song;
let air;
let water;
let earth;
let fire;
let spritesheet;

let video;
let poseNet;
let pose;
let skeleton;
let particles = [];
let numParticles = 40;
var songLabel;
var angle = 0;
var r = 10;
var orbitCenterX = 300;
var orbitCenterY = 300;
var orbitRadius = 45;
var angle2 = 3;
var speed = 0.05;
var spin = 0.2;
var grow = spin * 2;
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var target1X; 
var target1Y; 
var target1Size = 100;

var clicked = false;
var clickDirection;
let points1 = [];
let points2 = [];
let brain;
let poseLabel = '';

function preload() {
  song = loadSound('assets/flute.wav');
  air = loadImage('assets/air.PNG');
  earth = loadImage('assets/Earth.PNG');
  water = loadImage('assets/water.PNG');
  fire = loadImage('assets/Fire.PNG');
  spritesheet = loadImage('assets/fuego.jpg');
}

function setup() {
  target1X = random(width);
  target1Y = random(400);
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  song.loop();
  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  const modelInfo = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin',
  };
  brain.load(modelInfo, brainLoaded);
}

function brainLoaded() {
  console.log('pose classification ready!');
  setTimeout(classifyPose, 7500);
  }

function classifyPose() {
  
  console.log('wait');
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    brain.classify(inputs, gotResult);
  } else {
    setTimeout(classifyPose, 7500);
  }
}

function gotResult(error, results) {
  
  if (results[0].confidence > 0.75) {
    poseLabel = results[0].label.toUpperCase();
    
  }
  
  points1.splice(0, points1.length);
  points2.splice(0, points2.length);
  setTimeout(classifyPose, 7500);
}


function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  
  push();
  translate(video.width, 0);
  scale(-1, 1);
  image(video, 0, 0, video.width, video.height);
  if (pose) {
    
    if (poseLabel == "F") {
      
   imageMode(CENTER);
  image(fire, 250, 300, 75, 75);
    
  }
  if (poseLabel == 'W') {
    
   imageMode(CENTER);
  image(water, 250, 300, 75, 75);
  }
    if (poseLabel == 'A') {
      
     imageMode(CENTER);
  image(air, 250, 300, 75, 75);
  }
    
  if (poseLabel == 'E') {
     
   imageMode(CENTER);
  image(earth, 250, 300, 75, 75);
  }
  
  }
  pop();
  fill(0);
  textSize(35);
  text("air",535,110)
  fill(0,0,255);
  text("water",135, 110);
  fill(255,0,0);
  text("fire", 410,110);
  fill(0,255,0);
  text("earth", 285, 110);
  image(air,500, 10, 75, 75);
  image(water, 100,10,75,75);
  image(earth, 250, 10, 75, 75);
  image(fire, 375,10,75,75);
  
  fill(255, 0, 255);
  noStroke();
  textSize(112);
  textAlign(CENTER, CENTER);
  text(poseLabel, 50, 50);




}
function hitTarget(particles) {
	return (dist(pose.keypoints[9].position.x, pose.keypoints[9].position.y, target1X, target1Y) < target1Size || dist(pose.keypoints[10].position.x, pose.keypoints[10].position.y, target1X, target1Y) < target1Size);
}
