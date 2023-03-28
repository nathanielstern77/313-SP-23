let numCols = 25;
let numRows = 25;
let cellWidth, cellHeight;
let img;
function preload() {
 img = loadImage('IMG_9162.jpg');}

function setup() {
  createCanvas(400, 400);
  cellWidth = width / numCols;
  cellHeight = height / numRows;
  frameRate(30)
  
}

function draw() {
  background(random(50),random(50),random(50))
  blendMode(DIFFERENCE)
  image(img,0,0,400,400)
  
  
  
  // Generate random circle sizes and colors for each cell
  let sizes = [];
  let colors = [];
  for (let i = 0; i < numCols * numRows; i++) {
    sizes.push(random(cellWidth / 2, cellWidth));
    colors.push(color(random(255), random(255), random(255), random(200, 255)));
  }

  // Draw circles in a grid pattern
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      let index = x + y * numCols;
      let centerX = x * cellWidth + cellWidth / 2;
      let centerY = y * cellHeight + cellHeight / 2;
      let size = sizes[index];
      let color = colors[index];

      // Draw circle with random size and color
      noStroke();
      fill(color);
      ellipse(centerX, centerY, size, size);

      // Add animation by slightly changing the size of the circles over time
      sizes[index] += random(-0.5, 0.5);
    }
  }
}

