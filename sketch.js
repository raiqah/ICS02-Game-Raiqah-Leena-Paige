var currentScene;

//SCENE 1

var drawScene1 = function() {
    currentScene = 1;
    background(180, 250, 247);

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

//SCENE 2

var drawScene2 = function() {
    currentScene = 2;
        background(180, 250, 247);

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

//SCENE 3

var drawScene3 = function() {
    currentScene = 3;
    background(180, 250, 247);
  
    fill(67, 184, 0);
    rect(2,236,1390,1400);
    fill(255, 255, 0);
    ellipse(20,20,100,100);
    fill(240, 240, 240);
    rect(120,92,150,200);
};

//SCENE 4

var drawScene4 = function(){
   currentScene = 4;
    
  var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=2 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(255, 0, 0);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};


 var page = function (){
 
   fill(255, 0, 0);
 rect(185,174,100,100);
background(235, 30, 30);
fill(8, 3, 3);
textSize(30);
text("You touched the red!", 66, 209);
fill(250, 106, 10);
triangle(-6, 352, -68, 405, 7, 421);
triangle(37, 352, 2, 405, 65, 421);
triangle(90, 356, 58, 405, 125, 421);
triangle(148, 356, 118, 405, 190, 421);
triangle(206, 356, 178, 405, 249, 421);
triangle(264, 356, 237, 405, 307, 421);
triangle(330, 356, 299, 405, 369, 421);
triangle(388, 356, 364, 405, 422, 421);
 
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed-=1;
  page();
  
}
};


 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }

 
draw= function() {
    


      
    background(0, 30, 46);
   
fill(84, 37, 2);
 triangle(206, 153,82, 413, 343, 421);
 
 fill(255, 0, 0);
   ellipse(225,200,20,57);
ellipse(207,200,20,57);
 ellipse(189,200,20,57);
fill(0, 30, 46);
 rect(164, 114, 84, 90);
 //stars and moon

fill(229, 240, 82);
ellipse(20,17,10,10); 
ellipse(256,129,34,34); 
ellipse(333,69,13,13); 
ellipse(31,184,13,13); 
ellipse(147,252,4,4);
fill(230, 225, 225);
ellipse(383,-2,120,120);
fill(163, 150, 163);
ellipse(365, 1, 8, 8);
ellipse(383, 14, 14, 14);
ellipse(358, 31, 13, 9);

ellipse(380, 46, 10, 5);




//array of lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }
    

    
    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();


   fill(32, 166, 171);
    textSize(18);
text("Score:", 5, 26);
  

 
    };

};

//SCENE 5

var drawScene5= function(){
    
    currentScene = 5;
    fill(255, 0, 0);
    ellipse(200, 200, 20, 20);
    
    //new scene

      var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=2 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(0, 179, 255);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};
 var page = function (){
 
   fill(255, 0, 0);
 rect(185,174,100,100);
background(235, 30, 30);
fill(8, 3, 3);
textSize(30);
text("You touched the red!", 66, 209);
fill(250, 106, 10);
triangle(-6, 352, -68, 405, 7, 421);
triangle(37, 352, 2, 405, 65, 421);
triangle(90, 356, 58, 405, 125, 421);
triangle(148, 356, 118, 405, 190, 421);
triangle(206, 356, 178, 405, 249, 421);
triangle(264, 356, 237, 405, 307, 421);
triangle(330, 356, 299, 405, 369, 421);
triangle(388, 356, 364, 405, 422, 421);
 
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed-=1;
  page();
  
}
};

 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }


//DRAW FUNCTION
 
draw= function() {
    //new scene

background(0, 153, 255);
 fill(217, 204, 204);
 rect(126, 127, 171, 274);
  rect(44, 247, 94, 245);
  rect(287, 247, 94, 245);

rect(203, 68, 16,60);
fill(255, 0, 174);
triangle (205, 70, 201, 10, 289, 40);
                  
     fill(0, 153, 255);  
noStroke();
rect (101, 244, 20, 20);
rect (61, 244, 20, 20);
rect (308, 244, 20, 20);
rect (344, 244, 20, 20);
fill(0, 255, 30);
ellipse(70, 394, 184, 76);
ellipse(215, 394, 184, 76);
ellipse(393, 394, 184, 76);
fill(247, 255, 0);
ellipse(13, 5, 71, 76);
//array of BLUE lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }

    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();
    };
};

