function Spaceship(name, x, y, angle){
  this.name = name;
  this.angle = angle;
  this.control = false;
  this.lifeX = 2;
  this.lifeY = 2;
  this.x = x;
  this.y = y;
  this.speed = 20;
  this.turnSpeed = 10;
  this.element = $("<div>")
                .attr("id", this.name)
                .addClass("spaceship")
                .css({
                  top: this.y,
                  left: this.x,
                  transform: "rotate(" + this.angle + "deg)"
                });
  $(".wall").append(this.element);

}

Spaceship.prototype.rotate = function(direction){
  if (direction == "right") direction = 1;
  if (direction == "left") direction = -1;
  this.angle += direction * this.turnSpeed;
  this.element.css({
    transform: "rotate(" + this.angle + "deg)"
  });
};

Spaceship.prototype.move = function(direction){
    if (direction == "right") direction = 1;
    if (direction == "left") direction = -1;
    this.x += direction * this.speed;
    this.element.css({
      left: this.x,
      top: this.y
    });
};
