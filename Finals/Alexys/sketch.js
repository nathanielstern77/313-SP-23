let mytext=['dont forget your keys','grab your wallet','what is the weather like?','its garbage day','Im hungry','my head hurts','did I take my meds?','im late']
let text2=['potato','frank','go']

let img, pixel, pixel2, x=0,y=0

function preload(){ 
 song = loadSound('assets/peopletalking.mp3')

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(50,200), random(50,200), random(50,200))

  frameRate(8) //text rate
  
  strokeWeight(8) //for mouse tracker width
  index = round(random(0, 4))
  song.play();
}

function draw() {
textSize(random(20, 70))
  textFont("Times New Roman")
  fill( random(0,200), random(0,200), random(0,200) )
  let theWord = randoWord(mytext) //getting a random word from the array I am sending
  let word2 = randoWord(text2)
  let sentence = (theWord)
  let x = random(width-100) // generate a random x coordinate
  let y = random(height-30) // generate a random y coordinate
  text(sentence, x, y)
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function randoWord(thatlistofwords){
  let ranthing = floor(random(0, thatlistofwords.length)) //checking length of array so I can get the right range of random numbers
  return thatlistofwords[ranthing]
  
}

