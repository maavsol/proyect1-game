function Spaceship(name){
  this.name = name;
  this.posLeft = 0;
  this.speed = 1;
  this.posTop = 0;
  this.speed = 8;
  this.angle = 0;
  this.posLeft = 0;
  this.posTop = 0;
  this.pointAt = 0;
  this.turnSpeed = 10;
  // this.offX = 10;
  // this.offY = 0;
  // this.strength = strength;
}


Spaceship.prototype.placeInBoard = function(offX, offY){
  console.log(this);
  var element = $("<div>").attr("id", this.name).addClass("spaceship");
  $(".wall").append(element);
  element.css({
    top: this.posTop + offX,
    left: this.posLeft + offY,
  });
};

Spaceship.prototype.rotate = function(direction){
  if (direction == "right"){
    $('#' + this.name ).css({
      transform: "rotate(" + (this.angle += this.turnSpeed) + "deg)"
    });
  } else if (direction == "left") {
    $('#' + this.name ).css({
      transform: "rotate(" + (this.angle -= this.turnSpeed) + "deg)"
    });
  }
};

Spaceship.prototype.move = function(direction){
  if (direction == "right" && this.posLeft <= 510){
    $('#' + this.name).css({
      left: this.posLeft += this.offX
    });
  } else if(direction == "left" && this.posLeft >= 0){
    $('#' + this.name).css({
      left: this.posLeft -= this.offX
    });
  }
};
// first attempt at main methods
// }
//
// Spaceship.prototype.attack = function(){
//   return this.strength;
// };
//
// Spaceship.prototype.receiveDamage = function(damage){
//   return this.health -= damage ;
// };
//
// Spaceship.prototype.moveRight = function(){
//   console.log('derecha');
//   this.positionX +=4;
// };
//
// Spaceship.prototype.moveLeft = function(a){
//   a-=4;
//   this.positionX -=4;
// };
//
// Spaceship.prototype.rotateLeft = function(key, element){
//   e.keycode === 37 ? this.angle += 5 : this.angle -= 5;
//   element.css("transform", "rotate(" + this.angle + "deg)");
// };
//
// Spaceship.prototype.rotateRight = function(){
//   this.angle =1;
// };
