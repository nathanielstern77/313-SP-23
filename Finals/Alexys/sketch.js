let mytext=['ugly','dumb','stinky','beautiful','smart','funny','careless','perfect']
let text2=['potato','frank','go']

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
}

function draw() {
  background(255,1)
  fill(1)
  textSize(30)
  textFont("Times New Roman")
  let theWord = randoWord(mytext) //getting a random word from the array I am sending
  let word2 = randoWord(text2)
  let sentence = (theWord)
  let x = random(width-100) // generate a random x coordinate
  let y = random(height-30) // generate a random y coordinate
  text(sentence, x, y)
}

function randoWord(thatlistofwords){
  let ranthing = floor(random(0, thatlistofwords.length)) //checking length of array so I can get the right range of random numbers
  return thatlistofwords[ranthing]
}
