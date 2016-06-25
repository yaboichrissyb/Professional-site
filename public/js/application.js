 $(document).ready(function(){

  $("#mission").animate({opacity: 1.0},5000);

  $("#skills a").click(function(event){
    event.preventDefault();
    var skill = $(this).attr("class");
    if(skill === "full-text"){
      if($("div.full-text").hasClass("hidden")){
        $("div.full-text").removeClass("hidden").addClass("active");
        $("div.front-text").addClass("hidden").removeClass("active");
      }
    }
    else{
      if($("div.front-text").hasClass("hidden")){
        $("div.front-text").removeClass("hidden").addClass("active")
        $("div.full-text").addClass("hidden").removeClass("active");
      }
    }
  });


   $("#mission").mouseenter(function(){
    $("#arrow").animate({opacity: 1.0},500);
   }).mouseleave(function(){
    $("#arrow").animate({opacity: 0.0},500);
   });





 });

