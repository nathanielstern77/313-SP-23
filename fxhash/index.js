console.log("hash")
console.log(fxhash)
console.log("fxrand call")
console.log(fxrand())
//random functions
function R(){return fxrand()} //random 0.-1.
function RN(a,b){return a+(b-a)*fxrand()} //number between
function RI(a,b){return Math.floor(RN(a,b+1))} //integer between, inclusive
function RB(p){return fxrand()<p*.01} // probability boolean
function RL(list){return list[RI(0,list.length-1)]} // random from list

console.log("my random tests")
console.log(R())
console.log(RN(1,100))
console.log(RI(1,100))
console.log(RB(30))
console.log(RL([5,10,15]))

//set 1:1 ratio and 1000 as default
let DEFAULT_SIZE = 1000,
 WIDTH = window.innerWidth,
 HEIGHT = window.innerHeight,
 DIM = Math.min(WIDTH, HEIGHT),
 M = DIM / DEFAULT_SIZE

 function setup() {
 frameRate(20)
 var canvas = createCanvas(DIM, DIM);
textAlign(CENTER,CENTER)
}

function draw() {
  background(0)
  fill(255)
  textSize(DIM*.1)
  text("hello fx(hash)",0,0,DIM,DIM)
  noLoop()
}
