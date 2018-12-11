var currentScene;

var drawScene1 = function() {
    currentScene = 1;
    background(180, 250, 247);
    noStroke();
    fill(106, 209, 46);
    ellipse(360,380,5007,259);
    fill(255, 234, 0);
    ellipse(21,35,100,100);
    fill(0, 0, 0);
    rect(141,122,150,60);
    fill(255, 255, 255);
    textSize(45);
    text("Start", 161,165);
    
   
};

var drawScene2 = function() {
    currentScene = 2;
        background(180, 250, 247);
noStroke();
var x= 146;
var y=105;
var x2=122;
var y2=149;
fill(67, 184, 0);
ellipse(207,348,498,210);
fill(240, 240, 240);
rect(111,74,232,293);
fill(0, 0, 0);
textSize(30);
text("Instructions",x,y);
textSize(11);
text("Avoid obsticles in each stage.",x2-5,y+35);
text("You must do math problem if level not passed",x2-7,y2+31);
text("If level completed, collect points and move on.",x2-8,y2+73);
fill(0, 0, 0);
rect(176,284,87,40);
fill(250, 250, 250);
textSize(16);
text("Okay",x+53,y+203);
fill(255, 255, 0);
ellipse(26,43,109,109);
};

var drawScene3 = function() {
    currentScene = 3;
    background(180, 250, 247);
    noStroke();
    fill(67, 184, 0);
    rect(2,236,1390,1400);
    fill(255, 255, 0);
    ellipse(20,20,100,100);
    fill(240, 240, 240);
    rect(29,92,150,200);
    rect(231,92,150,200);

    
};
var drawScene4 = function(){
   currentScene = 4;
    
       var redfire = function (x,y){
 this.x = x;
 this.y=y;
 };
 
 
 
 redfire.prototype.move = function(x,y){
 fill(255, 0, 0);
 rect(x, y + 358, 75, 270); 
 };
 
 //object of lava
 var lava = [];
 var ground= [];
 
 
 for (var k = 0; k < 50; k++) {
     lava.push (158*k);
 }
 
 for (var j = 0; j <50; j ++) {
  ground.push (158*j);   
 }
 
 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           this.lava = 0;
           
   
};
 
 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (mouseX, mouseY);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 5;  
};

 var high = 20;

draw= function() {
      noStroke();
    background(0, 30, 46);
   
//array of lava
    for (var i = 0; i < lava.length; i++) {
        fill(189, 24, 24);
   rect(lava[i], height*0.9, 45, 40);
   lava[i] -= 1;
    }
    
    //array of ground
    
    for (var i = 0; i < ground.length; i++) {
     fill(41, 17, 7);
     rect(ground[i], height * 0.9, -116, 40);
     ground[i] -=1;
    }
    
   
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();
   
   //orange obsticles
  fill(255, 132, 0);



};
};

var drawScene5= function(){
    currentScene = 5;
    background(255, 0, 0);
    fill(0, 0, 0);
    rect(200,100,100,100);
};

var x=0;
var y=0;

mouseClicked = function() {
    if (currentScene === 1 ) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    } else if (currentScene === 4){
        drawScene5();
    } else if (currentScene === 5){
        drawScene1();
    }
     
};

drawScene1();
//drawScene2();

