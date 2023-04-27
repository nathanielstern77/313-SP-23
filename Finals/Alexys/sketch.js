let img, pixel, pixel2, x=0,y=0
function preload() {
  img=loadImage('assets/screamingfrog.jpg')
}

function setup() {
  // put setup code her
  createCanvas(windowWidth, windowHeight);

  x= 0
  image(img,0,0,width,height)
}

function draw() {
  pixel=get(x,y,x+5,y+5)
  pixel2=get(x+1,100)
set(x+5,y,pixel)

//console.log(r,g,b)
  //set(x+1,100,r,g,b)
  //updatePixels()
  //console.log(pixel[1])
  //console.log(pixel2)
  //x+=102
  //if(x>width){x=0
  //y+=10}
  
  text('ribbet', random(width-5), random(height-5))
  if(y>height){y=10}
}
