var spaceShip;
var keys = {};

$(document).ready(function() {
  spaceShip= new Spaceship(100, 100, 40);
  console.log(spaceShip);
  setInterval(checkControls, 10);

});

$(document).keydown(function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});

function checkControls() {
  var a;
  console.log("entro checkcontrols");
  if (keys[188]){
    a = parseInt($("#ship2").css('left')) -4;
    console.log(a);
    $("#ship2").css('left', a+'px');
    spaceShip.moveLeft(parseInt($("#ship2").css('left')));
  }
  else if (keys[190]){
    a=parseInt($("#ship2").css('left')) + 4;
    $("#ship2").css('left', a+'px');

    spaceShip.moveRight($(".ship"));
  }
}
