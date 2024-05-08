//The setup function only happens once
var choco=0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas 
background(227, mouseX, 212);}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,25,127); // an RGB color for the circle's border
  strokeWeight(4);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),50,50); //center of canvas, 20px dia
  fill(230, 73, 193);
  strokeWeight(5);
  rect(100,300,choco,choco);
  
  strokeWeight(3);
  stroke(choco,250,choco);
  line(80,80,200,mouseX);
}
function mousePressed(){
	if (choco>=255){
		choco=0
	}else{
		choco=choco+8;
	}
	
}
  


