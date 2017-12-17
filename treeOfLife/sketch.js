
new p5();

var tree;
function setup(){
	createCanvas(windowWidth, windowHeight);
	tree = new Tree(100); 
}

function draw(){
	background(0);
	stroke(255);
	translate(windowWidth/2,windowHeight);
	//tree.grow();
	grow(100);
}
function grow(len){
	if('ontouchstart' in window){
		var theta = map(touchX,0,windowWidth,0,Math.PI/2);
		//var theta = Math.PI/6
	}else{
		var theta = map(mouseX,0,windowWidth,0,Math.PI/2);
	}
	line(0,0,0,-len);
	translate(0,-len);
	len *= 0.66;
	if(len > 2){
		push();
		rotate(theta);
		grow(len);
		pop();

		push();
		rotate(-theta);
		grow(len);
		pop();
	}
}
class Tree{
	constructor(len){
		this.len = len;
		this.theta = Math.PI/6;
	}

	grow(){
		if('ontouchstart' in window){
			this.theta = map(touchX,0,windowWidth,0,Math.PI/2);
		}else{
			this.theta = map(mouseX,0,windowWidth,0,Math.PI/2);
		}
		line(0,0,0,-this.len);
		translate(0,-this.len);
		this.len *= 0.66;
		if(this.len > 2){
			push();
			rotate(this.theta);
			this.grow(this.len);
			pop();
	
			rotate(-this.theta);
			this.grow(this.len);
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}