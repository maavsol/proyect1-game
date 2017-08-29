//-------------------------------------------------------------
//---------------- Key functions crontrol ---------------------
//-------------------------------------------------------------



var spaceShip1;
var spaceShip2;
var keys = {};
setInterval(checkControls, 100);

$(document).ready(function() {
  spaceShip1 = new Spaceship("ship1", 100);
  spaceShip2 = new Spaceship("ship2", 100);
  //   spaceShip= new Spaceship(100, 100, 40, 0);
  //   console.log(spaceShip);


});

$(document).keydown(function(e) {
  keys[e.keyCode] = true;
}).keyup(function(e) {
  delete keys[e.keyCode];
});


function checkControls() {
  if (keys[37]) {
    console.log("it turns right");
    spaceShip1.rotate("right");
  } else if (keys[39]) {
    console.log("it turns left");
    spaceShip1.rotate("left");
  } else if (keys[190]) {
    console.log("it moves right");
    spaceShip1.move("right");
  } else if (keys[188]) {
    console.log("it moves left");
    spaceShip1.move("left");
  } else if (keys[50]) {
    console.log("it turns right");
    spaceShip2.rotate("right");
  } else if (keys[49]) {
    console.log("it turns left");
    spaceShip2.rotate("left");
  } else if (keys[68]) {
    console.log("it moves right");
    spaceShip2.move("right");
  } else if (keys[65]) {
    console.log("it moves left");
    spaceShip2.move("left");
  }


  // first attempts at movement and rotation
  //   var a;
  //   if (keys[188]){
  //     a = parseInt($("#ship2").css('left')) - 4;
  //     $("#ship2").css('left', a+'px');
  //     spaceShip.moveLeft();
  //   }
  //   else if (keys[190]){
  //     a=parseInt($("#ship2").css('left')) + 4;
  //     $("#ship2").css('left', a+'px');
  //     spaceShip.moveRight();
  //   }
  //   else if (keys[65]){
  //     a = parseInt($("#ship1").css('left')) - 4;
  //     $("#ship1").css('left', a+'px');
  //     spaceShip.moveLeft();
  //   }
  //   else if(keys[68]){
  //     a=parseInt($("#ship1").css('left')) + 4;
  //     $("#ship1").css('left', a+'px');
  //     spaceShip.moveRight();
  //   }
  //   else if (keys[37]){
  //     spaceShip.rotateRight(e.keycode, this.ship1);
  // }


  // var a;
  // if (keys[37]){
  //   a = ($("#ship2").css("transform"));
  //   console.log(a);
  //   var f = "rotate(" + a + "deg)";
  //   $("#ship2").css("transform", "rotate(" + a + "deg)");
  //   spaceShip.rotateRight();
  // }
}
