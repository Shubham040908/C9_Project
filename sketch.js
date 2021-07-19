var btn_red;
var btn_green;
var btn_blue;
var btn_yellow;
var btn_pink;
var btn_purple;


var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(100,100);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(200,100);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(100,150);
  btn_blue.mousePressed(blue_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(200,150);
  btn_yellow.mousePressed(yellow_bg);

  btn_pink = createButton("PINK");
  btn_pink.position(100,200);
  btn_pink.mousePressed(pink_bg);
  
  btn_purple = createButton("PURPLE");
  btn_purple.position(200,200);
  btn_purple.mousePressed(purple_bg);
}


  


function red_bg() {
 r =255;
 g=0;
 b=0;
}

function green_bg() {
  r =0;
  g=255;
  b=0;
 }

 function blue_bg() {
  r =0;
  g=0;
  b=255;
 }

 function yellow_bg() {
  r =255;
  g=255;
  b=0;
 }

 function pink_bg() {
  r=255;
  g=182;
  b=193;
 }

 function purple_bg() {
  r=128;
  g=0;
  b=128;
 }

function draw() {
  background(r,g,b);

}


