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
  life1 = new Board();
  asteroid1 = new Asteroid(50, 400, 5);
  asteroid2 = new Asteroid(100, 200, 30);


  // bullet = new Shot (10,10,10);
  setInterval(function (){
    checkControls();
    if(bullet)bullet.update();
    if(bullet1)bullet1.update1();
    if(asteroid1)asteroid1.updateAsteroid();
    if(asteroid2)asteroid2.updateAsteroid();

    checkImpact();
    checkImpact2();
    asteroidImpact();
  } ,100);



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
    bullet = new Shot(spaceShip1, "bulletS1");
    controlship1 = false;}
    }
  if (keys[86]){
    if(controlship2 == true){
    bullet1 = new Shot(spaceShip2, "bulletS2");
    controlship2 = false;}
  }
}


function checkImpact(){
  var impactoenS2 = ($(".bulletS1").collision("#ship2"));
  if(impactoenS2[0]){
    $(impactoenS2).css("background-image", "url('../images/200.gif')");
    setTimeout(function(){
    $(impactoenS2).css("background-image", "url('../images/nave2.png')");
  }, 800);
  }
}

function checkImpact2(){
  var impactoenS1 = ($(".bulletS2").collision("#ship1"));
  if(impactoenS1[0]){
    $(impactoenS1).css("background-image", "url('../images/200.gif')");
    setTimeout(function(){
    $(impactoenS1).css("background-image", "url('../images/nave1.png')");
  }, 800);
  }
}

function asteroidImpact(){
  var impactas1 = ($(".bulletS1").collision(".asteroid"));
  if(impactas1[0]){
    console.log("habemus impactum");
    $(impactas1).css("background-image", "url('../images/astronaut.png')");
  }
}

});
