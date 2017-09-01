//
function Shot(ship, shotclass) {
  this.x = ship.x;
  this.y = ship.y;
  this.angle = ship.angle;
  this.soundshot = new Audio("../music/shoot.wav");
  this.explosion = new Audio("../music/explosion.wav");
  this.speedX = 50;
  this.speedY = 50;
  this.control = true;
  this.class= shotclass;
  this.element = $("<div>").addClass(shotclass).css({
    top: ship.y,
    left: ship.x,
  });
  $(".wall").append(this.element);
}

Shot.prototype.update = function() {
  if (this.x >= $(".wall").width() || this.x <= 0) {
    this.speedX *= -1;
  }
  if (this.y >= $(".wall").height()) {
    $(".bulletS1").remove();
    controlship1 = true;
    console.log(this.control);
  }

  if (180 > this.angle && this.angle > 90) {
    this.x -= 1 * this.speedX;
    this.y += 1 * this.speedY;
    this.element.css({
      top: this.y,
      left: this.x
    });
  }
  if (this.angle === 90) {
    this.y += 1 * this.speedY;
    $(".bulletS2").remove();
  }
  if (90 > this.angle > 0) {
    this.x += 1 * this.speedX;
    this.y += 1 * this.speedY;
    this.element.css({
      top: this.y,
      left: this.x
    });
  }


};

Shot.prototype.update1 = function() {
  if (this.x >= $(".wall").width() || this.x <= 0) {
    this.speedX *= -1;
  }
  if (this.y <= 0) {
    $(".bulletS2").remove();
    controlship2 = true;
  }
  if (180 > this.angle && this.angle > 90) {
    this.x += 1 * this.speedX;
    this.y -= 1 * this.speedY;
    this.element.css({
      top: this.y,
      left: this.x
    });
  }
  if (this.angle === 90) {
    this.y -= 1 * this.speedY;
    $(".bulletS2").remove();
  }
  if (90 > this.angle > 0) {
    this.x -= 1 * this.speedX;
    this.y -= 1 * this.speedY;
    this.element.css({
      top: this.y,
      left: this.x
    });
}
};


// if (this.y <= 0) {
//   $(".bullet").remove();
// }
// this.x += (Math.sin(this.angle)) * (this.speedX); //cos(0)=1
// this.y += (Math.cos(this.angle)) * (this.speedY); //sin(0)=1
// this.element.css({
//   top: this.y,
//   left: this.x
// }); RECORDAR CONVERTIR A ANGULO
