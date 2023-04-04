let lyricsData
let song
let words = [] //Creating words array//
let songStarted = false; //This was made because my song wasn't starting when a user clicked the music for the first time I implemented this from research on stackoverflow and the creative coding blog

function preload() {
  let index = Math.floor(Math.random() * 2) + 1; // Choose a random song between the two and by changing the 2 I can determine which song I want to select & help from gpt
  // Loading the strings that are in the lyrics folder
  lyricsData = loadStrings(`assets/lyrics/lyrics${index}.txt`)
  // Loading the songs that are in the songs folder
  song = loadSound(`assets/mp3/song${index}.mp3`) //help from the creative coding blog
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textSize(20)

  for (let i = 0; i < lyricsData.length; i++) {
    let parts = lyricsData[i].split(' ') //Splitting the lyrics within the text file by spaces to form single words//
    let time = parseFloat(parts[0]) //The timestamp (first part) and convert it to a float
    let word = parts.slice(1).join(' ') //Takes the word (remaining parts) and joins them back together

    words.push({time: time, word: word})
  }
}

function draw() {
  background(240)

  // Centering the text 
  let x = windowWidth/(2.5)
  let y = windowHeight/2


  for (let i = 0; i < words.length; i++) { //Goes through the words array
    let word = words[i].word //Get words from word array
    let w = textWidth(word) + 20 //I believe this selects the size of the words based on pixels so if I increase the 10 it will have a greater area of selection

    // See if the mouse is hovering over the current word
    if (mouseX > x && mouseX < x + w && mouseY > y - 20 && mouseY < y) { //help from gpt
      fill(random(128), 128, random(50, 128))
      if (mouseIsPressed) {
        if (!songStarted) {
          songStarted = true
          song.play()
          //loop()
        }
        song.jump(words[i].time)//Goes to the timestamp
      }
    } else {
      fill(0) //color fill
    }

    text(word, x, y)
    x += w
  }
}