//let img, pixel, pixel2, x=0,y=0
function preload() {
  //img=loadImage('screamingfrog.jpg')
}

function setup() {
  // put setup code her
  createCanvas(windowWidth, windowHeight);

  x= 0
  image(img,0,0,width,height)
}

function draw() {
  fill(255,200,7)
  background(220,5);

  x+=102
  if(x>width){x=0
  y+=10}
  
  text('ribbet', random(width-5), random(height-5))
  if(y>height){y=10}
}
