let video;
let poseNet;
let pose;
let invertBackground = false;
let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  frameRate(60);
  mic = new p5.AudioIn(); // Create an AudioIn object
  mic.start(); // Start capturing audio from the microphone
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}


function draw() {
  //image(video, 0, 0,windowWidth,windowHeight);

  noFill();
  colorMode(HSB,100) 
 blendMode(HARD_LIGHT);
  let scaleFactor = min(windowWidth / video.width, windowHeight / video.height);
  let scaledW = (video.width *scaleFactor)*1.4;
  let ScaledH = video.width * scaleFactor;
 
  let level = mic.getLevel();
  console.log(level)


  
if(level>0.05) {
  invertBackground = !invertBackground;
 stroke(random(0,70),random(40,100),random(50,60));
  filter(INVERT);
   }
    
   if (invertBackground) {
    blendMode(HARD_LIGHT); // Reset blend mode
    background(0,3); // Set background
  } else {
    background(255,3); // Set background
  }



  beginShape();
  curveVertex(windowWidth*0.1, windowHeight*0.5);
  curveVertex(windowWidth*0.1, windowHeight*0.5);
  
  if (level > 0.07) {
  //if (mouseIsPressed) {
    strokeWeight(random(5,30));
    curveVertex(random(0,width),random(0,height));
    curveVertex(random(0,width),random(0,height));
    curveVertex(random(0,width),random(0,height));
  
  } else if (pose) {
 //stroke dependant on proximity to camera
 let d = (dist(pose.rightEye.x, pose.rightEye.y, pose.leftEye.x, pose.leftEye.y))*12;
strokeWeight(0.05* d);

//big line stuff
//face
curveVertex(pose.leftEar.x * scaleFactor,pose.leftEar.y * scaleFactor);
curveVertex(pose.rightEar.x * scaleFactor,pose.rightEar.y * scaleFactor);
//left arm
curveVertex((pose.leftShoulder.x * scaleFactor)-100,pose.leftShoulder.y * scaleFactor);
curveVertex(pose.leftElbow.x * scaleFactor,pose.leftElbow.y * scaleFactor);
curveVertex(pose.leftWrist.x * scaleFactor,pose.leftWrist.y * scaleFactor);
curveVertex((pose.leftElbow.x * scaleFactor)-50,pose.leftElbow.y * scaleFactor);
curveVertex(pose.leftShoulder.x * scaleFactor,pose.leftShoulder.y * scaleFactor);
//right leg
curveVertex(pose.rightHip.x * scaleFactor,pose.rightHip.y * scaleFactor);
curveVertex(pose.rightKnee.x * scaleFactor,pose.rightKnee.y * scaleFactor);
curveVertex(pose.rightAnkle.x * scaleFactor,pose.rightAnkle.y * scaleFactor);
curveVertex(pose.rightKnee.x * scaleFactor,pose.rightKnee.y * scaleFactor);
curveVertex(pose.rightHip.x * scaleFactor,pose.rightHip.y * scaleFactor);
//left leg
curveVertex(pose.leftHip.x * scaleFactor,pose.leftHip.y * scaleFactor);
curveVertex(pose.leftKnee.x * scaleFactor,pose.leftKnee.y * scaleFactor);
curveVertex(pose.leftAnkle.x * scaleFactor,pose.leftAnkle.y * scaleFactor);
curveVertex(pose.leftKnee.x * scaleFactor,pose.leftKnee.y * scaleFactor);
curveVertex(pose.leftHip.x * scaleFactor,pose.leftHip.y * scaleFactor);
//right arm
curveVertex((pose.rightShoulder.x * scaleFactor)-100,pose.rightShoulder.y * scaleFactor);
curveVertex(pose.rightElbow.x * scaleFactor,pose.rightElbow.y * scaleFactor);
curveVertex(pose.rightWrist.x * scaleFactor,pose.rightWrist.y * scaleFactor);
curveVertex((pose.rightElbow.x * scaleFactor)-50,pose.rightElbow.y * scaleFactor);
curveVertex(pose.rightShoulder.x * scaleFactor,pose.rightShoulder.y * scaleFactor);
//end point

}
curveVertex(windowWidth*0.9, windowHeight*0.5);
curveVertex(windowWidth*0.9, windowHeight*0.5);
endShape(); 
}