//SCENE 6

var drawScene6 = function (){
    currentScene= 6;
var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=3 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(0, 255, 38);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};


 var page = function (){
 
 fill(87, 240, 135);
 rect(185,174,100,100);
background(39, 245, 39);
fill(8, 3, 3);
textSize(30);
text("You touched the green!", 44, 209);
text("Click anywhere to try harder level", -1, 255);
fill(0, 112, 26);
ellipse(200,356,10,90);
ellipse(218,356,10,90);
ellipse(241,356,10,90);
ellipse(262,356,10,90);
ellipse(288,356,10,90);
ellipse(316,356,10,90);
ellipse(340,356,10,90);
ellipse(368,356,10,90);
ellipse(18,356,10,90);
ellipse(46,356,10,90);
ellipse(178,356,10,90);
ellipse(67,356,10,90);
ellipse(154,356,10,90);
ellipse(133,356,10,90);
ellipse(90,356,10,90);
ellipse(111,356,10,90);
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed=0;
  page();
  
}
};


 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }

 
draw= function() {
    
 background(18, 124, 204);
fill(230, 196, 110);
rect(-2,300,603,244);
fill(46, 217, 31);
ellipse(15,262,10,80);
ellipse(27,263,10,80);
ellipse(39,263,10,80);
ellipse(386,262,10,80);
ellipse(373,262,10,80);
ellipse(361,262,10,80);
noStroke();
fill(255, 0, 0);
triangle(116,175,116,217,179,202);
ellipse(183,200,57,24);
fill(0, 0, 0);
ellipse(204,198,3,4);
fill(195, 53, 230);
triangle(268,96,216,127,212,70);
ellipse(278,95,57,24);
fill(0, 0, 0);
ellipse(297,94,3,4);



//array of lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }
    

    
    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();


   fill(32, 166, 171);
    textSize(18);
text("Score:", 5, 26);
  

 
    };


//SCENE 7

};

var drawScene7 = function(){
currentScene = 7;
};

var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=4 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(202, 40, 235);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};

 var page = function (){
 
 fill(235, 33, 228);
 rect(185,174,100,100);
background(245, 39, 231);
fill(8, 3, 3);
textSize(30);
text("You touched the pink!", 44, 209);
text("Click anywhere to try harder level", -1, 255);
fill(95, 0, 110);
ellipse(200,356,10,90);
ellipse(218,356,10,90);
ellipse(241,356,10,90);
ellipse(262,356,10,90);
ellipse(288,356,10,90);
ellipse(316,356,10,90);
ellipse(340,356,10,90);
ellipse(368,356,10,90);
ellipse(18,356,10,90);
ellipse(46,356,10,90);
ellipse(178,356,10,90);
ellipse(67,356,10,90);
ellipse(154,356,10,90);
ellipse(133,356,10,90);
ellipse(90,356,10,90);
ellipse(111,356,10,90);
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed=0;
  page();
  
}
};


 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }

 
draw= function() {
    

    background(250, 225, 247);
fill(145, 145, 145);
rect(150,70,100,314);
rect(131,20,133,64);
noStroke();
fill(250, 70, 223);
ellipse(244,368,181,100);
ellipse(128,325,181,100);
ellipse(277,294,181,100);
ellipse(116,368,181,100);
ellipse(328,352,181,100);
fill(206, 245, 242);
ellipse(199,135,47,62);




//array of lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }
    
    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();


   fill(32, 166, 171);
    textSize(18);
text("Score:", 5, 26);
  

 
    };

//SCENE 8

var drawScene8 = function() {
    currentScene = 8;
};

var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=5 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(25, 29, 31);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};

 var page = function (){
 
   fill(255, 0, 0);
 rect(185,174,100,100);
background(55, 76, 77);
fill(8, 3, 3);
textSize(39);
text("You touched the black!", 17, 177);
textSize(20);
text("Click anywhere to try harder level", 79, 209);
fill(207, 216, 227);
ellipse(84, 370, 51, 51);
ellipse(139, 370, 51, 51);
ellipse(194, 370, 51, 51);
ellipse(249, 370, 51, 51);
ellipse(305, 370, 51, 51);
ellipse(29, 370, 51, 51);
ellipse(360, 370, 51, 51);
ellipse(417, 370, 51, 51);
 
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed=0;
  page();
  
}
};

 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }

