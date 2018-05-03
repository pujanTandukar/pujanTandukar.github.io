function stars(){
  var mult = 1;
  this.x = random(-windowWidth,windowWidth)
  this.y = random(-windowHeight,windowHeight)
  this.sizeX = 0.002 * windowWidth
  this.sizeY = 0.0035 * windowHeight

  this.display = function(){
    noStroke()
    // fill(255,1,1)
    quad( this.x , this.y , this.x - this.sizeX , this.y + this.sizeY, this.x, this.y - this.sizeY - 1.2, this.x + this.sizeX , this.y + this.sizeY)
    triangle(this.x, this.y , this.x - this.sizeX , this.y - (this.sizeY/2), this.x + this.sizeX , this.y - (this.sizeY/2) )
    // ellipse(this.x,this.y,1,1)
  }
  //
  // var xVelocity = random(-1,1);
  // var yVelocity = random(-1,1);
  // this.velocity = 5;

  this.move = function(){
    // this.y += (mult * sin(random(TWO_PI))) + yVelocity
    // this.x += (mult * cos(random(TWO_PI))) + xVelocity
    this.x += mult * cos(random(TWO_PI))
    this.y += mult * sin(random(TWO_PI))

    // if(this.x >= windowWidth || this.x <= 0){
    //   xVelocity *= -1;
    // }
    // if(this.y >= height || this.y <= 0){
    //   yVelocity *= -1;
    // }
  }
}
