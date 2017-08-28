function Spaceship(health,strength,x){
  this.health = health;
  this.strength = strength;
  this.positionX = x;
  this.angle = 0;
}

Spaceship.prototype.attack = function(){
  return this.strength;
};

Spaceship.prototype.receiveDamage = function(damage){
  return this.health -= damage ;
};

Spaceship.prototype.moveRight = function(){
  console.log('derecha');
  this.positionX +=8;
};

Spaceship.prototype.moveLeft = function(a){
  a-=8;
  this.positionX -=8;
};

Spaceship.prototype.rotateLeft = function(){
  this.angle -=1;
};

Spaceship.prototype.rotateRight = function(){
  this.angle =1;
};


// var a = parseInt($("#paddle1").css('top'));
// var paddleHeight = parseInt($(".paddle").css('height'));
// var boardLowerLimit = parseInt($("#board").css('height'));
// var lowerLimit = boardLowerLimit - paddleHeight;
//
// if (a >= lowerLimit){
//   return;}
//   else{
// a +=8;
// $("#paddle1").css('top', a +'px');
// }
