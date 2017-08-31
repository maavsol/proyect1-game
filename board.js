function Board(){

  //life bar and filling
  this.element = $("<div>").addClass("lifenav1");
  $("#background").append(this.element);
  this.element2 = $("<div>").addClass("lifenav2");
  $("#background").append(this.element2);
  this.element3 = $("<div>").addClass("bar");
  $(".lifenav1").append(this.element3);
  this.element4 = $("<div>").addClass("bar");
  $(".lifenav2").append(this.element4);
}
