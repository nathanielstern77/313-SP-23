let mysound
let mysound2


function setup() {
  // put setup code here
  createCanvas(500, 500);
  background('white')
}

function draw() {
  // put drawing code here
}

function mousePressed() {

  if (mouseX<width/2){

  if (mysound.isPlaying()) {
    // .isPlaying() returns a boolean
    mysound.stop();
    background(255, 0, 0);
  } else {
    mysound.play();
    background(0, 255, 0);
  }}

else {
  if (mysound2.isPlaying()) {
    // .isPlaying() returns a boolean
    mysound2.stop();
    background(255, 0, 0);
  } else {
    mysound2.play();
    background(0, 255, 0);
  }
}

}
