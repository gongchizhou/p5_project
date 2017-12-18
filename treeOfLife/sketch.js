
new p5();

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	translate(windowWidth/2,windowHeight);
	//grow(100);
	branch(0,80,windowHeight/5,-Math.PI/2,13,15);
	noLoop();
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

function branch(startX,startY,len,theta,depth,branchWidth){
	var endX,endY;
	if(depth <=3){
		stroke('#27ae60');
	}else{
		stroke('#fff');
	}
	strokeWeight(len*0.03);
	endX = startX + len*Math.cos(theta);
	endY = startY + len*Math.sin(theta);
	line(startX,startY,endX,endY);

	//translate(0,0,len*Math.cos(theta),len*Math.sin(theta));
	depth -= 1;
	branchWidth *= 0.66;
	if(!depth){
		return;
	}
	for(var i=0; i<Math.random() * 3 + 1; i++){
		len *= 0.66 + Math.random()*0.33;
		theta += Math.PI/2*(Math.random() -0.5);
		//push();
		branch(endX,endY,len,theta,depth,branchWidth);
		//pop();

	}
	
}

function mousePressed(){
	background(0);
	branch(0,80,windowHeight/5,-Math.PI/2,13,15);
}

function 	touchStarted(){
	background(0);
	branch(0,80,windowHeight/5,-Math.PI/2,13,15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}