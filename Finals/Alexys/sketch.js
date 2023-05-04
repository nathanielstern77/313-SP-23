let mytext=['keys','wallet','weather?','garbage day','Im hungry','my head hurts','did I take my meds?','im late']
let text2=['potato','frank','go']

let img, pixel, pixel2, x=0,y=0

let photo = []
let numPhoto = 4

function preload(){ 
 //img=loadImage('assets/2.jpg')
 let photo1 = loadImage('assets/1.jpg');
 let photo2 = loadImage('assets/2.jpg');
 let photo3 = loadImage('assets/3.png');
 let photo4 = loadImage('assets/4.png');
 photo = [photo1,photo2,photo3,photo4];
 
 song = loadSound('assets/peopletalking.mp3')
 //song = loadSound('assets/song2.mp3');

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(5) //text rate

  noLoop();
  
  ///image(img,0,0,width,height);

  //image(img, 50, 0);
  
  strokeWeight(8) //for mouse tracker width
  index = round(random(0, 4))
  song.play();
}

function draw() {
  background(255);

  imageMode(CENTER);
  let randoImage = random(photo);
  image(randoImage, width/2, height/2); 
  
  textSize(random(20, 70))
  textFont("Times New Roman")
  fill( random(0,200), random(0,200), random(0,200) )
  let theWord = randoWord(mytext)
  let sentence = (theWord)
  let x = random(width-100)
  let y = random(height-30)
  text(sentence, x, y)
  
  line(mouseX, mouseY, pmouseX, pmouseY);
}


function mousepressed() {
  x += 1;
  refresh();
}
function randoWord(thatlistofwords){
  let ranthing = floor(random(0, thatlistofwords.length)) //checking length of array so I can get the right range of random numbers
  return thatlistofwords[ranthing]
  
}

