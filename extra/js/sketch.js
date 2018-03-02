var array = []
var inc = 0.0035
var start = 0
var count = 0;
var randomNumber = 150;
var yoff = 0.0

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 75; i++) {
    array.push(new makeDots())
  }
}
function draw() {
  background(30,30,30)
  for (var i = 0; i < array.length; i++) {
    if(count % 40 < 10){
      fill(220)
    }
    else{
      fill(170)
    }

    array[i].display()
    array[i].move()
    for(var j =0;j<array.length;j++){
      var dista = dist(array[i].x,array[i].y,array[j].x,array[j].y)
      var distaMOUSE = dist(mouseX,mouseY,array[j].x,array[j].y)
      if(dista  <= 50){
        var a = map(dista, 0, 60, 255,0)
        stroke(100,100,100,70)
        line(array[i].x,array[i].y,array[j].x,array[j].y)
      }
    }
    }
}
function mouseClicked(){
  randomNumber = random(100,250)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function makeDots(){
  var mult = 1;
  this.x = random(windowWidth)
  this.y = random(windowHeight)
  this.diameter = random(3,6)
  this.sizeX = 0.002 * windowWidth
  this.sizeY = 0.0035 * windowHeight

  this.display = function(){
    noStroke()
    fill(random(255),random(255),random(255))
    ellipse(this.x,this.y,this.diameter,this.diameter)
  }

  var xVelocity = random(-1,1);
  var yVelocity = random(-1,1);
  this.velocity = 5;

  this.move = function(){
    this.y +=  yVelocity
    this.x +=  xVelocity
    if(this.x >= windowWidth || this.x <= 0){
      xVelocity *= -1;
    }
    if(this.y >= height || this.y <= 0){
      yVelocity *= -1;
    }
  }
}
