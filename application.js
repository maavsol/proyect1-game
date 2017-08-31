//-------------------------------------------------------------
//---------------- Key functions crontrol ---------------------
//-------------------------------------------------------------


var controlship1 = true;
var controlship2 = true;
var spaceShip1;
var spaceShip2;
var bullet;
var bullet1;
var keys = {};
var boardHeight = $(".wall").height();
var navHeight = $("#ship2").height();

$(document).ready(function() {
  spaceShip1 = new Spaceship("ship1", 90, 0, 90);
  spaceShip2 = new Spaceship("ship2", 90, 620, 90);


  // bullet = new Shot (10,10,10);
  setInterval(function (){
    checkControls();
    if(bullet)bullet.update();
    if(bullet1)bullet1.update1();
  } ,100);

});

$(document).keydown(function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});


function checkControls() {
  if (keys[37]) {
    spaceShip1.rotate("right");
  } else if (keys[39]) {
    spaceShip1.rotate("left");
  } else if (keys[190]) {
    spaceShip1.move("right");
  } else if (keys[188]) {
    spaceShip1.move("left");
  } else if (keys[50]) {
    spaceShip2.rotate("right");
  } else if (keys[49]) {
    spaceShip2.rotate("left");
  } else if (keys[68]) {
    spaceShip2.move("right");
  } else if (keys[65]) {
    spaceShip2.move("left");
  }

  if (keys[77]){
  if(controlship1 == true){
    bullet = new Shot(spaceShip1);
    controlship1 = false;}
    }
  if (keys[86]){
    if(controlship2 == true){
    bullet1 = new Shot(spaceShip2);
    controlship2 = false;}
  }
}
