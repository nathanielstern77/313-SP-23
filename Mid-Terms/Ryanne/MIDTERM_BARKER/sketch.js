let noiseScale=0.02;
let xoff = 0.0;
let yoff =0.0


function setup(){
  createCanvas (windowWidth,windowHeight)
}

function draw() {
  background(0,0,0);
 //fill(100, 30, 50, 30)
  for (let x=0; x < width; x++) {
    
    let noiseVal = noise((mouseX+x)*noiseScale,mouseY*noiseScale);
    
    stroke(noiseVal*55, noiseVal*60, noiseVal*200, noiseVal*80);
    
    line(x*2, mouseY+noiseVal*100, x, height*-4);
    line(x*2, mouseY+noiseVal*-200, x+3, height*2);
    line(x*2, mouseY+noiseVal*-100, x-3, height*4);
    line(x*2, mouseY+noiseVal*200, x, height*-2);
    
    
    //line(mouseX+noiseVal*90, x, height*-1, x)
   // line(mouseX+noiseVal*70, x, height, x)
    
    describe(`horizontal wave pattern effected by mouse x-position
    & updating noise values.`);
    
      xoff = xoff + .001;
      yoff = yoff +.001
  let n = noise(xoff) * width;
  let m = noise(yoff) * height
  
   stroke(noiseVal*255, noiseVal*10, noiseVal*100, 50);
  line(width/2, height/2, mouseX+random(100), mouseY+random(100))
  
   // stroke(noiseVal*255, noiseVal*255, noiseVal*30, 50);
  line(width/4, height/4, mouseX+random(100)-(width/4), mouseY+random(100)-(height/4))
  
   // stroke(noiseVal*255, noiseVal*10, noiseVal*30, 50);
  line(3*(width/4), height/4, mouseX+random(100)+(width/4), mouseY+random(100)-(height/4))
  
   // stroke(noiseVal*255, noiseVal*10, noiseVal*30, 50);
  line(width/4, 3*(height/4), mouseX+random(100)-(height/4),mouseY+random(100)+(height/4))
  
  //  stroke(noiseVal*255, noiseVal*10, noiseVal*30, 50);
  line(3*(width/4), 3*(height/4), mouseX+random(100)+(width/4), mouseY+random(100)+(height/4))

    
  //line(0, n, n, height*2) 
  //line(n, n, 0, height*-1) 
  describe(`vertical line moves left to right with updating
    noise values.`);
    
  }
  
}
