class Attractor {
  
  constructor(x,y,m) {
    this.pos = createVector(x,y)
    this.mass = m
    this.r = sqrt(this.mass)*0.8
  }
  
  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos)
    let distanceSq = constrain(force.magSq(), 1000, 100)
    let G = 20
    let strength = G * (this.mass * mover.mass) / distanceSq
    force.setMag(strength)
    mover.applyForce(force)
  }
  
  
  show() {
    stroke(random(0,250))
    strokeWeight(random(1,10))
    
    fill(4,39,0,98)
   
    ellipse(this.pos.x, this.pos.y, this.r*(random(1, 5)))  
  
  }
}