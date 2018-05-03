var count = 0
var sun, mercury, venus, earth, mars, moon, jupiter, saturn, neptune, uranus, gany, callisto, io, europa, titan, phobos, deimos, titiana, oberon, umbriel, ariel, triton, charon, pluto;
var randomV
var eSpeed
var starArray = []
var sS = 0

function preload(){
  //loading images
  sun = loadImage("img/sun.jpg");
  mercury = loadImage("img/mercury.jpg");
  venus = loadImage("img/venus.jpg");
  earth = loadImage("img/earth.jpg");
  mars = loadImage("img/mars.jpg");
  jupiter = loadImage("img/jupiter.jpg");
  saturn = loadImage("img/saturn.jpg");
  uranus = loadImage("img/uranus.jpg");
  neptune = loadImage("img/neptune.jpg");
  moon = loadImage("img/moon.jpg");
  gany = loadImage("img/gany.jpg");
  io = loadImage("img/io.jpg");
  europa = loadImage("img/europa.jpg");
  callisto = loadImage("img/callisto.jpg");
  titan = loadImage("img/titan.jpg");
  deimos = loadImage("img/deimos.jpg");
  phobos = loadImage("img/phobos.jpg");
  umbriel = loadImage("img/umbriel.jpg");
  ariel = loadImage("img/ariel.jpg");
  titiana = loadImage("img/titiana.jpg");
  oberon = loadImage("img/oberon.jpg");
  triton = loadImage("img/triton.jpg");
  charon = loadImage("img/charon.jpg");
  pluto = loadImage("img/pluto.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)
  // perspective(width*3, 200, 0, 10000)
  ellipseMode(CENTER)
  rectMode(CENTER)
  //stars
  for (var i = 0; i < 250; i++) {
    starArray.push(new stars())
  }
  // ambientLight(200,200,200); //even red light across our objects
}

function draw() {
  background(15)
  eSpeed=count/2
  scale(.6)

  //sun
  push()
    rotateY(count);
    texture(sun)
    sphere(60)
  pop()

  for (var i = 0; i < starArray.length; i++) {
    fill(100)
    starArray[i].display()
    // starArray[i].move()
  }

//-----------------------------------------------------------------//

  //mercury
  push()
    rotate(eSpeed*4, [0,1,1])
    translate(80,0,0)
    rotateY(eSpeed*0.3)
    rotateX(eSpeed*0.3)
    texture(mercury)
    sphere(10)
  pop()

//-----------------------------------------------------------------//

  //venus
  push()
    rotate(eSpeed*1.7, [0,1,1])
    translate(120,0,0)
    rotateY(eSpeed*0.7)
    rotateX(eSpeed*0.7)
    texture(venus)
    sphere(17)
  pop()

//-----------------------------------------------------------------//

  //earth
  push()
    //earth
    rotate(eSpeed, [0,1,1])
    translate(200,0,0)
    rotateZ(count/2)
    texture(earth)
    sphere(18)
    //moon
    push()
      rotate(count/1.5, [0,1,1])
      rotateY(sS)
      translate(35,0,0)
      texture(moon)
      sphere(5)
    pop()
  pop()

//-----------------------------------------------------------------//

  //mars
  push()
    //mars
    rotate(eSpeed/1.5, [0,1,1])
    translate(300,0,0)
    rotateX(count)
    texture(mars)
    sphere(9)
    //Phobos
    push()
      rotate(count/1.5, [0,1,1])
      rotateY(count*2)
      translate(20,0,0)
      texture(phobos)
      sphere(3)
    pop()
    //Deimos
    push()
      rotate(count/1.5, [0,1,1])
      rotateZ(sS*2)
      translate(30,0,0)
      texture(deimos)
      sphere(3)
    pop()
  pop()

//-----------------------------------------------------------------//

  //jupiter
  push()
    //jupiter
    rotate(eSpeed/3, [0,1,1])
    translate(400,0,0)
    rotateY(count/2)
    rotateX(count/2)
    // rotateZ(count)
    texture(jupiter)
    sphere(26)
    //IO
    push()
      rotate(sS/1.5, [0,1,1])
      rotateY(sS*3)
      translate(35,0,0)
      rotateX(count)
      texture(io)
      sphere(4.5)
    pop()
    //Europa
    push()
      rotate(count/1.5, [0,1,1])
      rotateY(sS*1.7)
      translate(50,0,0)
      texture(europa)
      sphere(3.5)
    pop()
    //Ganymede
    push()
      rotate(count/1.5, [0,1,1])
      rotateZ(sS*2.3)
      translate(65,0,0)
      texture(gany)
      sphere(5.5)
    pop()
    //callisto
    push()
      rotate(count/1.5, [0,1,1])
      rotateX(sS*1.2)
      translate(80,0,0)
      texture(callisto)
      sphere(5.2)
    pop()
  pop()

//-----------------------------------------------------------------//

  //saturn
  push()
    //saturn
    rotate(eSpeed/4, [0,1,1])
    translate(500,0,0)
    rotateX(count/2)
    rotateY(count/2)
    texture(saturn)
    sphere(24)
    cone(50, 1, 100)
    //titan
    push()
      rotate(count/1.5, [0,1,1])
      rotateX(20)
      translate(80,0,0)
      texture(titan)
      sphere(5.3)
    pop()
  pop()

//-----------------------------------------------------------------//

  //uranus
  push()
    //uranus
    rotate(eSpeed/5, [0,1,1])
    translate(600,0,0)
    texture(uranus)
    sphere(21)
    //ariel
    push()
      rotate(count/1.5, [0,1,1])
      rotateX(count/2)
      translate(30,0,0)
      texture(ariel)
      sphere(3)
    pop()
    //umbriel
    push()
      rotate(count/1.5, [0,1,1])
      rotateZ(sS/3)
      translate(45,0,0)
      texture(umbriel)
      sphere(3.2)
    pop()
    //titiana
    push()
      rotate(count/1.5, [0,1,1])
      rotateY(count/3)
      translate(60,0,0)
      texture(titiana)
      sphere(3.4)
    pop()
    //oberon
    push()
      rotate(count/1.5, [0,1,1])
      rotateY(count*4)
      translate(65,0,0)
      texture(oberon)
      sphere(4)
    pop()
  pop()

//-----------------------------------------------------------------//

  //neptune
  push()
    //neptune
    rotate(eSpeed/6, [0,1,1])
    translate(700,0,0)
    texture(neptune)
    sphere(20)
    //triton
    push()
      rotate(count/1.5, [0,1,1])
      translate(30,0,0)
      rotateX(sS)
      rotateY(sS*2)
      rotateZ(sS/2)
      texture(triton)
      sphere(5)
    pop()
  pop()

//-----------------------------------------------------------------//

  //pluto
  push()
    //pluto
    rotate(eSpeed/7, [0,1,1])
    translate(800,0,0)
    texture(pluto)
    sphere(5)
    //charon
    push()
      rotate(count/1.5, [0,1,1])
      translate(20,0,0)
      rotateX(sS)
      rotateY(sS*2)
      rotateZ(sS/2)
      texture(charon)
      sphere(2)
    pop()
  pop()

  //-----------------------------------------------------------------//
  count+=0.01
  eSpeed=count
  sS += 0.005
}
