class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.random3D()
    this.vel.mult(2)
    this.acc = createVector(0, 0)
    this.mass = m
    this.r = sqrt(this.mass) * random(0.8, 5)
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acc.add(f)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  }

  show() {
    stroke(255)
    strokeWeight(random)
   // blendMode(SCREEN)
   // fill(random(0,100, 50, 50, 98))
    fill(34, 1, 1)
    ellipse(this.pos.x, this.pos.y, this.r * 2)

    
  }
}