//DRAW FUNCTION
 
draw= function() {
    //new scene
background(97, 85, 85);
fill(41, 38, 38);
rect(104, 399, 222, -230);
rect(295, 75, 20,96);
triangle(104, 171, 207, 20, 327, 171);
fill(61, 58, 58);
rect(141, 200, 40, 40);
rect(250, 200, 40, 40);
fill(23, 18, 18);
rect(184, 398, 70, -75);
noStroke();
ellipse(53, 20, 139, 48);
ellipse(96, 37, 110, 69);
ellipse(34, 72, 95, 69);
ellipse(359, 200, 118, 69);
ellipse(380, 234, 83, 69);

//array of BLUE lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }

    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();
};

//SCENE 9
var drawScene9 = function(){};

var redfire = function (x,y){
 this.x = x;
 this.y=y;
 this.speed=6 ;
 };
 
 
 redfire.prototype.move = function(){
     this.x-=this.speed;
     if (this.x < 0) {   
         this.x = 500;
     }

 };
 

 
 redfire.prototype.show = function (){
  fill(111, 104, 112);
 rect(this.x, this.y+43, 63, 59); 
 };
 

 
 
 //object of lava
 var lava = [];
 

var scorepoints = function (x,y){
 
this.x = x;
this.y=y;
 };

 var avatar = function(x,y){
           this.x= x;
           this.y= y;
           this.img= getImage("avatars/mr-pants-orange");
           //this.lava = 0;
           
   
};


 var page = function (){
 
 fill(150, 144, 150);
 rect(185,174,100,100);
background(227, 224, 227);
fill(8, 3, 3);
textSize(30);
text("You touched the grey",44,209);
text("Click anywhere to try harder level", -1, 255);
fill(0, 0, 0);
ellipse(200,356,10,90);
ellipse(218,356,10,90);
ellipse(241,356,10,90);
ellipse(262,356,10,90);
ellipse(288,356,10,90);
ellipse(316,356,10,90);
ellipse(340,356,10,90);
ellipse(368,356,10,90);
ellipse(18,356,10,90);
ellipse(46,356,10,90);
ellipse(178,356,10,90);
ellipse(67,356,10,90);
ellipse(154,356,10,90);
ellipse(133,356,10,90);
ellipse(90,356,10,90);
ellipse(111,356,10,90);
 };

 avatar.prototype.draw = function() {
      fill(199, 0, 199);
      this.y = constrain(this.y, 0, height-48);
      image(this.img, this.x, this.y, 40,40);
 };
var mrpants= new avatar (0, 400);
mrpants.draw ();

avatar.prototype.up= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y -= 6;  
};

avatar.prototype.down= function(){
    this.img= getImage("avatars/mr-pants-orange");
    this.y += 6;  
};

     avatar.prototype.checkhit = function (fire){
if (this.x > fire.x-10 && this.x < fire.x+10 && this.y > fire.y-10 && this.y < fire.y+100 === true) {
  fire.speed=0;
  page();
  
}
};


 var high = 20;

  for (var i = 0; i < 3; i++) {
   lava[i] = new redfire (400,300);
     //lava[i].show();

    }

 
draw= function() {
    


      
 
background(191,239,242);
fill(54, 224, 108);
rect(-12,301,493,100);
noStroke();
fill(186, 180, 180);
triangle(61,324,348,325,202,62);
triangle(-3,329,243,328,-12,89);
triangle(560,311,300,327,413,99);
fill(250, 250, 250);
rect(176,72,57,43);
fill(191, 239, 242);
rect(174,45,130,61);




//array of lava
    for (var i = 0; i < 3; i++) 
 {  lava[i].move(); 
     lava[i].show();
        mrpants.checkhit(lava[i]);
    }
    

    
    
      if (keyIsPressed){
      mrpants.up();
    }else  {
      mrpants.down();
    }
   mrpants.draw();


   fill(32, 166, 171);
    textSize(18);
text("Score:", 5, 26);
  
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
        drawScene6();
    }else if (currentScene === 6){
        drawScene7();
    }else if (currentScene === 7){
        drawScene8();
    }else if (currentScene ===8){
       drawScene9();
    } else if (currentScene === 9){
        drawScene1();
    }
    };
     
       
drawScene1();
//drawScene2();
//drawScene3(); 

