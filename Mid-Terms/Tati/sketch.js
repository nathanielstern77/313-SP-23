let vid
let movers = []
let attractor
//let switch
let video
let pose
let poseNet
  
function preload(){
  vid = createVideo('switch_bitch.mov')
}

function setup() {
  createCanvas(1280, 720)
  frameRate(10)
  vid.loop()
  vid.hide()
  video = createCapture(VIDEO)
  video.hide()
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)
  for (let i = 0; i < 10; i++) {
    let x = random(width)
    let y = random(height)
    let m = random(50, 150)
    movers[i] = new Mover(x, y, m)
  }
  function gotPoses(poses) {
 //onsole.log(poses)
  if (poses.length>0){
    pose = poses[0].pose
  }
}
function modelLoaded(){
  console.log('poseNet ready')
}
  attractor = new Attractor(width / 2, height / 2, 100)
  background(0,0,0,60)
}

function draw() {
  image(vid, 0, 0, 1080, 720)
  tint(255, 122)
  blendMode(SCREEN)
  image(video, 0, 0, 1080, 720)
  tint(255, 127)
  filter(INVERT)
  filter(POSTERIZE,8.5)
 //background(0)
  for (let mover of movers) {
    mover.update()
    mover.show()
    attractor.attract(mover)
    
  }
  
  if (pose){
  if (keyIsPressed) {
    attractor.pos.x = pose.leftWrist.x
    attractor.pos.y = pose.leftWrist.y
  }
  }
  attractor.show()
  
}