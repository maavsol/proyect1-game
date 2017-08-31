function Board(){

  //life name, bar and filling
  this.element5 = $("<div>").addClass("name").text("Nave buena");
  $("#background").append(this.element5);
  this.element6 = $("<div>").addClass("name1").text("Nave mala");
  $("#background").append(this.element6);
  this.element = $("<div>").addClass("lifenav1");
  $("#background").append(this.element);
  this.element2 = $("<div>").addClass("lifenav2");
  $("#background").append(this.element2);
  this.element3 = $("<div>").addClass("bar1");
  $(".lifenav1").append(this.element3);
  this.element4 = $("<div>").addClass("bar");
  $(".lifenav2").append(this.element4);

}
