//I want the elipses to be different colors, instead of each elipse being the same
//Ideally I'd like the elipses to appear on beat or something but I don't mind it as is

let song;
let fft;
let ellipseList = [];

function preload() {
  // Load your sound file here
  song = loadSound('assets/1.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  colorMode(HSB, 360, 100, 100, 5);
  fft = new p5.FFT();
  song.play();
}

function draw() {
  background(0, 0.1);
  let spectrum = fft.analyze();
  let amp = fft.getEnergy("bass");
  let hue = random(200, 280);
  let saturation = random(50, 80);
  let brightness = map(amp, 0, 255, 20, 80);
  strokeWeight(4)
  stroke(hue, saturation, brightness);

  // Add a new ellipse to the list every 15 frames
  if (frameCount % 15 == 0) {
    let x = random(width);
    let y = random(height);
    let size = map(amp, 0, 255, 10, 100);
    ellipseList.push({
      x: x,
      y: y,
      size: size
    });
  }

  // Draw all the ellipses in the list
  for (let i = 0; i < ellipseList.length; i++) {
    let ellipseObj = ellipseList[i];
    ellipseObj.size += 0.5;
    if (ellipseObj.size > 300) {
      ellipseList.splice(i, 1);
    } else {
      noFill();
      ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.size);
    }
  }

  // If the song ends, stop the sound and exit the sketch
  if (song.isPlaying() == false) {
    song.stop();
    noLoop();
  }
}
