// setup runs once when you hit the play button
// anything between the {} "happens" or "is executed"
function setup() {
//functionName(parameters)  can have zero parameters
  createCanvas(400, 400); // calling a function
}

// draw happens continuously after setup happens
// lines happen (are executed) in order
function draw() {
  // TODO 1 change the number below. Maybe several times
  //background(100)
  // this is a comment
  // command/control + slash to comment/uncomment
  // TODO 2a comment out the first background "call" (above)
  // TODO 2b uncomment the second one (below)
  //background(220,160)
  // TODO 3a comment out the second background call
  // TODO 3b uncomment the third one
  background(100,150,187); 
  // what is RGB?
  // how could we pick colors we want?
  // https://www.w3schools.com/colors/default.asp
  rect(10,15,70,90) 
  // why is it located where it is? 
  // why is it the size it is?
  // TODO 4 change the values
  // Here is the P5 reference for shapes: 
  // https://p5js.org/reference/#Shape
  // TODO 5 try square
  square(100,25,51)
  // TODO 6 try ellipse
  ellipse(200,150,86,73)
  // TODO 7 try circle
  circle(300,150,76)
  // TODO 8 try triangle
  triangle(43,150,112,100,100,157)
  // why are the shapes white?
  // why do they have a black border?  
  // TODO 9 uncomment the following two lines
  fill(255,255,0)
  stroke('white')
  rect(100,200,20,100)
  rect(120,240,50,20)
  rect(170,200,20,100)
  rect(200,200,20,100)
  // TODO 10 experiment by combining different things
}