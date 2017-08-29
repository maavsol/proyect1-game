//-------------------------------------------------------------
//---------------- Key functions crontrol ---------------------
//-------------------------------------------------------------



var spaceShip1;
var spaceShip2;
var bullet;
var keys = {};

$(document).ready(function() {
  spaceShip1 = new Spaceship("ship1", 100);
  spaceShip2 = new Spaceship("ship2", 100);
  spaceShip1.placeInBoard(0, 250);
  spaceShip2.placeInBoard(620,250);

  // bullet = new Shot (10,10,10);
  setInterval(checkControls, 100);

});

$(document).keydown(function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});


function checkControls() {
  if (keys[37]) {
    console.log("rota");
    spaceShip1.rotate("right");
    console.log("rota");
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
  // else if (keys[76]){
  //   console.log("dsipara");
  //   bullet.renderBullet();
  // }
}
