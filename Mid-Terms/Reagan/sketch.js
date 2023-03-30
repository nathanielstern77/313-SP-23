let drums, stick,stickx,sticky
function preload() {

  bottom=loadSound('sticks.mp3')
  //cymb=loadSound('Cymb.mp3')
drum=loadSound('drum.mp3')
  drums = loadImage('blink .jpg')
  stick = loadImage('Stick.png')
//  let img2= stick
} 
let xSpeed, xAxis, ySpeed, yAxis
function setup() {
 createCanvas(600,600)
textAlign(CENTER)
 frameRate(20)
 //imageMode(CENTER)
   xSpeed = 10 // how many pixels to travel
  xAxis = random //where to start stick
  sticky = -10
  stickx = random(width)
  //ySpeed= -10
}

  function draw() {
 //   noLoop()
    background(8,39,245);
 image(drums,1,1,width,height)
  image(stick,stickx,sticky)
    sticky=sticky+15
    if(sticky>height){
      sticky=-10
      stickx = random(width)
    }
    if(sticky>550){
     bottom.play()
    }
//if(stickx=300,sticky=300) 
 //drum.play()
  //  if(299<stickx<301, 299<sticky<301){
   //  drum.stop()
  //  }
 

 // if (stick(255,300,0){
    // .isPlaying() returns a boolean
   // drum.play()
   //   }
 }


