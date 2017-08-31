function Asteroid(x, y, speed){
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.element = $('<div>').attr("class","asteroid");
  this.element.css({top:this.y, left:this.x, position:'absolute'});
  $('.wall').append(this.element);
}

Asteroid.prototype.updateAsteroid = function(){
  this.x += this.speed;
  this.element.css({top:this.y, left:this.x, position:'absolute'});

  if(this.x >= $(".wall").width() || this.x <= 0){
    this.speed *= -1;
  }
};
